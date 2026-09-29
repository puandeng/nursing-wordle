# Nursing Games

Vite + React 19 educational nursing quiz app with tab-based game navigation.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — run oxlint

## Project structure

```
src/
  App.jsx              — tab router, registers all games
  App.css              — tab bar and layout
  index.css            — CSS custom properties (theme tokens)
  main.jsx             — React root
  components/          — one .jsx + .css pair per game
  data/                — game content (one .js per game)
public/
  lesions/             — downloaded Wikipedia images (*.jpg)
```

## Adding a new game

1. Create `src/data/<game>.js` with game content and helpers.
2. Create `src/components/<Game>.jsx` + `<Game>.css`.
3. Import and register in `src/App.jsx`: add a TABS entry and a conditional render in `<main>`.

## Data file conventions

Each game's data lives in `src/data/<name>.js`. Follow these patterns:

- **Export style**: use named exports (`export const ITEMS = [...]`, `export function getRandomItem()`).
- **Item shape**: each item is a plain object with an `id` (kebab-case string) and display fields. Keep IDs unique and stable — they're used as React keys and image filenames.
- **Randomization helpers**: export a `getRandom*(count, excludeId?)` function that picks items without repeats. Use Fisher-Yates or `sort(() => Math.random() - 0.5)`.
- **Distractor generation**: for multiple-choice games, export a `generateOptions(correct, allItems, count)` that picks distractors from the same category first, then fills from others. Always shuffle the final array.
- **Ordered data** (Procedure Sort): each item has a `steps` array of strings in correct order. `shuffleSteps()` assigns `correctIndex` to each step object before shuffling.
- **Constants**: export round counts and config values as named constants (`ROUNDS_PER_GAME`, `MAX_ATTEMPTS`).

## Styling and theming

All colors use CSS custom properties defined in `src/index.css`. Never use raw color values in component CSS.

### Theme tokens

```
--text          main text
--text-muted    secondary/hint text
--bg            page background
--surface       card/panel background
--border        borders and dividers
--hover         hover/focus backgrounds
--accent        primary action color (indigo)
--clue-bg       info panel background
--wrong-bg      incorrect answer background
--wrong-text    incorrect answer text
--correct-bg    correct answer background
--correct-text  correct answer text
```

### Dark mode

Light values are on bare `:root`. Dark overrides are defined twice:
1. `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { ... } }` — respects system preference
2. `:root[data-theme="dark"] { ... }` — explicit toggle override

### CSS conventions

- BEM-style class names scoped per game: `.game-name__element--modifier`
- Buttons: `.game-name__btn` base class, `--primary` for accent, `--hint`/`--skip` for secondary actions
- Correct/wrong states: `--correct` and `--wrong` modifiers using the theme tokens
- Transitions: 0.15s for interactive feedback, 0.3s for layout shifts
- Max-width 500-600px centered with `margin: 0 auto`
- Mobile-first: use `touch-action: none` on draggable elements, support both mouse drag and touch events

## Wikipedia image pipeline

For games that need images (e.g., Lesion ID), use a Python download script:

1. Create a `download_<name>.py` at project root.
2. Map each item ID to a Wikipedia article title.
3. Fetch the thumbnail URL from the Wikipedia REST API: `https://en.wikipedia.org/api/rest_v1/page/summary/{title}` — use `thumbnail.source` or `originalimage.source`.
4. Download the image to `public/<name>/<id>.jpg`.
5. Set a `User-Agent` header (required by Wikipedia).
6. Add `time.sleep(0.5)` between requests to avoid 429 rate limiting. On retry, use 2-5s delays.
7. Skip files that already exist (`os.path.exists` check) so the script is re-runnable.
8. Reference images in React as `/<name>/<id>.jpg` (Vite serves `public/` at root).
9. Always add an `onError` handler on `<img>` tags to gracefully handle missing images.
