const leftBtn = document.querySelector("#left-arrow");
const rightBtn = document.querySelector("#right-arrow");
const slideImgs = document.querySelectorAll(".slide-element");
const slide_section = document.querySelector(".slide-imgs");

let slideIndex = 1;

// rightBtn.addEventListener('click', () => {
//   if (slideIndex < 5) {
//       slideImgs.forEach((img) => {
//         img.style.transform = `translateX(${-310 * slideIndex}px)`;
//       });
//     slideIndex++
//   }
//   if (slideIndex == 5) {
//     slideIndex = 1
//     slideImgs.forEach((img) => {
//       img.style.transform = `translateX(${0}px)`;
//     });
//   }
// })

if (window.innerWidth <= 400) {
  rightBtn.addEventListener("click", () => {
    document.querySelector(".slide-imgs > div").style.transform = `translateX(${
      -210 * slideIndex
    }px)`;
    slideIndex++;

    if (slideIndex == 5) {
      document.querySelector(
        ".slide-imgs > div"
      ).style.transform = `translateX(${0}px)`;
      slideIndex = 1;
    }
  });
}
else {
  rightBtn.addEventListener("click", () => {
    document.querySelector(".slide-imgs > div").style.transform = `translateX(${
      -310 * slideIndex
    }px)`;
    slideIndex++;

    if (slideIndex == 5) {
      document.querySelector(
        ".slide-imgs > div"
      ).style.transform = `translateX(${0}px)`;
      slideIndex = 1;
    }
  });
}

