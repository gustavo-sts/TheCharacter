const menuBtn = document.querySelector(".navigation-button");

const menuBox = document.querySelector(".navigation");

menuBtn.addEventListener("click", ()=>{
    menuBox.classList.toggle("visibleMenu");
    menuBox.classList.toggle("navigation");
})

