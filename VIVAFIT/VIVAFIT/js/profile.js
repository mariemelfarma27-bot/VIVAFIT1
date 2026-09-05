// =========================================
// PROFILE ELEMENTS
// =========================================

const imageInput = document.getElementById("imageInput");
const profileImage = document.getElementById("profileImage");

const saveButton = document.getElementById("saveProfile");
const saveText = document.getElementById("saveText");
const saveMessage = document.getElementById("saveMessage");

const logoutButton = document.getElementById("logoutBtn");


// =========================================
// LOAD SAVED PROFILE
// =========================================

window.addEventListener("load", function () {

    const savedProfile =
        JSON.parse(localStorage.getItem("vivafitProfile"));

    if (!savedProfile) {
        return;
    }

    document.getElementById("name").value =
        savedProfile.name || "";

    document.getElementById("phone").value =
        savedProfile.phone || "";

    document.getElementById("email").value =
        savedProfile.email || "";

    document.getElementById("age").value =
        savedProfile.age || "";

    document.getElementById("height").value =
        savedProfile.height || "";

    document.getElementById("weight").value =
        savedProfile.weight || "";

    document.getElementById("goal").value =
        savedProfile.goal || "";

    if (savedProfile.image) {

        profileImage.src =
            savedProfile.image;

    }

});


// =========================================
// CHANGE PROFILE PICTURE
// =========================================

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {

        profileImage.src =
            event.target.result;

    };

    reader.readAsDataURL(file);

});


// =========================================
// SAVE PROFILE
// =========================================

saveButton.addEventListener("click", function () {

    const profile = {

        name:
            document.getElementById("name").value,

        phone:
            document.getElementById("phone").value,

        email:
            document.getElementById("email").value,

        age:
            document.getElementById("age").value,

        height:
            document.getElementById("height").value,

        weight:
            document.getElementById("weight").value,

        goal:
            document.getElementById("goal").value,

        image:
            profileImage.src

    };


    localStorage.setItem(
        "vivafitProfile",
        JSON.stringify(profile)
    );


    // Success message

    saveText.textContent =
        "Saved! ✓";

    saveMessage.textContent =
        "Your profile has been saved successfully.";


    setTimeout(function () {

        saveText.textContent =
            "Save Changes";

        saveMessage.textContent =
            "";

    }, 2000);

});


// =========================================
// LOGOUT
// =========================================

logoutButton.addEventListener("click", function () {

    window.location.href =
        "login.html";

});