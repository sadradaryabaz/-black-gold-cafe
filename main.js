// Hero animations
gsap.from(".hero-title", {
    y: 60,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

gsap.from(".hero-subtitle", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.3
});

gsap.from(".hero-buttons .btn", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    delay: 0.6
});

gsap.from(".feature-card", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
    delay: 1
});
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});