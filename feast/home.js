/*hero - start*/
const heroLogo = document.getElementById("hero_logo");

function setupHero(){
    let heroLogoImg = heroLogo.querySelectorAll("img");

    heroLogo.style.height = heroLogo.clientHeight + "px";
    heroLogoImg.forEach(element => {
        element.style.marginTop = heroLogo.clientHeight + "px";        
    });

    setTimeout(() => {
        heroLogoImg.forEach(element => {
            element.style.transition = "1s";
            element.style.marginTop = "0px";       
        });
    }, 1);
}
setupHero();
/*hero - end*/


/*testimonials - start*/
const TCSlider = document.getElementById("testimonials_slider");
const TCardsElement = document.getElementById("testimonial_cards");
const TCards = document.querySelectorAll(".testimonial_card");
const TCardWidth = TCards[0].clientWidth;
let TCardMargin = 0;
let TCardsTransition = 1;//en secondes
const TCardIdBaseline = TCards.length;
const TCardLoopFrontThreshold = TCardIdBaseline*2;
let currentTCardId = TCardIdBaseline;
let TCGap = 25;
const TAutoScrollInterval = 15000; //in milliseconds
let touchInteraction = false;
let startTTouchX;
let deltaTTouchX = 0;
let TSlideLeft = null;
let touchTMargin = 0;

//auto scroll
let TAutoScroll;
function stopAutoScroll(){clearInterval(TAutoScroll)}
function startAutoScroll(){
    TAutoScroll = setInterval(() => {nextTCard();}, TAutoScrollInterval);
}
startAutoScroll();
function restartAutoScroll(){
    stopAutoScroll();
    startAutoScroll();
}

//setup testimonoals slider
function setupTestimonials(){
    //set the gap between the testimonial cards cards
    TCardsElement.style.gap = TCGap + "px";
    
    //duplicate and append all the testimonial cards
    for (let i = 0; i < TCards.length; i++) {
        let TCAppendClone = TCards[i].cloneNode(true);
        TCardsElement.append(TCAppendClone);
    }
    
    //duplicate and prepend all the testimonial cards
    for (let i = (TCards.length-1); i >= 0; i--) {
        let TCPrependClone = TCards[i].cloneNode(true);
        TCardsElement.prepend(TCPrependClone);
    }
    selectTCard();
}
setupTestimonials();

//select appropriate card according to the current card ID
function selectTCard(){
    TCardMargin =  (-currentTCardId * TCardWidth) + ((-currentTCardId)*TCGap);
    TCardsElement.style.marginLeft = TCardMargin + "px";
    touchTMargin = TCardMargin;
    restartAutoScroll();
}

//touch controls
function startTTouch(){
    let e = window.event;
    TCardsElement.style.transition = "0s";
    if(!touchInteraction){
        touchInteraction = true;
        TCardsElement.classList.add("touchInteracted");
        //define moust x position at touch start
        startTTouchX = e.pageX;
    }
    stopAutoScroll();
}
function endTTouch(){
    let e = window.event;
    TCardsElement.classList.remove("touchInteracted");
    TCardMargin = touchTMargin;

    if(touchInteraction){
        TCardsElement.style.transition = TCardsTransition/2 + "s";
        if(TSlideLeft != null){
            if(TSlideLeft){
                currentTCardId += (Math.round(deltaTTouchX/TCardWidth));
                selectTCard();
            }
            else{
                currentTCardId -= (Math.round(deltaTTouchX/TCardWidth));
                selectTCard();
            }
        }
        touchInteraction = false;
        TSlideLeft = null;
    }
}
TCSlider.addEventListener("pointerdown", () =>{startTTouch();})
window.addEventListener("pointerup", () =>{endTTouch();})
window.addEventListener("pointermove", (e) =>{
    if(touchInteraction){
        //calculate difference of mouse X axis position
        deltaTTouchX = Math.abs(e.pageX - startTTouchX);

        if(deltaTTouchX > 10){
            //determine if the slide was to the left or to the right
            if(startTTouchX > e.pageX){
                TSlideLeft = true;
            }
            else if(startTTouchX < e.pageX){
                TSlideLeft = false;
            }
            else{
                TSlideLeft = null;
            }
    
            //change the touch margin according to the slide direction
            if(TSlideLeft){
                touchTMargin = TCardMargin - deltaTTouchX;
                TCardsElement.style.marginLeft = touchTMargin + "px";
            }
            else{
                touchTMargin = TCardMargin + deltaTTouchX;
                TCardsElement.style.marginLeft = touchTMargin + "px";
            }
        }
    }
})

//button controls
const TNextBtn = document.getElementById("testimonial_next");
const TPreviousBtn =  document.getElementById("testimonial_previous");
function nextTCard(){
    if(currentTCardId < TCardLoopFrontThreshold){
        currentTCardId++;
        TCardsElement.style.transition = TCardsTransition +"s";
        selectTCard();
    }
}
function previousTCard(){
    if(currentTCardId > TCardIdBaseline){
        TCardsElement.style.transition = TCardsTransition +"s";
        currentTCardId--;
        console.log("previous")
        selectTCard();
    }
}
TNextBtn.addEventListener("click", nextTCard)
TPreviousBtn.addEventListener("click", previousTCard)
//loop cards
TCardsElement.addEventListener("transitionend", () =>{
    //loop back to start
    if(currentTCardId == TCardLoopFrontThreshold || currentTCardId == 0){
        TCardsElement.style.transition = "0s";
        currentTCardId = TCardIdBaseline;
        selectTCard();
    }
    else if(currentTCardId > (TCardLoopFrontThreshold)){
        TCardsElement.style.transition = "0s";
        currentTCardId = TCardIdBaseline + (currentTCardId - TCardLoopFrontThreshold);
        selectTCard();
    }
    else if(currentTCardId < TCardIdBaseline){
        TCardsElement.style.transition = "0s";
        currentTCardId = TCardIdBaseline + currentTCardId;
        selectTCard();
    }
    //loop back to end
})
/*testimonials - end*/