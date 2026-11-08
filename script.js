const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".desktop-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("nav-open", !isOpen);
});

document.querySelectorAll(".desktop-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    nav?.classList.remove("nav-open");
  });
});
