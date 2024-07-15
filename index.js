const goTopButton = document.querySelector(".go-top");

goTopButton.addEventListener("click", goTop);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    goTopButton.style.display = "block";
  } else {
    goTopButton.style.display = "none";
  }
});

function goTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
