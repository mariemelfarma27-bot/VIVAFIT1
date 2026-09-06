# PLAN.md — VIVAFIT Workout System Update

## Checklist

- [x] Phase 1 — Bug Fixes
- [x] Phase 2 — Workout Modal System
- [x] Phase 3 — Workout Data & Interactivity
- [x] Phase 4 — Profile — Saved Workouts
- [x] Phase 5 — Missing Pages (Placeholders)
- [x] Phase 6 — Final Cleanup & Verification

---

## Phase 1: Bug Fixes (Quick Wins) ✅ DONE

**Goal:** Fix existing issues before adding new features.

| # | File | Action | What |
|---|---|---|---|
| 1.1 | `signup.html` | Fix | Remove `` ```html `` on line 1 and `` ``` `` on line 258 | ✅ |
| 1.2 | `workouts.html` | Fix | Remove `<script src="js/workouts.js">` reference (will be re-added properly in Phase 3) | ✅ |

**Deliverable:** Existing pages work without errors.

---

## Phase 2: Workout Modal System ✅ DONE

**Goal:** Add the modal component that shows workout details when "Start Workout" is clicked.

| # | File | Action | What |
|---|---|---|---|
| 2.1 | `css/workout-modal.css` | Create | Modal overlay, card, exercise list, buttons — dark theme, red accent | ✅ |
| 2.2 | `workouts.html` | Update | Add modal HTML structure (hidden by default) before `</body>` | ✅ |
| 2.3 | `workouts.html` | Update | Link `css/workout-modal.css` in `<head>` | ✅ |

**Deliverable:** Modal markup + styles ready. No JS wiring yet.

---

## Phase 3: Workout Data & Interactivity ✅ DONE

**Goal:** Create the missing `workouts.js` with real exercise data, filters, and modal logic.

| # | File | Action | What |
|---|---|---|---|
| 3.1 | `js/workouts.js` | Create | Workout data object (8 categories, 4-6 exercises each with sets/reps/rest) | ✅ |
| 3.2 | `js/workouts.js` | Create | Render workout cards dynamically from data | ✅ |
| 3.3 | `js/workouts.js` | Create | Filter button logic (strength, cardio, full-body) | ✅ |
| 3.4 | `js/workouts.js` | Create | Modal open/close — populate with workout details on click | ✅ |
| 3.5 | `js/workouts.js` | Create | "Add to My Workouts" — save to `localStorage.vivafitWorkouts` | ✅ |
| 3.6 | `js/workouts.js` | Create | Duplicate detection — show "Already Saved" if workout exists | ✅ |
| 3.7 | `workouts.html` | Update | Add 4 new workout card placeholders (Anterior/Posterior, Push, Pull, Legs) | ✅ |
| 3.8 | `workouts.html` | Update | Update filter buttons to cover all tags | ✅ |
| 3.9 | `workouts.html` | Update | Re-add `<script src="js/workouts.js">` properly | ✅ |

**Deliverable:** Fully interactive workouts page. Click any card → modal opens with real exercises → can save to profile.

---

## Phase 4: Profile — Saved Workouts ✅ DONE

**Goal:** Show saved workouts on the profile page with remove capability.

| # | File | Action | What |
|---|---|---|---|
| 4.1 | `profile.html` | Update | Add "MY WORKOUTS" section (between fields and buttons) | ✅ |
| 4.2 | `css/profile.css` | Update | Styles for saved workout cards, grid, remove button, empty state | ✅ |
| 4.3 | `js/profile.js` | Update | Load `vivafitWorkouts` from localStorage on page load | ✅ |
| 4.4 | `js/profile.js` | Update | Render saved workout cards (name, category, date added) | ✅ |
| 4.5 | `js/profile.js` | Update | Remove button — delete from localStorage, re-render | ✅ |

**Deliverable:** Profile page shows saved workouts. User can remove them.

---

## Phase 5: Missing Pages (Placeholders) ✅ DONE

**Goal:** Create nutrition.html and progress.html so navbar links stop 404ing.

| # | File | Action | What |
|---|---|---|---|
| 5.1 | `nutrition.html` | Create | Same navbar/background structure, "Coming Soon" content | ✅ |
| 5.2 | `css/nutrition.css` | Create | Minimal placeholder styles | ✅ |
| 5.3 | `progress.html` | Create | Same navbar/background structure, "Coming Soon" content | ✅ |
| 5.4 | `css/progress.css` | Create | Minimal placeholder styles | ✅ |

**Deliverable:** No more broken navbar links.

---

## Phase 6: Final Cleanup & Verification

**Goal:** Make sure everything works together.

| # | Task | What |
|---|---|---|
| 6.1 | Cross-page navbar | Verify all 5 pages have consistent navbar links |
| 6.2 | localStorage | Verify `vivafitProfile` and `vivafitWorkouts` work correctly |
| 6.3 | Mobile | Check modal, profile workouts, and new pages on small screens |
| 6.4 | Update AGENTS.md | Document the new workout system, localStorage keys, and file structure |

**Deliverable:** Everything works. AGENTS.md reflects the final state.

---

## Phase 7: Progress Page (Charts + Motivation Quotes) ✅ DONE

**Goal:** Replace "Coming Soon" placeholder with a fully functional progress tracking page using Chart.js.

| # | File | Action | What |
|---|---|---|---|
| 7.1 | `js/progress.js` | Create | Chart.js charts (weight, measurements, lifts, workouts/week, sets breakdown), form handlers, quote rotation, localStorage CRUD |
| 7.2 | `css/progress.css` | Rewrite | Full dashboard styles — quote banner, stats row, chart cards, log forms, two-col layout, responsive |
| 7.3 | `progress.html` | Rewrite | Complete progress page — navbar, quote, stats, 5 chart sections with log forms |
| 7.4 | `progress.html` | Update | Add Chart.js CDN (`chart.js@4.4.7`) in `<head>` |

**Deliverable:** Fully interactive progress page with 5 Chart.js charts (dark-themed, red accent), manual log forms for weight/measurements/lifts, auto-derived workouts-per-week and sets breakdown charts, and rotating motivation quotes.

### Progress Page Features
- **Motivation Quote Banner** — random quote from 20 fitness quotes, rotates on page load
- **Summary Stats** — Total Workouts, Day Streak, Weight Change, Lifts Logged
- **Weight Tracking** — Line chart + date/weight log form
- **Body Measurements** — Multi-line chart (chest, waist, arms, thighs) + log form
- **Lift Tracking** — Grouped bar chart + exercise dropdown with weight/reps/sets inputs
- **Sets Breakdown** — Doughnut chart (normal/warmup/failure sets, auto-derived)
- **Workouts Per Week** — Bar chart (last 8 weeks, auto-derived from saved workouts)

### New localStorage Keys

| Key | Type | Purpose |
|---|---|---|
| `vivafitWeightLog` | `[{date, weight}]` | User weight entries over time |
| `vivafitMeasurements` | `[{date, chest, waist, arms, thighs}]` | Body measurements over time |
| `vivafitLiftLog` | `[{date, exercise, weight, reps, normalSets, warmupSets, failureSets}]` | Per-exercise lift tracking |

---

## localStorage Keys

| Key | Type | Purpose |
|---|---|---|
| `vivafitProfile` | object | User profile data (existing) |
| `vivafitWorkouts` | array of objects | Saved workouts: `[{id, name, category, addedAt}]` |
| `vivafitWeightLog` | array of objects | Weight entries: `[{date, weight}]` |
| `vivafitMeasurements` | array of objects | Body measurements: `[{date, chest, waist, arms, thighs}]` |
| `vivafitLiftLog` | array of objects | Lift log: `[{date, exercise, weight, reps, normalSets, warmupSets, failureSets}]` |

---

## Workout Data Structure

```js
{
    id: "upper-body",
    name: "Upper Body",
    category: "strength",
    icon: "fa-solid fa-dumbbell",
    description: "Build stronger arms, chest and back.",
    duration: "40 min",
    difficulty: "Medium",
    exercises: [
        { name: "Bench Press", sets: 4, reps: "10", rest: "90s" },
        { name: "Overhead Press", sets: 3, reps: "12", rest: "60s" },
        { name: "Barbell Row", sets: 4, reps: "10", rest: "90s" },
        { name: "Bicep Curls", sets: 3, reps: "15", rest: "45s" },
        { name: "Tricep Dips", sets: 3, reps: "12", rest: "45s" }
    ]
}
```

---

## Summary

| Phase | Scope | Files Touched |
|---|---|---|
| 1 | Bug fixes | 2 |
| 2 | Modal system | 2 |
| 3 | Workout data + JS | 2 |
| 4 | Profile saved workouts | 3 |
| 5 | Placeholder pages | 4 |
| 6 | Cleanup | 1 |
| 7 | Progress page (charts + quotes) | 3 |

**Total: ~17 files created or modified.**
