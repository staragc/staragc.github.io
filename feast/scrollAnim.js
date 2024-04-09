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

const SATObserver = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
})
const scrollAnimationTriggerElements = document.querySelectorAll(".animation_trigger");
scrollAnimationTriggerElements.forEach(element => {
    SATObserver.observe(element)
});