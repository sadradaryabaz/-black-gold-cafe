// فعال‌سازی ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/* =========================
   FEATURES - SCROLL ANIMATION
   ========================= */

gsap.from(".feature-card", {
  scrollTrigger: {
    trigger: ".features",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 50,
  duration: 0.9,
  stagger: 0.2,
  ease: "power3.out"
});

/* =========================
   NAV - SCROLL EFFECT
   ========================= */

gsap.to(".header", {
  backgroundColor: "rgba(0,0,0,0.9)",
  scrollTrigger: {
    trigger: "body",
    start: "top -80",
    scrub: true
  }
});
