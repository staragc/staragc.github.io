let galleryItemObjs = [
    {
        src : "images/home/home_hero.webp",
        alt : "Gallery image"
    },
    {
        src : "images/Menu/menu_banner.webp",
        alt : "Gallery image"
    },
    {
        src : "images/events/events-banner.webp",
        alt : "Gallery image"
    },
    {
        src : "images/events/private_dining/private_dining_1.webp",
        alt : "Gallery image"
    },
    {
        src : "images/events/wedding/wedding_1.webp",
        alt : "Gallery image"
    },
    {
        src : "images/events/gala/gala_1.webp",
        alt : "Gallery image"
    },
    {
        src : "images/events/awards/awards_1.webp",
        alt : "Gallery image"
    },
    {
        src : "images/home/home_hero.webp",
        alt : "Gallery image"
    },
    {
        src : "images/Menu/menu_banner.webp",
        alt : "Gallery image"
    },
    {
        src : "images/events/events-banner.webp",
        alt : "Gallery image"
    },
    {
        src : "images/events/private_dining/private_dining_1.webp",
        alt : "Gallery image"
    },
    {
        src : "images/events/wedding/wedding_1.webp",
        alt : "Gallery image"
    },
    {
        src : "images/events/gala/gala_1.webp",
        alt : "Gallery image"
    },
    {
        src : "images/events/awards/awards_1.webp",
        alt : "Gallery image"
    }
]
//edit variables
const GalleryEditModal = document.getElementById("gallery_edit_modal");
const GEMSrc = document.getElementById("gi_edit_src");
const GEMAlt = document.getElementById("gi_edit_alt");
const GEMConfirm = document.getElementById("gi_edit_confirm");
const GEMCancel = document.getElementById("gi_edit_cancel");
let GEMOn = false;
//manager variables
const blankMnGI = document.getElementById("blank_mn_gi");
const mnGalleryContent = document.getElementById("gallery_mn_content");
let MnGIEls = document.querySelectorAll(".gallery_item");
//client variables
const clGalleryContent = document.getElementById("gallery");
const clGalleryAmount = 6;
const blankClGI = document.getElementById("black_gallery_img");
const gallerySliderContent = document.getElementById("gallery_slides");
let GIClLoaded = false;
//load variables
let GIDoneLoading = false;

//display
function displayGalleryCarousel(){
    if(blankClGI != null){
        //fill carousel
        for (let i = 0; i < clGalleryAmount; i++){
            let currentGIObj = galleryItemObjs[i];
            //create and remove id
            let newClGI = blankClGI.cloneNode(true);
            newClGI.id = "";
            //fetch needed elements
            let newClGIImg = newClGI.querySelector("img");
            //assign values
            newClGIImg.src = currentGIObj.src;
            newClGIImg.alt = currentGIObj.alt;
            //append
            clGalleryContent.append(newClGI);
        }
        GIClLoaded = true;
        //fill slider
        for (let i = 0; i < galleryItemObjs.length; i++){
            let currentGIObj = galleryItemObjs[i];    
            //create element
            let newSlImg = document.createElement("img");
            newSlImg.src = currentGIObj.src;
            newSlImg.alt = currentGIObj.alt;
            gallerySliderContent.append(newSlImg);
        }
    }
}
window.addEventListener("load", () =>{displayGalleryCarousel();})