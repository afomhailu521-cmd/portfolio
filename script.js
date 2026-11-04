
const typingText = document.querySelector(".typing-text");

const roles = [
    "Software Engineering Student",
    "Aspiring Software Developer",
    "Future Full Stack Developer",
    "Technology Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    typingText.textContent = currentRole.substring(0, charIndex);

    if (!deleting && charIndex < currentRole.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (!deleting) {
        deleting = true;
        setTimeout(typeEffect, 1200);
    } else if (charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 300);
    }
}

if (typingText) {
    typeEffect();
}
// Mobile Navigation

let menu = document.getElementById("menu-toggle");
let navbar = document.getElementById("navbar");

menu.onclick = function() {
    navbar.classList.toggle("active");
};

// Back to Top Button

let topButton = document.getElementById("backtotop");

window.onscroll = function() {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

};

// Scroll to top

topButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
