const slides = document.querySelectorAll(".slide-item");
const slidesContainer = document.querySelector(".slider-inner-container");
const bulletsContainer = document.querySelector(".slider-bullets");
const bullets = document.querySelectorAll(".bullet-wrap");
const slideDescriptions = document.querySelectorAll(".slide-description");

let activeSlideNumber = 0;

function moveSlider() {
  const slideWidth = slides[0].offsetWidth;
  const offset = -1 * (activeSlideNumber - 1) * slideWidth;
  console.log(offset);
  slidesContainer.style.transform = `translateX(${offset}px)`;
}

bulletsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("bullet-wrap")) {
    console.log(event.target);
    activeSlideNumber = event.target.id[0];
    slideDescriptions.forEach((el) => (el.style.opacity = "0"));
  }
  moveSlider();
});

window.addEventListener("transitionend", () =>
  slideDescriptions.forEach((el) => (el.style.opacity = "100%")),
);

window.addEventListener("resize", () => {
  moveSlider();
});
