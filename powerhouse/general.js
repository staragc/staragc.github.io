/*preloader - start*/
const preloader = document.getElementById("preloader");

window.addEventListener("load", () =>{
    if(preloader != null)
        preloader.classList.remove("on");
})
/*preloader - end*/