#!/usr/bin/env python3
"""
Search Wikimedia Commons for candidate clinical photos of specific lesion types.

The original download_lesions.py pulled each Wikipedia article's *summary
thumbnail*, which for redirect-y morphology terms (vesicle, bulla, erosion)
returned a generic skin-anatomy schematic rather than a photo. This searches
the File: namespace directly so we get actual clinical images, and records
license/author metadata for attribution.

Writes candidates to candidates/<lesion-id>/NN_<file>.jpg plus a
candidates/<lesion-id>/meta.json describing each.
"""
import json
import os
import time
import urllib.parse
import urllib.request

API = "https://commons.wikimedia.org/w/api.php"
UA = "NursingGames/1.0 (educational project; lesion image sourcing)"

# Morphology term -> search phrases likely to surface a true clinical photo.
QUERIES = {
    "erosion": [
        "intertrigo erosion skin", "eczema herpeticum erosions",
        "toxic epidermal necrolysis skin", "erosive lichen planus mucosa",
        "impetigo erosion",
    ],
    "polycyclic": [
        "subacute cutaneous lupus erythematosus rash",
        "tinea corporis", "urticaria annular polycyclic",
        "erythema annulare centrifugum",
    ],
    "atrophic-scar": [
        "acne scarring face", "boxcar acne scars", "post acne scars skin",
        "atrophic scar",
    ],
    "cavernous-hemangioma": [
        "venous malformation skin", "cavernous hemangioma tongue",
        "hemangioma lip adult", "venous malformation arm",
    ],
    "pustule": [
        "acne pustules face", "folliculitis skin pustules",
        "impetigo pustules", "pustular rash skin",
    ],
}

PER_QUERY = 3


def fetch(url, tries=5):
    """GET with backoff. Commons 429s aggressively; be patient rather than loud."""
    delay = 4
    for attempt in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=30) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code != 429 or attempt == tries - 1:
                raise
            print(f"    (429, waiting {delay}s)")
            time.sleep(delay)
            delay *= 2
    raise RuntimeError("unreachable")


def api(params):
    params = {**params, "format": "json"}
    return json.loads(fetch(API + "?" + urllib.parse.urlencode(params)))


def search(term, limit):
    """Return file pages matching `term`, with url + license metadata."""
    try:
        data = api({
            "action": "query",
            "generator": "search",
            "gsrsearch": f"{term} filetype:bitmap",
            "gsrnamespace": 6,
            "gsrlimit": limit,
            "prop": "imageinfo",
            "iiprop": "url|size|extmetadata",
            # 640 is one of Commons' pre-rendered sizes; arbitrary widths force
            # on-the-fly thumbnailing, which is what trips the rate limiter.
            "iiurlwidth": 640,
        })
    except Exception as e:
        print(f"    ! search failed ({term}): {e}")
        return []

    out = []
    for page in (data.get("query", {}).get("pages", {}) or {}).values():
        info = (page.get("imageinfo") or [{}])[0]
        if not info.get("thumburl"):
            continue
        meta = info.get("extmetadata", {})
        out.append({
            "title": page.get("title", ""),
            "url": info["thumburl"],
            "descurl": info.get("descriptionurl", ""),
            "license": meta.get("LicenseShortName", {}).get("value", "?"),
            "artist": meta.get("Artist", {}).get("value", "?")[:160],
            "query": term,
        })
    return out


def main():
    os.makedirs("candidates", exist_ok=True)
    for lesion, terms in QUERIES.items():
        outdir = os.path.join("candidates", lesion)
        os.makedirs(outdir, exist_ok=True)
        if [f for f in os.listdir(outdir) if f.endswith(".jpg")]:
            print(f"\n=== {lesion} (already have candidates, skipping)")
            continue
        print(f"\n=== {lesion}")
        seen, records, n = set(), [], 0
        for term in terms:
            for c in search(term, PER_QUERY):
                if c["title"] in seen:
                    continue
                seen.add(c["title"])
                n += 1
                path = os.path.join(outdir, f"{n:02d}.jpg")
                try:
                    blob = fetch(c["url"])
                    with open(path, "wb") as f:
                        f.write(blob)
                    c["file"] = path
                    records.append(c)
                    print(f"  {n:02d} {c['title'][:62]:64} [{c['license']}]")
                except Exception as e:
                    print(f"  !! {c['title'][:50]} - {e}")
                time.sleep(1.5)
            time.sleep(2.5)
        with open(os.path.join(outdir, "meta.json"), "w") as f:
            json.dump(records, f, indent=2)


if __name__ == "__main__":
    main()
