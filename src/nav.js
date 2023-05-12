`use strict`;

const toggleBtn = document.querySelector(".toggleBtn");
const menu = document.querySelector("#menu-list");
const topMenu = document.querySelector("#top-menu");
const logBtn = document.querySelector("#log-btn");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  topMenu.classList.toggle("active");
});
