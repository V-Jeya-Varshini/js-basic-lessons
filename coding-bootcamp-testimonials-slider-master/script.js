/* eslint-disable semi */
/* eslint-disable quotes */
const sliderButtonPrev = document.querySelector(".slider-item-prev");
const sliderButtonNext = document.querySelector(".slider-item-next");
const textOne = document.querySelector(".text-firstpage");
const textTwo = document.querySelector(".text-nextpage");
const photoOne = document.querySelector(".photo1");
const photoTwo = document.querySelector(".photo2");

sliderButtonPrev.addEventListener("click", function () {
  textOne.classList.toggle("slide-left");
  textTwo.classList.toggle("slide-right");
  photoOne.classList.toggle("slide-left");
  photoTwo.classList.toggle("slide-right");
});

sliderButtonNext.addEventListener("click", function () {
  textOne.classList.toggle("slide-left");
  textTwo.classList.toggle("slide-right");
  photoOne.classList.toggle("slide-left");
  photoTwo.classList.toggle("slide-right");
});
