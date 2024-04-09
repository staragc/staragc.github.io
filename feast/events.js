/*event sliders - start*/
class eventSlider{
    constructor(eventSlides, eventNav, currentId, idBaseline, currentMargin){
        this.eventSlides = eventSlides;
        this.eventNav = eventNav;
        this.currentId = currentId;
        this.idBaseline = idBaseline;
        this.currentMargin = currentMargin;
        this.autoscroll;
        this.transition = 1;//in seconds
        //touch variables
        this.touchInteracting = false;
        this.firstESX;
        this.ESDeltaX;
        this.ESTouchMargin;
        this.ESSLideLeft = null;
    }

    //slide selection
    setMargin(){
        this.currentMargin = -this.currentId * eventSliders[0].clientWidth;
        this.eventSlides.style.marginLeft = this.currentMargin + "px";
    }
    selectBullet(){
        let ESNBullets = this.eventNav.querySelectorAll(".esn_bullet");
        let ENSBulletsArr = Array.from(ESNBullets);

        let baseline = this.idBaseline + 1;
        if(this.currentId > ((this.idBaseline * 2) + 1)){
            //select the correct bullet
            let returnId = ((this.idBaseline * 2) + 2);
            ESNBullets[this.currentId - returnId].classList.add("current");
            //deselect the other bullets
            let unselectedESNBullets = ENSBulletsArr.filter((x, i) =>{
                return i != (this.currentId - returnId);
            })
            unselectedESNBullets.forEach(element => {
                element.classList.remove("current");
            });
        }
        if(this.currentId >= baseline && this.currentId <= ((this.idBaseline * 2) + 1)){
            //select the correct bullet
            ESNBullets[this.currentId - baseline].classList.add("current");
            //deselect the other bullets
            let unselectedESNBullets = ENSBulletsArr.filter((x, i) =>{
                return i != (this.currentId - baseline);
            })
            unselectedESNBullets.forEach(element => {
                element.classList.remove("current");
            });
        }
        else if(this.currentId < baseline){
            //select the correct bullet
            ESNBullets[this.currentId].classList.add("current");
            //deselect the other bullets
            let unselectedESNBullets = ENSBulletsArr.filter((x, i) =>{
                return i != this.currentId;
            })
            unselectedESNBullets.forEach(element => {
                element.classList.remove("current");
            });            
        }
    }
    selectSlide(){
        //select correct slide and correct bullet
        this.setMargin();
        this.selectBullet();
        //reset autoscroll
        this.stopAutoScroll();
        this.startAutoScroll();
        //set margins
        this.ESTouchMargin = this.currentMargin;
        setTimeout(() => {
            this.eventSlides.style.transition = this.transition + "s";            
        }, 0);
    }

    //auto scroll
    startAutoScroll(){
        this.autoscroll = setInterval(() => {
            if(this.currentId < ((this.idBaseline * 2)+2)){
                this.currentId++;
                this.selectSlide();
            }
        }, 10000);
    }
    stopAutoScroll(){
        clearInterval(this.autoscroll);
    }

    //return to the middle
    return(){
        this.eventSlides.addEventListener("transitionend", () =>{
            let baseline = this.idBaseline + 1;
            if(this.currentId > ((this.idBaseline*2)+1)){
                this.eventSlides.style.transition = "0s";
                this.currentId = this.currentId - baseline;
                this.selectSlide();
            }
            else if(this.currentId < this.idBaseline){
                this.eventSlides.style.transition = "0s";
                this.currentId = baseline + this.currentId;
                this.selectSlide();
            }
        })
    }

    //touch controls
    ESTouchSetup(){
        this.eventSlides.addEventListener("pointerdown", () =>{this.startESTouch();})
        window.addEventListener("pointerup", () =>{this.stopESTouch();})
        window.addEventListener("pointermove", (e) =>{this.handleESTouch(e);})
    }
    startESTouch(){
        if(!this.touchInteracting){
            let e = window.event;
            this.eventSlides.style.transition = "0s";
            this.touchInteracting = true;
            //define initial x position
            this.firstESX = e.pageX;
        }
    }
    stopESTouch(){
        if(this.touchInteracting){
            //increment the current id according to the slide direction
            if(this.ESSLideLeft != null){
                if(this.ESSLideLeft)
                    this.currentId += Math.round(this.ESDeltaX/eventSliders[0].clientWidth);
                else
                    this.currentId -= Math.round(this.ESDeltaX/eventSliders[0].clientWidth);
            }
            this.selectSlide();
            this.eventSlides.style.transition = this.transition/2 + "s";
            this.touchInteracting = false;
            this.ESSLideLeft = null;
        }
    }
    handleESTouch(){
        if(this.touchInteracting){
            let e = window.event;
            //calculate the distance between the initial x and the current x
            this.ESDeltaX = Math.abs(this.firstESX - e.pageX);
            if(this.ESDeltaX > 10){
                //determine sliding direction
                if(this.firstESX > e.pageX)
                    this.ESSLideLeft = true;
                else if(this.firstESX < e.pageX)
                    this.ESSLideLeft = false;
    
                //adjust touch margin according to sliding direction
                if(this.ESSLideLeft){
                    this.ESTouchMargin = this.currentMargin - this.ESDeltaX;
                    this.eventSlides.style.marginLeft = this.ESTouchMargin + "px";
                }
                else{
                    this.ESTouchMargin = this.currentMargin + this.ESDeltaX;
                    this.eventSlides.style.marginLeft = this.ESTouchMargin + "px";
                }
            }
        }
    }

    //setup
    setup(){
        this.return();
        this.ESTouchSetup();
    }
}
const eventSliders = document.querySelectorAll(".event_slider");
const eventSlidersObjs = [];
let ESTransition = 1;//in seconds

function setupEventSliders(){
    //create a new object for each event slider and push it to the appropriate array
    for (let i = 0; i < eventSliders.length; i++) {
        //set the baseline
        let baseline = eventSliders[i].querySelectorAll("img").length-1;
        //create and push the object to the objects array
        let ESObj = new eventSlider(eventSliders[i].querySelector(".event_slides"), eventSliders[i].querySelector(".event_slider_nav"), baseline, baseline, 0);
        ESObj.setup();
        eventSlidersObjs.push(ESObj);        
    }
    for (let i = 0; i < eventSlidersObjs.length; i++) {
        //get necessary elements from the object
        let ESImgs = eventSlidersObjs[i].eventSlides.querySelectorAll("img");
        let baseline = eventSlidersObjs[i].idBaseline;
        for (let l = 0; l < baseline+1; l++){
            //duplicate and append all slides
            let firstClone = ESImgs[l].cloneNode(true);
            eventSlidersObjs[i].eventSlides.append(firstClone);
            //duplicate and prepend all slides
            let lastClone = ESImgs[baseline-l].cloneNode(true);
            eventSlidersObjs[i].eventSlides.prepend(lastClone);
        }
        ESImgs.forEach(element => {
            element.draggable = false;
        });
        selectEventSlide(baseline+1, eventSlidersObjs[i])
    }
}
setupEventSliders();

//select the appropriate slide from a set event slider object
function selectEventSlide(id, eventSliderObj){
    //set the id
    eventSliderObj.currentId = id;
    //set the margin
    eventSliderObj.selectSlide();
}

//select the appropriate slide from a set event slider object according to which bullet is pressed
for (let i = 0; i < eventSlidersObjs.length; i++){
    let bullets = eventSlidersObjs[i].eventNav.querySelectorAll(".esn_bullet");
    for (let l = 0; l < bullets.length; l++) { 
        bullets[l].addEventListener("pointerdown", () =>{
            eventSlidersObjs[i].currentId = eventSlidersObjs[i].idBaseline + 1 + l;
            eventSlidersObjs[i].selectSlide();
        })       
    }
}
/*event sliders - end*/