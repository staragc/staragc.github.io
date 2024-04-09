/*menu - start*/
const RFMenuSelectors = document.querySelectorAll(".rf_menu_selector");
const RFMenuSelectorsArr = Array.from(RFMenuSelectors);
const RFMenuSlides = document.getElementById("rf_menu_slides");
let currentRFMenuId = 0;

function selectRFMenuPage(){
    //select the right menu selector
    RFMenuSelectors[currentRFMenuId].classList.add("current");
    //deselect the other menu selectors
    let unselectedRFMenuSelectors = RFMenuSelectorsArr.filter((x, i) =>{
        return i != currentRFMenuId;
    })
    unselectedRFMenuSelectors.forEach(element => {
        element.classList.remove("current");
    });

    //animate the margin
    RFMenuSlides.style.marginLeft = -currentRFMenuId * 100 + "%";
}
selectRFMenuPage();
for (let i = 0; i < RFMenuSelectors.length; i++) {
    RFMenuSelectors[i].addEventListener("click", () =>{
        currentRFMenuId = i;
        selectRFMenuPage();
    })    
}
/*menu - end*/

/*general - start*/
const reservationToggleBtns = document.querySelectorAll(".rf_toggle");
const reservationForm = document.getElementById("reservation_form");
const reservationFormBcg = document.getElementById("rf_background");
//const reservationSlider = document.getElementById("rf_slider");
const reservationSliderContent = document.getElementById("rf_slider_content");
const reservationPagesElement = document.getElementById("rf_slides");
const reservationPages = document.querySelectorAll(".rf_slide");
const RFNavNext = document.getElementById("rf_nav_next");
const RFNavPrevious = document.getElementById("rf_nav_previous");
const RFNavSubmit = document.getElementById("rf_nav_submit");
const RFTransition = 1.25; //in seconds
let currentRFId = 0;
let RFMargin;
let RFOn = false;
//touch variables
let RFTouchInteracting = false;
let RFStartX;
let RFSlideLeft = null;
let RFDeltaX;
let RFTouchMargin;
//toggle reservation form
function toggleRF(){
    if(!RFOn){
        RFOn = true;
        reservationForm.classList.add("on");
        reservationFormBcg.classList.add("on");
    }
    else{
        RFOn = false;
        reservationForm.classList.remove("on");
        reservationFormBcg.classList.remove("on");
    }
}
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
        RFOn = false;
        reservationForm.classList.remove("on");
        reservationFormBcg.classList.remove("on");
    }
});
reservationToggleBtns.forEach(element => {
    element.addEventListener("pointerdown", () =>{
        toggleRF();
    })
});
//select correct reservation form page
function selectRFPage(){
    //clamp current id value
    if(currentRFId > reservationPages.length-1)
        currentRFId = reservationPages.length-1;
    else if(currentRFId < 0)
        currentRFId = 0;
    //set and apply margin
    RFMargin = -currentRFId * reservationSliderContent.clientWidth;
    RFTouchMargin = RFMargin;
    reservationPagesElement.style.marginLeft = RFMargin + "px";
    //apply transition
    setTimeout(() => {
        reservationPagesElement.style.transition = RFTransition + "s";
    }, 0);
    //set buttons to inactive when necessary
    if(currentRFId <= 0)
        RFNavPrevious.classList.add("inactive");
    else   
        RFNavPrevious.classList.remove("inactive");
    if(currentRFId >= reservationPages.length - 1)
        RFNavNext.classList.add("inactive");
    else
        RFNavNext.classList.remove("inactive");
    if(currentRFId < reservationPages.length - 1)
        RFNavSubmit.classList.add("inactive");
    else
        RFNavSubmit.classList.remove("inactive");
}
selectRFPage();
//button navigation
function nextRFPage(){
    if(currentRFId < reservationPages.length-1){
        currentRFId++;
        selectRFPage();
    }
}
function previousRFPage(){
    if(currentRFId > 0){
        currentRFId--;
        selectRFPage();
    }
}
RFNavNext.addEventListener("pointerup", () =>{nextRFPage();})
RFNavPrevious.addEventListener("pointerup", () =>{previousRFPage();})
//touch naviation
function startRFTouch(){
    if(!RFTouchInteracting){
        reservationSliderContent.classList.add("touch_interacting");
        reservationPagesElement.style.transition = "0s";
        let e = window.event;
        RFStartX = e.pageX;
        RFTouchInteracting = true;
    }
}
function endRFTouch(){
    if(RFTouchInteracting){
        if(RFSlideLeft != null){
            if(RFSlideLeft)
                currentRFId += Math.round(RFDeltaX/reservationPages[0].clientWidth);
            else
                currentRFId -= Math.round(RFDeltaX/reservationPages[0].clientWidth);
        }
        selectRFPage();
        reservationSliderContent.classList.remove("touch_interacting");
        reservationPagesElement.style.transition = RFTransition/2 + "s";
        RFTouchInteracting = false;
        RFSlideLeft = null;
    }
}
reservationPagesElement.addEventListener("pointerdown", () =>{startRFTouch();})
window.addEventListener("pointerup", () =>{endRFTouch();})
reservationSliderContent.addEventListener("pointermove", (e) =>{
    if(RFTouchInteracting){
        //calculate the distance between initial and current x position
        RFDeltaX = Math.abs(RFStartX - e.pageX);

        if(RFDeltaX > 10){
            //determine if sliding left or right
            if(RFStartX > e.pageX)
                RFSlideLeft = true;
            else if(e.pageX > RFStartX)
                RFSlideLeft = false;
            //adjust the touch margin according to the scroll direction
            if(RFSlideLeft){
                RFTouchMargin = RFMargin - RFDeltaX;
                reservationPagesElement.style.marginLeft = RFTouchMargin + "px";
            }
            else{
                RFTouchMargin = RFMargin + RFDeltaX;
                reservationPagesElement.style.marginLeft = RFTouchMargin + "px";
            }
        }
    }
})
/*general - end*/