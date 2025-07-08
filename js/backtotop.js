// 📁 js/backtotop.js

document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.getElementById("Backtotop");

  if (!backToTopButton) return;

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
