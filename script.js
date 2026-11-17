const themeButton = document.createElement("button");

themeButton.textContent = "🌙 Dark Mode";
themeButton.id = "theme-toggle";

document.body.appendChild(themeButton);

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }
});
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});
// Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".reveal");

hiddenElements.forEach((el) => observer.observe(el));
// Contact Form Validation
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("form-message");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields!";
        return;
    }

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email!";
        return;
    }

    formMessage.textContent = "Your form is valid! Thank you.";

    contactForm.reset();
});