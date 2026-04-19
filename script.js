// MENÚ (para móvil)
const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// ANIMACIÓN AL HACER SCROLL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

// CONTADOR DE IMPACTO
const counters = document.querySelectorAll(".metric-value");

counters.forEach(counter => {
  let target = +counter.getAttribute("data-target");
  let count = 0;

  let update = () => {
    count += target / 50;
    if (count < target) {
      counter.innerText = Math.floor(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target + "%";
    }
  };

  update();
});
