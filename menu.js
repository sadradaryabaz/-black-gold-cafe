const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        menuCards.forEach(card => {
            if (filter === "all" || card.classList.contains(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
// فعال‌سازی ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/* =========================
   MENU CARDS SCROLL ANIMATION
   ========================= */

gsap.from(".menu-card", {
    scrollTrigger: {
        trigger: ".menu-grid",
        start: "top 85%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 60,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
});






const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("menuOverlay");

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");

    document.body.classList.toggle("no-scroll");
}

/* Close menu on link click */
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", toggleMenu);
});
