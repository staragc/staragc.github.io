const navBar = document.querySelector("nav");
const navBtn = document.getElementById("nav_btn");
const navMenu = document.getElementById("nav_menu");
let header = document.querySelector("header");
let hero = document.getElementById("hero");
let navScrollThreshold;
let navMenuVisible = false

function setupNav(){
    navBtn.style.top = navBar.clientHeight/2 + "px";
    setThreshold();
    adjustNavOnScroll();
}
setupNav()

//toggle nav menu
navBtn.addEventListener("click", () =>{
    if(!navMenuVisible){
        navMenuVisible = true
        navBtn.classList.add("on")
        navMenu.classList.add("on");
    }
    else{
        navMenuVisible = false;
        navBtn.classList.remove("on")
        navMenu.classList.remove("on");
    }
})

//set nav scroll animation threshold
function setThreshold(){
    if(hero != null){
        navScrollThreshold = hero.clientHeight - navBar.clientHeight;
    }
    else if(hero == null && header != null){
        navScrollThreshold = header.clientHeight - navBar.clientHeight;        
    }
}

//animate nav bar on scroll
window.addEventListener("scroll", () =>{
    adjustNavOnScroll();
})
function adjustNavOnScroll(){
    if(window.scrollY >= navScrollThreshold){
        navBar.classList.add("scrolled");
        navBtn.classList.add("scrolled");
    }
    else{
        navBar.classList.remove("scrolled");
        navBtn.classList.remove("scrolled");
    }
}