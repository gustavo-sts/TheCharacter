const leftBtn = document.querySelector("#left-arrow");
const rightBtn = document.querySelector("#right-arrow");
const slideImg = document.querySelectorAll(".slide-element");

console.log(slideImg.length);

let slideIndex = 0;


if(window.innerWidth <= 400){
  rightBtn.addEventListener("click", () => {
    slideIndex++;

    if (slideIndex >= slideImg.length) {
      slideIndex = 0;
    }

    const slideWidth = 210;
    const offset = slideIndex * slideWidth;

    slideImg.forEach((img) => {
      img.style.transform = `translateX(-${offset}px)`;
      img.style.transition = `all 1s`;
    });
  });

    leftBtn.addEventListener("click", () => {
      slideIndex--;

      if (slideIndex == 0) {
        slideIndex = 0;
      }

      const slideWidth = 210;
      const offset = slideIndex * slideWidth;

      slideImg.forEach((img) => {
        img.style.transform = `translateX(-${offset}px)`;
        img.style.transition = `all 1s`;
      });
    });
}else{
  rightBtn.addEventListener("click", () => {
    slideIndex++;

    if (slideIndex >= slideImg.length - 2) {
      slideIndex = 0;
    }

    const slideWidth = 311;
    const offset = slideIndex * slideWidth;

    slideImg.forEach((img) => {
      img.style.transform = `translateX(-${offset}px)`;
      img.style.transition = `all 1s`;
    });
  });

  leftBtn.addEventListener("click", () => {
    slideIndex--;

    if (slideIndex == 0) {
      slideIndex = 0;
    }

    const slideWidth = 311;
    const offset = slideIndex * slideWidth;

    slideImg.forEach((img) => {
      img.style.transform = `translateX(-${offset}px)`;
      img.style.transition = `all 1s`;
    });
  });
}