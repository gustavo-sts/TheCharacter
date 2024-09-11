const header = document.querySelector('header');
const maxDistance = 101;

window.addEventListener('scroll', ()=>{

    const scrollPosition = window.scrollY;
    
    if(scrollPosition >= maxDistance){
        header.style.position = 'fixed';
        header.style.zIndex = 1
    }else{
        header.style.position = "relative";
    }
    
});
