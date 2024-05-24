/*preloader - start*/
const preloader = document.getElementById("preloader");

window.addEventListener("load", () =>{
    if(preloader != null)
        preloader.classList.remove("on");
})
/*preloader - end*/


/*list image - start*/
const lsImgCells = Array.from(document.querySelectorAll(".ls_img_cell"));
let lsImgCellId = 0;
let currentLsImgCellId = 10;

let lsImgAutoScroll = setInterval(() => {
    lsImgCellId++;
    selectLsImgCell();
}, 15000);

function selectLsImgCell(){
    for (let i = 0; i < lsImgCells.length; i++) {
        //filter id
        if(lsImgCellId > (lsImgCells.length - 1))
            lsImgCellId = lsImgCellId - lsImgCells.length;
        else if(lsImgCellId < 0)
            lsImgCellId = lsImgCellId + lsImgCells.length;
        else{}

        if(lsImgCellId != currentLsImgCellId){
            //select the text
            const LsImgCell = lsImgCells[i];
            const LsImgCellContent = LsImgCell.querySelector(".ls_img_cell_content");
            if(i == lsImgCellId){
                //apply  settings
                LsImgCellContent.style.height = LsImgCellContent.querySelector("p").clientHeight + "px";
            }   
            else{
                //apply  settings
                LsImgCellContent.style.height = 0 + "px";
            }     
    
            //select the image
            const LsImgsEl = document.querySelector(".ls_img_slider_imgs");
            const LsImgs = Array.from(document.querySelectorAll(".ls_img"));
    
            LsImgsEl.style.opacity = "0";
            LsImgsEl.addEventListener("transitionend", () =>{
                LsImgs[lsImgCellId].style.display = "block";
                let unselectedLsImgs = LsImgs.filter((x, i) =>{
                    return i != lsImgCellId;
                })
                unselectedLsImgs.forEach(element => {
                    element.style.display = "none";
                });
                setTimeout(() => {
                    LsImgsEl.style.opacity = "1";
                }, 50);
            })
            clearInterval(lsImgAutoScroll);
            lsImgAutoScroll = setInterval(() => {
                lsImgCellId++;
                selectLsImgCell();
            }, 15000);
        }
        setTimeout(() => {
            currentLsImgCellId = lsImgCellId;            
        }, 50);
    }    
}
selectLsImgCell();
for (let i = 0; i < lsImgCells.length; i++) {
    lsImgCells[i].addEventListener("click", () =>{
        lsImgCellId = i;
        selectLsImgCell();
    })    
}
/*list image - end*/