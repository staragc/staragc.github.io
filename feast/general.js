/*vertical section - start*/
const VSCarouselElements = document.querySelectorAll(".mc_el");
let VSCETransitionDelayIncrement = 0.25;
for (let i = 0; i < VSCarouselElements.length; i++) {
    VSCarouselElements[i].style.transitionDelay = VSCETransitionDelayIncrement * i + "s";  
}
/*vertical section - end*/