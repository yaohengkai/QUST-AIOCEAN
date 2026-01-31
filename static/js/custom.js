document.addEventListener("DOMContentLoaded", () => {
  const isHome = window.location.pathname === "/" || window.location.pathname === "/index.html";
  const isAbout = window.location.pathname.startsWith("/about-us/");
  if (isHome) {
    document.body.classList.add("page-home");
  }
  if (isAbout) {
    document.body.classList.add("page-about-us");
  }

  const pageSection = window.__HBX_LOGS__?.currentPage?.section || window.__HBX_LOGS__?.currentPage?.type;
  const isPublicationsPath = window.location.pathname.startsWith("/publications/");
  if (pageSection === "publications" || isPublicationsPath) {
    document.body.classList.add("page-publications");
  }

  if (isHome || isAbout) {
    const sections = Array.from(document.querySelectorAll(".hbb-section"));
    const sectionsToReveal = isHome
      ? sections.filter((section) => section.id !== "hero-carousel")
      : sections;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    sectionsToReveal.forEach((section, index) => {
      section.classList.add("reveal");
      const delay = Math.min(index, 6) * 80;
      section.style.setProperty("--reveal-delay", `${delay}ms`);
    });

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      sectionsToReveal.forEach((section) => section.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
      );
      sectionsToReveal.forEach((section) => observer.observe(section));
    }
  }

  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll(".hero-slide"));
    if (slides.length < 2) return;

    const interval = Number(carousel.dataset.interval || 5000);
    let index = 0;

    const indicators = carousel.querySelector(".hero-carousel-indicators");
    if (indicators) {
      indicators.innerHTML = "";
      slides.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "hero-indicator";
        dot.setAttribute("aria-label", `Slide ${i + 1}`);
        if (i === 0) dot.classList.add("is-active");
        dot.addEventListener("click", () => show(i));
        indicators.appendChild(dot);
      });
    }

    const show = (next) => {
      slides[index].classList.remove("is-active");
      index = next;
      slides[index].classList.add("is-active");
      if (indicators) {
        const dots = indicators.querySelectorAll(".hero-indicator");
        dots.forEach((dot, i) => {
          dot.classList.toggle("is-active", i === index);
        });
      }
    };

    setInterval(() => {
      const next = (index + 1) % slides.length;
      show(next);
    }, interval);
  });
});
