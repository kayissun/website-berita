const links = document.querySelectorAll(".nav-link");
const indicator = document.querySelector(".indicator");

function setActive(link) {
  document.querySelector(".nav-link.active").classList.remove("active");
  link.classList.add("active");

  indicator.style.width = link.offsetWidth + "px";
  indicator.style.left = link.offsetLeft + "px";
}

links.forEach((link) => link.addEventListener("click", () => setActive(link)));

window.addEventListener("load", () => setActive(document.querySelector(".nav-link.active")));
window.addEventListener("resize", () => setActive(document.querySelector(".nav-link.active")));
