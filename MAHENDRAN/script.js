
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
    if (mainNav.style.display === "flex") {
        mainNav.style.display = "none";
    } else {
        mainNav.style.display = "flex";
        mainNav.style.flexDirection = "column";
    }
});
const updateCoursesBtn = document.getElementById("updateCoursesBtn");
updateCoursesBtn.addEventListener("click", () => {
    const newDescriptions = [
        "New: Learn modern HTML5 & CSS3 with real projects.",
        "New: Understand JavaScript basics with practical examples.",
        "New: Start Python from zero and build simple programs."
    ];

    const descElements = document.querySelectorAll(".course-desc");
    descElements.forEach((p, index) => {
        p.textContent = newDescriptions[index] || p.textContent;
    });

    alert("Course descriptions updated with new content from the team!");
});

const updateBannerBtn = document.getElementById("updateBannerBtn");
const bannerTitle = document.getElementById("bannerTitle");
const bannerSubtitle = document.getElementById("bannerSubtitle");

updateBannerBtn.addEventListener("click", () => {
    bannerTitle.textContent = "New Python Course Launched!";
    bannerSubtitle.textContent = "Join our Python course and start coding today.";
    alert("Python Course Banner updated on the homepage!");
});

const addAnnouncementBtn = document.getElementById("addAnnouncementBtn");
const announcementList = document.getElementById("announcementList");

addAnnouncementBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "New Announcement: Python Course Banner added to the front page.";
    announcementList.appendChild(li);
    alert("New Python course announcement added!");
});

function handleFormSubmit(formId, fields) {
    const form = document.getElementById(formId);
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        for (const fieldId of fields) {
            const input = document.getElementById(fieldId);
            if (!input.value.trim()) {
                alert("Please fill all fields!");
                input.focus();
                return;
            }
        }

        alert(formId + " submitted successfully! (This is a test, no backend yet)");
    });
}

handleFormSubmit("loginForm", ["loginEmail", "loginPassword"]);
handleFormSubmit("signupForm", ["signupName", "signupEmail", "signupPassword"]);
handleFormSubmit("contactForm", ["contactName", "contactEmail", "contactMessage"]);
