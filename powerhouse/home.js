/*hero section - start*/
const heroImgs = Array.from(document.querySelectorAll(".hero_img"));

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
    heroImgs[HImgIndex].style.opacity = "1";
}
window.onload = selectRandomHeroImg;
/*hero section - end*/