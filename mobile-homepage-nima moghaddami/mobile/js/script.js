const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});

// انیمیشن ورود کارت‌ها هنگام اسکرول
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
});

document.querySelectorAll(".feature-card, .project-card, .about p, .about li")
  .forEach((el) => observer.observe(el));

// افکت دکمه هنگام لمس
document.querySelectorAll(".cta-btn").forEach((btn) => {
  btn.addEventListener("touchstart", () => btn.classList.add("active"));
  btn.addEventListener("touchend", () => btn.classList.remove("active"));
});
