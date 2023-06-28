`use strict`;

const toggleBtn = document.querySelector(".toggleBtn");
const menu = document.querySelector("#menu-list");
const topMenu = document.querySelector("#top-menu");
const logBtn = document.querySelector("#log-btn");
const navLogo = document.querySelector("#nav-logo");
const gnb = document.querySelector("#gnb");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  topMenu.classList.toggle("active");
  if (topMenu.classList.contains("active")) {
    navLogo.style.display = "none";
    gnb.setAttribute("style", "z-index: 10; height: 100vh;");
  } else {
    navLogo.style.display = "block";
    gnb.setAttribute("style", "z-index: 0; height: inherit;");
  }
});
