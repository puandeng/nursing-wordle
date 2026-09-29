#!/usr/bin/env python3
"""Download lesion images from Wikipedia."""
import json
import os
import time
import urllib.request
import urllib.error

# Entries marked COMMONS were re-sourced directly from Wikimedia Commons after
# an audit found the article-summary thumbnails were wrong: vesicle/bulla/pustule
# all resolved to the same generic skin-anatomy schematic, scale duplicated
# plaque, lichenification returned a histology slide, atrophic-scar showed active
# acne, and grouped showed a single lesion. Those are fetched by file name via
# find_lesion_images.py rather than by article title.
#
# Dropped entirely - no free image of the actual finding could be found:
#   erosion, polycyclic, cavernous-hemangioma
COMMONS_FILES = {
    "vesicle": "Vésicule varicelle chickenpox.jpg",
    "bulla": "Impetigo contagusum ,bulbous impetigo new photo for diagnosis.jpg",
    "pustule": "Rosacea 01.jpg",
    "scale": "Ichthyosis (1).jpg",
    "lichenification": "Lichen simplex chronicus 4.jpg",
    "grouped": "Sequeira Plate 40.jpg",
    "atrophic-scar": "Atrophic scar, slightly hyperpigmented 01.jpg",
}

LESIONS = [
    ("annular", "Granuloma_annulare"),
    ("confluent", "Measles"),
    ("discrete", "Molluscum_contagiosum"),
    ("gyrate", "Erythema_annulare_centrifugum"),
    ("target", "Erythema_multiforme"),
    ("linear", "Contact_dermatitis"),
    ("zosteriform", "Herpes_zoster"),
    ("macule", "Freckle"),
    ("patch", "Vitiligo"),
    ("papule", "Papule"),
    ("plaque", "Psoriasis"),
    ("nodule", "Erythema_nodosum"),
    ("tumor", "Basal-cell_carcinoma"),
    ("wheal", "Dermatographic_urticaria"),
    ("urticaria", "Urticaria"),
    ("cyst", "Epidermoid_cyst"),
    ("crust", "Impetigo"),
    ("fissure", "Angular_cheilitis"),
    ("ulcer", "Venous_ulcer"),
    ("excoriation", "Excoriation_disorder"),
    ("scar", "Scar"),
    ("keloid", "Keloid"),
    ("hemangioma", "Hemangioma"),
    ("port-wine-stain", "Port-wine_stain"),
    ("strawberry-mark", "Infantile_hemangioma"),
    ("telangiectasia", "Telangiectasia"),
    ("spider-angioma", "Spider_angioma"),
    ("venous-lake", "Venous_lake"),
    ("petechiae", "Petechia"),
    ("purpura", "Purpura"),
]

os.makedirs("public/lesions", exist_ok=True)
headers = {"User-Agent": "NursingGames/1.0 (educational project; lesion image downloader)"}

ok = 0
fail = 0
failed_list = []

for lesion_id, wiki in LESIONS:
    out_path = f"public/lesions/{lesion_id}.jpg"
    if os.path.exists(out_path):
        print(f"SKIP (exists): {lesion_id}")
        ok += 1
        continue

    api_url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{wiki}"
    try:
        req = urllib.request.Request(api_url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read())

        img_url = data.get("thumbnail", {}).get("source", "")
        if not img_url:
            img_url = data.get("originalimage", {}).get("source", "")

        if not img_url:
            print(f"SKIP (no image): {lesion_id} ({wiki})")
            fail += 1
            failed_list.append(lesion_id)
            continue

        img_req = urllib.request.Request(img_url, headers=headers)
        with urllib.request.urlopen(img_req, timeout=10) as img_resp:
            img_data = img_resp.read()

        with open(out_path, "wb") as f:
            f.write(img_data)

        print(f"OK: {lesion_id} ({len(img_data):,} bytes)")
        ok += 1
    except Exception as e:
        print(f"FAIL: {lesion_id} — {e}")
        fail += 1
        failed_list.append(lesion_id)

    time.sleep(0.5)

print(f"\nDone: {ok} downloaded, {fail} failed")
if failed_list:
    print(f"Failed: {', '.join(failed_list)}")
