gsap.registerPlugin(ScrollTrigger);

/* =====================
   Global GSAP Config
===================== */
ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true
});

const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (isMobile) {
    gsap.defaults({
        duration: 0.6,
        ease: "power2.out"
    });
}

/* =====================
   Fade Sections
===================== */
gsap.utils.toArray(".gsap-fade").forEach(section => {
    gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                once: true
            }
        }
    );
});

/* =====================
   Timeline Items
===================== */
gsap.utils.toArray(".gsap-right").forEach(item => {
    gsap.fromTo(
        item,
        { opacity: 0, x: 60 },
        {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                once: true
            }
        }
    );
});

/* =====================
   Testimonials (Stagger)
===================== */
gsap.from(".testimonial-card", {
    opacity: 0,
    scale: 0.9,
    stagger: 0.15,
    scrollTrigger: {
        trigger: ".testimonials",
        start: "top 85%",
        once: true
    }
});

/* =====================
   Gallery Images
===================== */
gsap.from(".about-gallery img", {
    opacity: 0,
    scale: 0.92,
    stagger: 0.12,
    scrollTrigger: {
        trigger: ".about-gallery",
        start: "top 85%",
        once: true
    }
});
