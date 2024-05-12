/*nav - start*/
const hero = document.getElementById("hero");
function animateHomeNav(){
    if(window.scrollY >= hero.clientHeight - navBar.clientHeight){
        navBar.classList.add("opaque");
        navBar.classList.remove("on");
        navBar.classList.remove("top");
    }
    else{
        navBar.classList.remove("opaque");
        navBar.classList.add("on");
        navBar.classList.add("top");
    }
}
animateHomeNav();
window.addEventListener("scroll", () =>{animateHomeNav();})
/*nav - end*/


/*portfolio section - start*/
const homePortfolioHolder = document.getElementById("portfolio_grid");
function loadHomePortfolio(){
    for (let i = 0; i < portfolios.length; i++){
        const currentPf = portfolios[i];
        for (let j = 0; j < 2; j++){
            const currentPrj = currentPf.projects[j];
            //create project holder
            const prjEl = document.createElement("div");
            prjEl.classList.add("project");
            homePortfolioHolder.append(prjEl);
            //fill up project holder
            const prjImg = document.createElement("img");
            prjImg.src = currentPrj.image;
            prjImg.alt = currentPrj.alt;
            prjEl.append(prjImg);
            const prjTxt = document.createElement("h3");
            prjTxt.innerHTML = currentPrj.name;
            prjEl.append(prjTxt);            
        }
    }
}
loadHomePortfolio();
/*portfolio section - end*/


/*staff section - start*/
const staffMembersHolder = document.getElementById("sm_holder");
function loadHomeStaff(){
    for (let i = 5; i >= 0; i--) {
        const staffMember = staffMembers[i];
        //create staff member element
        const SMEl = document.createElement("div");
        SMEl.classList.add("team_member");
        staffMembersHolder.prepend(SMEl);
        //fill staff member element
        const SMElImg = document.createElement("img");
        SMElImg.src = staffMember.poster;
        SMEl.append(SMElImg);
        const SMElName = document.createElement("h1");
        SMElName.innerHTML = staffMember.short_name;
        SMEl.append(SMElName);
    }
}
loadHomeStaff();
/*staff section - end*/


/*testimonials section - start*/
const cmt = document.getElementById("cmt");
const cmtr = document.getElementById("cmtr_slider");
const cmtrPoster = document.getElementById("cmtr_img");
const cmtrProfile = document.getElementById("cmtr_profile");
const cmtrMobileTop = document.getElementById("cmt_mobile_top");
const cmtrMobileName = cmtrMobileTop.querySelector("h5")
const cmtrMobilePosition = cmtrMobileTop.querySelector("p")
const cmtrInfo = document.getElementById("cmtr_info");
const cmtrName = cmtrInfo.querySelector("h5");
const cmtStarsEl = document.getElementById("cmt_stars");
const cmtStars = cmtStarsEl.querySelectorAll("i");
const cmtHighlight = document.getElementById("cmt_highlight");
const cmtContent = document.getElementById("cmt_content");
const cmtNext = document.getElementById("cmt_next");
const cmtPrevious = document.getElementById("cmt_previous");
const cmtBulletsEl = document.getElementById("cmt_bullets");
let cmtBullets;
let cmtBulletsArr; 
//current comment variables
let currentCommentIndex = 0;
let currentComment;
let currentCommentBullet;
function selectComment(){
    //adjust index
    if(currentCommentIndex > (comments.length-1)){
        let tempID = currentCommentIndex - comments.length;
        currentCommentIndex = tempID;
    }
    else if(currentCommentIndex < 0){
        let tempID = comments.length + currentCommentIndex;
        currentCommentIndex = tempID;
    }

    if(currentComment == null){
        //select current comment
        currentComment = comments[currentCommentIndex];
        //set commentor elements
        cmtrPoster.src = currentComment.cmtr_poster;
        cmtrProfile.src = currentComment.cmtr_profile;
        cmtrName.innerHTML = currentComment.cmtr_name;
        cmtrMobileName.innerHTML = currentComment.cmtr_name;
        cmtrMobilePosition.innerHTML = currentComment.cmtr_position;
        //set stars
        for (let i = 0; i < cmtStars.length; i++) {
            if(i > (currentComment.stars - 1))
                cmtStars[i].style.display = "none";
            else
                cmtStars[i].style.display = "flex";
        }
        cmtStarsEl.style.display = "flex";
        //set comment elements
        cmtHighlight.innerHTML = currentComment.cmt_highlight;
        cmtContent.innerHTML = currentComment.cmt_content;
    }
    else{
        cmt.style.opacity = 0;
        cmtr.style.opacity = 0;

        //select current comment
        currentComment = comments[currentCommentIndex];

        cmt.addEventListener("transitionend", ()=>{
            //set commentor elements
            cmtrPoster.src = currentComment.cmtr_poster;
            cmtrProfile.src = currentComment.cmtr_profile;
            cmtrName.innerHTML = currentComment.cmtr_name;
            cmtrMobileName.innerHTML = currentComment.cmtr_name;
            cmtrMobilePosition.innerHTML = currentComment.cmtr_position;
            //set stars
            for (let i = 0; i < cmtStars.length; i++) {
                if(i > (currentComment.stars - 1))
                    cmtStars[i].style.display = "none";
                else
                    cmtStars[i].style.display = "flex";
            }
            //set comment elements
            cmtHighlight.innerHTML = currentComment.cmt_highlight;
            cmtContent.innerHTML = currentComment.cmt_content;
                
            cmt.style.opacity = 1;
            cmtr.style.opacity = 1;
        })
    }
    //select current comment bullet
    currentCommentBullet = cmtBulletsArr[currentCommentIndex];
    currentCommentBullet.classList.add("current");
    let unselectedCmtBullets = cmtBulletsArr.filter((x,i) =>{
        return i != currentCommentIndex;
    })
    unselectedCmtBullets.forEach(element => {
        element.classList.remove("current");
    });
}
function setupComments(){
    //create bullets
    for (let i = 0; i < comments.length; i++) {
        let newBullet = document.createElement("div");
        newBullet.classList.add("cmt_bullet");
        newBullet.addEventListener("click", () =>{
            currentCommentIndex = i;
            selectComment();
        })
        cmtBulletsEl.append(newBullet);
    }
    cmtBullets = cmtBulletsEl.querySelectorAll(".cmt_bullet");
    cmtBulletsArr = Array.from(cmtBullets);
    //select current comment
    selectComment();
}
setupComments();
function nextComment(){
    currentCommentIndex++;
    selectComment();
}
cmtNext.addEventListener("click", nextComment);
function previousCommnent(){
    currentCommentIndex--;
    selectComment();
}
cmtPrevious.addEventListener("click", previousCommnent);
/*testimonials section - end*/