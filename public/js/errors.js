const closeBtns = document.querySelectorAll(".close-btn");

document.addEventListener("DOMContentLoaded", () => {
  const errorItems = document.querySelectorAll(".errors-container li");
  errorItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("fade-in");
    }, index * 100);
  });
});

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", (e) => {
    const parent = e.target.parentElement;
    parent.style.opacity = "0";
    parent.style.transform = "translateX(100%)"
    setTimeout(() => {
      parent.style.display = "none";
    }, 600);
  });
});
