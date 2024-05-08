const navBtn = document.getElementById("nav_btn");
const navMenu = document.getElementById("nav_menu");
const navBar = document.querySelector("nav");
let navOn = false;
//toggle nav bar
navBtn.addEventListener("click", () =>{
    if(navOn){
        navOn = false;
        navBtn.classList.remove("on");
        navMenu.classList.remove("on");
        navBar.classList.remove("on");
    }
    else{
        navOn = true;
        navBtn.classList.add("on");
        navMenu.classList.add("on");
        navBar.classList.add("on");
    }
})