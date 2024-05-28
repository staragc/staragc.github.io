/*mobile nav - start*/
const mngNav = document.getElementById("mng_nav");
const mngNavBtn = document.getElementById("mng_nav_btn");
let MNavOn = false;
//toggle mobile nav
function hideMngNav(){
    MNavOn = false;
    mngNavBtn.classList.remove("on");
    mngNav.classList.remove("on");
}
function toggleMngNav(){
    if(MNavOn)
        hideMngNav();
    else{
        MNavOn = true;
        mngNavBtn.classList.add("on");
        mngNav.classList.add("on");
    }
}
mngNavBtn.addEventListener("click", toggleMngNav)
/*mobile nav - end*/


/*navigation - start*/
const mngNavBtns = Array.from(document.querySelectorAll(".mng_nav_btn"));
const mngPages = Array.from(document.querySelectorAll(".mng_page"));

function selectMngPage(pgId){
    //highlight the right button
    mngNavBtns[pgId].classList.add("current");
    //un-highlight the other buttons
    let unselectedMngNavBtns = mngNavBtns.filter((x, i) => {
        return i != pgId}
    )
    unselectedMngNavBtns.forEach(element => {
        element.classList.remove("current");
    });

    //show the right page
    mngPages[pgId].style.display = "block";
    //hide the other pages
    let unselectedMngPages = mngPages.filter((x, i) => {
        return i != pgId;
    })
    unselectedMngPages.forEach(element => {
        element.style.display = "none";
    });
}
selectMngPage(0)

for (let i = 0; i < mngNavBtns.length; i++) {
    mngNavBtns[i].addEventListener("click", () => {
            selectMngPage(i);
            hideMngNav();
        }
    );
}
/*navigation - end*/


/*new element - start*/
class newMngElMenu{
    constructor(element, header, contentHolder, content){
        this.element = element;
        this.header = header;
        this.contentHolder = contentHolder;
        this.content = content;
        this.on = false;
    }

    hide(){
        this.on = false;
        this.contentHolder.style.height = 0 + "px";
        this.element.classList.remove("on");
    }
    show(){
        this.on = true;
        this.contentHolder.style.height = this.content.clientHeight + "px";
        this.element.classList.add("on");
    }
    toggle(){
        if(this.on)
            this.hide();
        else    
            this.show();
    }
    setup(){
        this.hide();
        this.header.addEventListener("click", () => {this.toggle();})
        this.contentHolder.style.transition = "0.5s";
    }
}
const newMngElMenus = document.querySelectorAll(".mng_new_el");

function setupNewMngElMenus(){
    for (let i = 0; i < newMngElMenus.length; i++) {
        const currentMngMenu = newMngElMenus[i];
        const newMngEl = new newMngElMenu(
            currentMngMenu,
            currentMngMenu.querySelector(".mng_new_el_header"),
            currentMngMenu.querySelector(".mng_new_el_content"),
            currentMngMenu.querySelector(".mng_new_el_content").querySelector("form")
        );
        newMngEl.setup();
    }
}
setupNewMngElMenus();
/*new element - end*/