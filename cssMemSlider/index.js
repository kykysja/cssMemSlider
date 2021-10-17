const slides = document.querySelectorAll(".slide-item");
const slidesContainer = document.querySelector(".slider-inner-container");
const bulletsContainer = document.querySelector(".slider-bullets");
const bullets = document.querySelectorAll(".bullet-wrap");
const slideDescriptions = document.querySelectorAll(".slide-description");

let activeSlideNumber = 0;

function moveSlider() {
  const slideWidth = slides[0].offsetWidth;
  const offset = -1 * (activeSlideNumber - 1) * slideWidth;

  slidesContainer.style.transform = `translateX(${offset}px)`;
}

bulletsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("bullet-wrap")) {
    if (activeSlideNumber !== event.target.id[0]) {
      slideDescriptions.forEach((el) => (el.style.color = "darkslategray"));
    }
    activeSlideNumber = event.target.id[0];
  }
  moveSlider();
});

window.addEventListener("transitionend", () =>
  slideDescriptions.forEach((el) => (el.style.color = "bisque")),
);

window.addEventListener("resize", () => {
  moveSlider();
});
