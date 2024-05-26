/*desktop nav - start*/
/*const desktopNav = document.getElementById("desktop_nav");
//animate nav bar on scroll
let lastScroll = window.scrollY;
function hideDesktopNav(){
    desktopNav.style.transform = "translateY(-100%)";
}
function showDesktopNav(){
    desktopNav.style.transform = "translateY(0%)";
}
window.addEventListener("scroll", () =>{
    if(window.scrollY <= lastScroll){
        showDesktopNav();
    }
    else{
        hideDesktopNav();
    }
    lastScroll = window.scrollY;
})*/
/*desktop nav - end*/


/*mobile nav - start*/
const mobileNavHeader = document.getElementById("mobile_nav_header");
const mobileNav = document.getElementById("mobile_nav");
const mobileNavBtn = document.getElementById("mnav_btn");
let MNavOn = true;
//toggle mobile nav
function toggleMNav(){
    if(MNavOn){
        MNavOn = false;
        mobileNavBtn.classList.remove("on");
        mobileNavHeader.classList.remove("on");
        mobileNav.classList.remove("on");
    }
    else{
        MNavOn = true;
        mobileNavBtn.classList.add("on");
        mobileNavHeader.classList.add("on");
        mobileNav.classList.add("on");
    }
}
toggleMNav();
mobileNavBtn.addEventListener("click", toggleMNav)
/*mobile nav - end*/