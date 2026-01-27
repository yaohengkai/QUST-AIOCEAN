document.addEventListener("DOMContentLoaded", () => {
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
