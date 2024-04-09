/*menu - start*/
const menuSelectors = document.querySelectorAll(".menu_selector");
const menuSelectorArr = Array.from(menuSelectors);
const menuPagesElement = document.getElementById("menu_pages");
const menuPages = document.querySelectorAll(".menu_page");
const menuItems = document.querySelectorAll(".menu_item")
const MPTransition = 1.25; //in seconds
let MPagesWidth;
if(menuPages.length != 0)
    MPagesWidth = menuPages[0].clientWidth;
let currentMenuId = 0;
let MPMargin;
//touch variables
let MnTouchInteracting = false;
let MnSlideLeft;
let MnStartX;
let MnDeltaX = 0;
let MnTouchMargin;
//setup menu
function setupMenu(){
    menuItems.forEach(element => {
        let MIImg = element.querySelector("img");
        MIImg.draggable = false;
    });
    selectMenu();
}
setupMenu();
//select menu according to current menu ID
function selectMenu(){
    if(menuSelectors.length != 0){
        //clamp current menu ID value
        if(currentMenuId > menuSelectors.length-1)
            currentMenuId = menuSelectors.length-1;
        else if(0 > currentMenuId)
            currentMenuId = 0;
        else{}
        //highlight the corrent menu selector
        menuSelectors[currentMenuId].classList.add("current");
        //remove highlight from the other menu selectors
        let unselectedMS = menuSelectorArr.filter((x, i) =>{
            return i != currentMenuId;
        })
        unselectedMS.forEach(element => {
            element.classList.remove("current");
        });
        //move the menu pages element
        MPMargin = -currentMenuId * MPagesWidth;
        menuPagesElement.style.marginLeft = MPMargin + "px";
        //equalize the touch and regular margins
        MnTouchMargin = MPMargin;
        
        menuPagesElement.style.transition = MPTransition + "s";
    }
}
//adjust the current menu ID and execute selectMenu() according to the selector pressed 
for (let i = 0; i < menuSelectorArr.length; i++) {
    menuSelectors[i].addEventListener("pointerdown", () =>{
        currentMenuId = i;
        selectMenu();
    })
}
//touch controls
function startMnTouch(){
    if(!MnTouchInteracting){
        menuPagesElement.classList.add("touch_interacting");
        menuPagesElement.style.transition = "0s";
        let e = window.event;
        MnStartX = e.pageX;
        MnTouchInteracting = true;
    }
}
function endMnTouch(){
    if(MnTouchInteracting){
        if(MnSlideLeft != null){
            if(MnSlideLeft)
                currentMenuId += Math.round(MnDeltaX/MPagesWidth);
            else
                currentMenuId -= Math.round(MnDeltaX/MPagesWidth);
        }
        selectMenu();
        menuPagesElement.classList.remove("touch_interacting");
        menuPagesElement.style.transition = MPTransition/2 + "s";
        MnTouchInteracting = false;
        MnSlideLeft = null;
    }
}
if(menuPagesElement != null){
    menuPagesElement.addEventListener("pointerdown", () =>{startMnTouch();})
    window.addEventListener("pointerup", () =>{endMnTouch();})
    window.addEventListener("pointermove", (e) =>{
        if(MnTouchInteracting){
            //calculate the distance between initial and current x position
            MnDeltaX = Math.abs(MnStartX - e.pageX);
    
            if(MnDeltaX > 10){
                //determine if sliding left or right
                if(MnStartX > e.pageX)
                    MnSlideLeft = true;
                else if(e.pageX > MnStartX)
                    MnSlideLeft = false;
                //adjust the touch margin according to the scroll direction
                if(MnSlideLeft){
                    MnTouchMargin = MPMargin - MnDeltaX;
                    menuPagesElement.style.marginLeft = MnTouchMargin + "px";
                }
                else{
                    MnTouchMargin = MPMargin + MnDeltaX;
                    menuPagesElement.style.marginLeft = MnTouchMargin + "px";
                }
            }
        }
    })
}
/*menu - end*/

/*menu modal - start*/
const MMBcg = document.getElementById("mm_background");
const menuModal = document.getElementById("menu_modal");
let MMToggleBtns;
let MMOn = false;
const MMName = document.getElementById("mm_name");
const MMCategory = document.getElementById("mm_category");
const MMPrice = document.getElementById("mm_price");
const MMImage = document.getElementById("mm_img");
const MMDescription = document.getElementById("mm_description");
const MMIngredients = document.getElementById("mm_ingredients");

function MIToggle(){
    if(MILoadingFinished){
        MMToggleBtns = document.querySelectorAll(".mi_btn");
        MMToggleBtns.forEach(element => {
            element.addEventListener("click", () =>{
                if(!MMOn){
                    MMOn = true;
                    menuModal.classList.add("on");
                    MMBcg.classList.add("on");
                }   
                else{
                    MMOn = false;
                    menuModal.classList.remove("on");
                    MMBcg.classList.remove("on");
                } 
            })
        });
    }
    else{
        setTimeout(() => {
            MIToggle();
        }, 100);
    }
}
MIToggle();
function MMDisplay(menu_item){
    MMName.innerHTML = menu_item.name;
    MMCategory.innerHTML = menu_item.category;
    MMPrice.innerHTML = "$" + menu_item.price;
    MMImage.src = menu_item.img;
    MMDescription.innerHTML = menu_item.desc;
    MMIngredients.innerHTML = menu_item.ingr;
}
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
        MMOn = false;
        menuModal.classList.remove("on");
        MMBcg.classList.remove("on");
    }
});
/*menu modal - end*/