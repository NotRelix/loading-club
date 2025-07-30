const menuBtn = document.querySelector(".menu-container");
const menuLinks = document.querySelector(".menu-links");

document.addEventListener("click", (e) => {
  if (e.target.closest(".menu-container")) {
    menuLinks.classList.toggle("hidden");
  } else {
    menuLinks.classList.add("hidden");
  }
});
