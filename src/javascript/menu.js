const menuBtn = document.querySelector(".navigation-button");
const closeBtn = document.querySelector("#close-btn")
const menuBox = document.querySelector(".navigation");

menuBtn.addEventListener("click", ()=>{
    menuBox.classList.toggle("visibleMenu");
    menuBox.classList.toggle("navigation");
})

closeBtn.addEventListener("click", ()=>{
    menuBox.classList.toggle("visibleMenu");
    menuBox.classList.toggle("navigation");
})