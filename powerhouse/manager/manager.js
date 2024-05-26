/*navigation - start*/
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const pagesHolder = document.getElementById("manager_pages");
const pageBtns = Array.from(document.querySelectorAll(".nav_link"));
const pages = Array.from(document.querySelectorAll(".mnb_page"));

function selectPage(index){
    //highlight the correct link and not the others
        pageBtns[index].classList.add("current");
        let unselectedPageBtns = pageBtns.filter((x, j) =>{
            return j != index;
        })
        unselectedPageBtns.forEach(element => {
            element.classList.remove("current");
        });
    
        //show the correct page and not the others
        pagesHolder.style.opacity = "0";
        pagesHolder.addEventListener("transitionend", () =>{
            pages[index].style.display = "block";
            pagesHolder.style.height = pages[index].clientHeight + "px";
            let unselectedPages = pages.filter((x, j) =>{
                return j != index;
            })
            unselectedPages.forEach(element => {
                element.style.display = "none";
            });
            setTimeout(() => {
                pagesHolder.style.opacity = "1";
            }, 50);
        })
}
for (let i = 0; i < pageBtns.length; i++) {
    pageBtns[i].addEventListener('click', () =>{
        selectPage(i);
        hideNav();
    })
}
/*navigation - end*/


/*nav - start*/
const nav = document.getElementById("navigation");
const mobileNavBtn = document.getElementById("mnav_btn");
let MNavOn = true;
//toggle mobile nav
function hideNav(){
    MNavOn = false;
    nav.classList.remove("on");
    mobileNavBtn.classList.remove("on");
}
function showNav(){
    MNavOn = true;
    nav.classList.add("on");
    mobileNavBtn.classList.add("on");
}
function toggleMNav(){
    if(MNavOn)
        hideNav();
    else
        showNav();
}
toggleMNav();
mobileNavBtn.addEventListener("click", toggleMNav)
/*nav - end*/


/*new element - start*/
class newElModal{
    constructor(element, header, contentHolder, content){
        this.element = element;
        this.header = header;
        this.contentHolder = contentHolder;
        this.content = content;
        this.on = false;
    }
}
//setup new elements
const newEls = document.querySelectorAll(".new_el");
function setupNewEls(){
    for (let i = 0; i < newEls.length; i++) {
        const newEl = new newElModal(
            newEls[i],
            newEls[i].querySelectorAll(".new_el_header")[0],
            newEls[i].querySelectorAll(".new_el_content")[0],
            newEls[i].querySelectorAll(".new_el_form")[0]
        );     
        //newEl.hideNewElModal(); 
        newEl.header.addEventListener("click", () =>{toggleNewElModal(newEl)})
    }
}
setupNewEls();
//toggle new nav el
function toggleNewElModal(newEl){
    if(newEl.on)
        hideNewElModal(newEl);
    else   
        showNewElModal(newEl);
}
function showNewElModal(newEl){
    newEl.on = true;
    newEl.contentHolder.style.height = newEl.content.clientHeight + "px";
}
function hideNewElModal(newEl){
    newEl.on = false;
    newEl.contentHolder.style.height = 0 + "px";
}
/*new element - end*/