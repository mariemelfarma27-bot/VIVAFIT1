// =========================================
// WORKOUTS DATA
// =========================================

const workouts = [
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
    },
    {
        id: "lower-body",
        name: "Lower Body",
        category: "strength",
        icon: "fa-solid fa-person-running",
        description: "Stronger legs and glutes for a fitter you.",
        duration: "45 min",
        difficulty: "Medium",
        exercises: [
            { name: "Barbell Squat", sets: 4, reps: "10", rest: "90s" },
            { name: "Romanian Deadlift", sets: 4, reps: "8", rest: "90s" },
            { name: "Leg Press", sets: 3, reps: "12", rest: "60s" },
            { name: "Walking Lunges", sets: 3, reps: "12 each", rest: "60s" },
            { name: "Calf Raises", sets: 4, reps: "15", rest: "45s" }
        ]
    },
    {
        id: "full-body",
        name: "Full Body",
        category: "full-body",
        icon: "fa-solid fa-heart-pulse",
        description: "A complete workout for total fitness.",
        duration: "50 min",
        difficulty: "Hard",
        exercises: [
            { name: "Deadlift", sets: 4, reps: "8", rest: "120s" },
            { name: "Barbell Squat", sets: 4, reps: "10", rest: "90s" },
            { name: "Bench Press", sets: 4, reps: "10", rest: "90s" },
            { name: "Pull-Ups", sets: 3, reps: "Max", rest: "60s" },
            { name: "Plank", sets: 3, reps: "60s", rest: "45s" }
        ]
    },
    {
        id: "cardio-blast",
        name: "Cardio Blast",
        category: "cardio",
        icon: "fa-solid fa-person-running",
        description: "Boost endurance and burn calories.",
        duration: "30 min",
        difficulty: "Easy",
        exercises: [
            { name: "Jump Rope", sets: 1, reps: "3 min", rest: "30s" },
            { name: "Burpees", sets: 3, reps: "15", rest: "45s" },
            { name: "Mountain Climbers", sets: 3, reps: "30s", rest: "30s" },
            { name: "High Knees", sets: 3, reps: "30s", rest: "30s" },
            { name: "Jumping Jacks", sets: 1, reps: "3 min", rest: "30s" }
        ]
    },
    {
        id: "push",
        name: "Push Day",
        category: "strength",
        icon: "fa-solid fa-arrows-up-down",
        description: "Chest, shoulders and triceps focus.",
        duration: "45 min",
        difficulty: "Medium",
        exercises: [
            { name: "Incline Bench Press", sets: 4, reps: "10", rest: "90s" },
            { name: "Dumbbell Shoulder Press", sets: 4, reps: "10", rest: "60s" },
            { name: "Cable Flyes", sets: 3, reps: "12", rest: "45s" },
            { name: "Lateral Raises", sets: 3, reps: "15", rest: "45s" },
            { name: "Tricep Pushdowns", sets: 3, reps: "12", rest: "45s" }
        ]
    },
    {
        id: "pull",
        name: "Pull Day",
        category: "strength",
        icon: "fa-solid fa-hand-fist",
        description: "Back and biceps for a powerful pull.",
        duration: "42 min",
        difficulty: "Medium",
        exercises: [
            { name: "Deadlift", sets: 4, reps: "6", rest: "120s" },
            { name: "Pull-Ups", sets: 4, reps: "8", rest: "90s" },
            { name: "Seated Cable Row", sets: 3, reps: "12", rest: "60s" },
            { name: "Face Pulls", sets: 3, reps: "15", rest: "45s" },
            { name: "Hammer Curls", sets: 3, reps: "12", rest: "45s" }
        ]
    },
    {
        id: "legs",
        name: "Leg Day",
        category: "strength",
        icon: "fa-solid fa-shoe-prints",
        description: "Heavy legs workout for serious gains.",
        duration: "50 min",
        difficulty: "Hard",
        exercises: [
            { name: "Back Squat", sets: 5, reps: "5", rest: "120s" },
            { name: "Front Squat", sets: 3, reps: "8", rest: "90s" },
            { name: "Bulgarian Split Squat", sets: 3, reps: "10 each", rest: "60s" },
            { name: "Leg Curl", sets: 3, reps: "12", rest: "45s" },
            { name: "Leg Extension", sets: 3, reps: "15", rest: "45s" }
        ]
    },
    {
        id: "ant-post",
        name: "Anterior / Posterior",
        category: "full-body",
        icon: "fa-solid fa-arrows-left-right",
        description: "Balance your body with front and back chain training.",
        duration: "48 min",
        difficulty: "Medium",
        exercises: [
            { name: "Front Squat", sets: 4, reps: "8", rest: "90s" },
            { name: "Romanian Deadlift", sets: 4, reps: "10", rest: "90s" },
            { name: "Overhead Press", sets: 3, reps: "10", rest: "60s" },
            { name: "Barbell Row", sets: 3, reps: "12", rest: "60s" },
            { name: "Hip Thrust", sets: 3, reps: "12", rest: "60s" }
        ]
    }
];

const STORAGE_KEY = "vivafitWorkouts";

// =========================================
// DOM REFERENCES
// =========================================

const workoutGrid = document.querySelector(".workout-grid");
const filterButtons = document.querySelectorAll(".filter");
const modal = document.getElementById("workoutModal");
const modalClose = document.getElementById("modalClose");
const modalCancelBtn = document.getElementById("modalCancelBtn");
const modalSaveBtn = document.getElementById("modalSaveBtn");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalIcon = document.getElementById("modalIcon");
const modalDuration = document.getElementById("modalDuration");
const modalDifficulty = document.getElementById("modalDifficulty");
const modalCategory = document.getElementById("modalCategory");
const modalExerciseList = document.getElementById("modalExerciseList");

let currentWorkout = null;

// =========================================
// RENDER WORKOUT CARDS
// =========================================

function renderWorkoutCards(filter = "all") {
    workoutGrid.innerHTML = "";

    const filtered = filter === "all"
        ? workouts
        : workouts.filter(w => w.category === filter);

    if (filtered.length === 0) {
        workoutGrid.innerHTML = '<p style="color:#a6a9b5;text-align:center;grid-column:1/-1;padding:40px 0;">No workouts found for this filter.</p>';
        return;
    }

    filtered.forEach(workout => {
        const card = document.createElement("div");
        card.className = "workout-card";
        card.dataset.id = workout.id;

        const difficultyClass = workout.difficulty === "Hard" ? "hard" : workout.difficulty === "Easy" ? "easy" : "";

        card.innerHTML = `
            <div class="icon-box">
                <i class="${workout.icon}"></i>
            </div>
            <div class="card-body">
                <h3>${workout.name}</h3>
                <p>${workout.description}</p>
                <div class="meta">
                    <span>
                        <i class="fa-regular fa-clock"></i>
                        ${workout.duration}
                    </span>
                    <span class="${difficultyClass}">
                        <i class="fa-solid fa-chart-simple"></i>
                        ${workout.difficulty}
                    </span>
                </div>
            </div>
            <button class="btn-red">
                Start Workout
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        `;

        card.querySelector(".btn-red").addEventListener("click", () => openModal(workout));
        workoutGrid.appendChild(card);
    });
}

// =========================================
// FILTER LOGIC
// =========================================

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const tag = btn.textContent.trim().toLowerCase().replace(/\s+/g, "-");
        const filterMap = {
            "all": "all",
            "strength": "strength",
            "cardio": "cardio",
            "full-body": "full-body"
        };
        const filter = filterMap[tag] || "all";
        renderWorkoutCards(filter);
    });
});

// =========================================
// MODAL LOGIC
// =========================================

function openModal(workout) {
    currentWorkout = workout;

    modalTitle.textContent = workout.name;
    modalDescription.textContent = workout.description;
    modalIcon.innerHTML = `<i class="${workout.icon}"></i>`;
    modalDuration.textContent = workout.duration;
    modalDifficulty.textContent = workout.difficulty;
    modalCategory.textContent = workout.category.replace("-", " ");

    modalExerciseList.innerHTML = "";
    workout.exercises.forEach((ex, i) => {
        const li = document.createElement("li");
        li.className = "exercise-item";
        li.innerHTML = `
            <div class="exercise-number">${i + 1}</div>
            <div class="exercise-info">
                <p class="exercise-name">${ex.name}</p>
                <p class="exercise-details">${ex.sets} sets x ${ex.reps}</p>
            </div>
            <div class="exercise-badge">Rest: ${ex.rest}</div>
        `;
        modalExerciseList.appendChild(li);
    });

    updateSaveButton();
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    currentWorkout = null;
}

function updateSaveButton() {
    const saved = getSavedWorkouts();
    const alreadySaved = saved.some(w => w.id === currentWorkout.id);

    if (alreadySaved) {
        modalSaveBtn.classList.add("saved");
        modalSaveBtn.innerHTML = '<i class="fa-solid fa-check"></i> Already Saved';
    } else {
        modalSaveBtn.classList.remove("saved");
        modalSaveBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add to My Workouts';
    }
}

modalClose.addEventListener("click", closeModal);
modalCancelBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

// =========================================
// LOCALSTORAGE — SAVE / LOAD
// =========================================

function getSavedWorkouts() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
        return [];
    }
}

function saveWorkouts(workoutsList) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(workoutsList));
}

modalSaveBtn.addEventListener("click", () => {
    if (!currentWorkout) return;

    const saved = getSavedWorkouts();

    if (saved.some(w => w.id === currentWorkout.id)) {
        return;
    }

    saved.push({
        id: currentWorkout.id,
        name: currentWorkout.name,
        category: currentWorkout.category,
        addedAt: new Date().toISOString()
    });

    saveWorkouts(saved);
    updateSaveButton();
});

// =========================================
// INIT
// =========================================

document.addEventListener("DOMContentLoaded", () => {
    renderWorkoutCards();

    const todayBtn = document.getElementById("todayStartBtn");
    if (todayBtn) {
        todayBtn.addEventListener("click", () => {
            const fullBody = workouts.find(w => w.id === "full-body");
            if (fullBody) openModal(fullBody);
        });
    }
});
