let galleryToggles;
const galleryModalBcg = document.getElementById("gallery_slider_bcg");
const galleryModal = document.getElementById("gallery_slider_holder");
const GMSlidesEl = document.getElementById("gallery_slides");
let GMSlides;
const GMNext = document.getElementById("gm_next");
const GMPrevious = document.getElementById("gm_previous");
let GMOn = false;
let currentGMMargin;
let GMBaseline = 1;
let currentGMId = GMBaseline;
let GMSliderTransition = 1; //in seconds
//touch variables
let GMTouchInteracting = false;
let GMStartX;
let GMDeltaX;
let GMSlideLeft = null;
let GMTouchMargin;

//setup gallery modal
function setupGM(){
    if(GIClLoaded){
        GMSlides = galleryModal.querySelectorAll("img");
        galleryToggles = document.querySelectorAll(".gallery_toggle");
        //duplicate and add the appropriate slides
        for (let i = 0; i < 1; i++) {
            //duplicate and append first slide
            let firstClone = GMSlides[i].cloneNode(true);
            GMSlidesEl.append(firstClone);
            //duplicate and prepend last slide
            let lastClone = GMSlides[GMSlides.length - 1 - i].cloneNode(true);
            GMSlidesEl.prepend(lastClone);
        }
        selectGMSlide();
        //set all the images to not draggable
        GMSlides.forEach(element => {
            element.draggable = false;
        });
        //toggle gallery modal
        for (let i = 0; i < galleryToggles.length; i++) {
            galleryToggles[i].addEventListener("click", () =>{
                if(!GMOn){
                    GMOn = true;
                    galleryModalBcg.classList.add("on");
                    galleryModal.classList.add("on");
                    currentGMId = i - GMBaseline;
                    openGMSlide();
                }
                else{
                    GMOn = false;
                    galleryModalBcg.classList.remove("on");
                    galleryModal.classList.remove("on");
                }
            })
        }
        document.addEventListener('keydown', function(event) {
            if (event.keyCode === 27) {
                GMOn = false;
                galleryModalBcg.classList.remove("on");
                galleryModal.classList.remove("on");
            }
        });
    }
    else{
        setTimeout(() => {
            setupGM();
        }, 100);
    }
}
setupGM();

function openGMSlide(){
    GMSlidesEl.style.transition = "0s"; 
    currentGMMargin = -currentGMId * GMSlides[0].clientWidth;
    GMTouchMargin = currentGMMargin;
    GMSlidesEl.style.marginLeft = currentGMMargin + "px";
    setTimeout(() => {
        GMSlidesEl.style.transition = GMSliderTransition + "s";        
    }, 0);
}

//select gallery modal
function selectGMSlide(){
    currentGMMargin = -currentGMId * GMSlides[0].clientWidth;
    GMTouchMargin = currentGMMargin;
    GMSlidesEl.style.marginLeft = currentGMMargin + "px";
    setTimeout(() => {
        GMSlidesEl.style.transition = GMSliderTransition + "s";        
    }, 0);
}

//button navigation
function nextGMSlide(){
    if(currentGMId < GMBaseline + GMSlides.length){
        currentGMId++;
        selectGMSlide();
    }
}
function previousGMSlide(){
    if(currentGMId > 0){
        currentGMId--;
        selectGMSlide();
    }
}
GMNext.addEventListener("click", () =>{nextGMSlide();});
GMPrevious.addEventListener("click", () =>{previousGMSlide();})

//touch interactions
function startGMTouch(){
    if(!GMTouchInteracting){
        let e = window.event;
        GMTouchInteracting = true;
        GMStartX = e.pageX;
        GMSlidesEl.style.transition = "0s";
    }
}
function endGMTouch(){
    if(GMTouchInteracting){
        if(GMSlideLeft != null){
            if(GMSlideLeft)
                currentGMId += Math.round(GMDeltaX/GMSlides[0].clientWidth);
            else
                currentGMId -= Math.round(GMDeltaX/GMSlides[0].clientWidth);
        }
        GMSlidesEl.style.transition = GMSliderTransition/2 + "s";
        selectGMSlide();
        GMTouchInteracting = false;
    }
}
function handleGMTouch(){
    if(GMTouchInteracting){
        let e = window.event;
        //calculate the difference between initial and current pointer x
        GMDeltaX = Math.abs(GMStartX - e.pageX);
        if(GMDeltaX > 10){
            //determine the sliding direction
            if(GMStartX > e.pageX){
                GMSlideLeft = true;
            }
            else if(GMStartX < e.pageX){
                GMSlideLeft = false;   
            }
            //move the slides element according to the sliding direction
            if(GMSlideLeft){
                GMTouchMargin = currentGMMargin - GMDeltaX;
                GMSlidesEl.style.marginLeft = GMTouchMargin + "px";
            }
            else{
                GMTouchMargin = currentGMMargin + GMDeltaX;
                GMSlidesEl.style.marginLeft = GMTouchMargin + "px";
            }
        }
    }
}
GMSlidesEl.addEventListener("pointerdown", () =>{startGMTouch();})
window.addEventListener("pointerup", () =>{endGMTouch();})
window.addEventListener("pointermove", () =>{handleGMTouch();})

//automatic loopback
GMSlidesEl.addEventListener("transitionend", () =>{
    if(currentGMId > GMBaseline + (GMSlides.length - 1)){
        GMSlidesEl.style.transition = "0s";
        currentGMId = currentGMId - (GMBaseline + (GMSlides.length - 1));
        selectGMSlide();
    }
    else if(currentGMId < GMBaseline){
        GMSlidesEl.style.transition = "0s";
        currentGMId = (GMBaseline + (GMSlides.length - 1)) + currentGMId;
        selectGMSlide();
    }
})