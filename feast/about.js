/*info section - start*/
const sectionTxtElements = document.querySelectorAll(".info_txt");
STETransitionIncrement = 0.25; //in seconds
for (let i = 0; i < sectionTxtElements.length; i++) {
    sectionTxtElements[i].style.transitionDelay = STETransitionIncrement * i +"s";
}
/*info section - end*/