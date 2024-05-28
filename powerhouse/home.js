/*hero section - start*/
const heroImgs = Array.from(document.querySelectorAll(".hero_img"));
//random hero img selection
function selectRandomHeroImg(){
    //get random index
    let HImgIndex = Math.floor(Math.random() * heroImgs.length);
    //remove all images with other indexes
    let unselectedHImgs = heroImgs.filter((x, i) =>{
        return i != HImgIndex;
    })
    unselectedHImgs.forEach(element => {
        element.remove();
    });
    //show the image with the correct image
    heroImgs[HImgIndex].style.display = "block";
}
selectRandomHeroImg();
/*hero section - end*/


/*services section - start*/
class srvCardObj{
    constructor(element, txt, header, content){
        this.element = element;
        this.txt = txt;
        this.header = header;
        this.content = content;
    }
    hide(){
        this.txt.style.height = this.header.clientHeight + "px";
    }
    show(){
        this.txt.style.height = this.header.clientHeight + this.content.clientHeight + 15 + "px";
    }
    setup(){
        if(window.innerWidth >= 1080){
            this.element.addEventListener("pointerenter", () => {this.show()})
            this.element.addEventListener("pointerleave", () => {this.hide()})   
        }
        else{
            this.element.addEventListener("click", () => {this.show()})
            window.addEventListener("pointerdown", (e) => {
                if(e.target != this.element)
                    this.hide();
            })
        }
    }
}
const serviceCards = Array.from(document.querySelectorAll(".srv_card"));
function setupSrvCards(){
    for (let i = 0; i < serviceCards.length; i++) {
        const currentSrvCard = serviceCards[i];
        let newSrvCard = new srvCardObj(
            currentSrvCard,
            currentSrvCard.querySelector(".srv_card_txt"),
            currentSrvCard.querySelector("h2"),
            currentSrvCard.querySelector("p")
        );
        newSrvCard.setup();
        newSrvCard.hide();
    }
}
setupSrvCards();
/*services section - end*/