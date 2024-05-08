const SAObserver = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
})
const scrollAnimatedElements = document.querySelectorAll(".animated");
scrollAnimatedElements.forEach(element => {
    SAObserver.observe(element);
});