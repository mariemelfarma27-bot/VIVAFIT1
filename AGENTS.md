# AGENTS.md — VIVAFIT

## What this is

Static fitness website (HTML/CSS/JS). No backend, no build system, no package manager, no tests. All app lives in `VIVAFIT/`.

## Project layout

```
VIVAFIT/
  css/login.css           # Shared base styles + login/signup (dark theme, red accent #ff1530)
  css/profile.css         # Profile page styles + saved workouts grid
  css/workouts.css        # Workouts page styles + workout cards
  css/workout-modal.css   # Workout detail modal styles
  css/nutrition.css       # Nutrition placeholder page styles
  css/progress.css        # Progress page styles (charts, forms, stats, quote banner)
  js/login.js             # Login form validation + simulated auth
  js/signup.js            # Signup form validation
  js/profile.js           # Profile save/load + saved workouts display via localStorage
  js/workouts.js          # Workout data, rendering, filters, modal, localStorage save
  js/progress.js          # Progress charts (Chart.js), data logging, quote rotation, localStorage
  dashboard.html          # Post-login landing page
  login.html              # Sign-in page
  signup.html             # Registration page
  profile.html            # User profile editor + saved workouts
  workouts.html           # Workout categories grid + modal
  nutrition.html          # Placeholder — "Coming Soon"
  progress.html           # Progress tracking (Chart.js charts, log forms, motivation quotes)
  images/img.png          # Logo
```

## Tech stack

- Vanilla HTML5 / CSS3 / ES6+ JavaScript
- Bootstrap 5.3.3 via CDN
- Font Awesome 6.5.2 via CDN
- Chart.js 4.4.7 via CDN (progress page)
- Google Fonts (Poppins) via CDN
- No TypeScript, no bundler, no linting, no formatter

## How to run

Open any `.html` file in a browser. No server required (though `file://` may block some localStorage operations — use a local server like `python -m http.server` or VS Live Server if needed).

## localStorage keys

| Key | Type | Purpose |
|---|---|---|
| `vivafitProfile` | object | User profile data (name, phone, email, age, height, weight, goal, image) |
| `vivafitWorkouts` | array | Saved workouts: `[{id, name, category, addedAt}]` |
| `vivafitWeightLog` | array | Weight entries: `[{date, weight}]` |
| `vivafitMeasurements` | array | Body measurements: `[{date, chest, waist, arms, thighs}]` |
| `vivafitLiftLog` | array | Lift log: `[{date, exercise, weight, reps, normalSets, warmupSets, failureSets}]` |

## Gotchas for agents

- **No build/test/lint commands exist.** Do not look for `package.json`, `npm run`, or CI workflows — there are none.
- **`signup.html` has markdown code fences** — the file starts with `` ```html `` on line 1 and ends with `` ``` `` on line 258. The browser will render the backticks as visible text. Remove them if editing this file.
- **No real auth** — login/signup are client-side simulations. After validation, user is redirected to `dashboard.html` after a 1.5s delay.
- **CSS shared across pages** — `css/login.css` contains base styles (reset, navbar, animated background) used by ALL pages, not just login.
- **Workout data is hardcoded** in `js/workouts.js` — 8 workout categories with 5 exercises each.
- **Placeholder pages** — `nutrition.html` is a "Coming Soon" placeholder with no real functionality. `progress.html` is fully functional with Chart.js charts.

## Style conventions

- Dark theme with red accent (`#ff1530`)
- Bootstrap grid and components for layout
- Inline `<style>` blocks in some HTML files alongside external CSS
- CDN-loaded dependencies (no local copies of Bootstrap/FA)
- Mobile-responsive: breakpoints at 900px, 650px, 600px, 400px across CSS files
