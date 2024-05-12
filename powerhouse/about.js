//loat individual staff members
const staffMembersHolder = document.getElementById("staff_members");
let SMObjs = [];
class SMObj{
    constructor(header, contentHolder, content){
        this.header = header;
        this.contentHolder = contentHolder;
        this.content = content;
    }
    SMObjOn = true;
    initialized = false;

    toggleSMObj(){
        if(this.SMObjOn){
            this.SMObjOn = false;
            this.contentHolder.style.height = "0px";
            this.header.classList.remove("on");
        }
        else{
            this.SMObjOn = true;
            this.contentHolder.style.height = this.content.clientHeight + "px";
            this.header.classList.add("on");
            if(this.initialized){
                for (let i = 0; i < SMObjs.length; i++) {
                    if(SMObjs[i] != this){
                        SMObjs[i].SMObjOn = true;
                        SMObjs[i].toggleSMObj();
                    }
                }
            }
            closeMS();
        }
    }
}
for (let i = 4; i >= 0; i--) {
    const currentStaffMember = staffMembers[i];
    //create holder
    const SMEl = document.createElement("div");
    SMEl.classList.add("staff_member");
    SMEl.classList.add("slide_right");
    //create header
    const SMHeader = document.createElement("button");
    SMHeader.classList.add("sm_header");
    SMEl.append(SMHeader);
    //fill up header
    const SMHTitle = document.createElement("h3");
    SMHTitle.innerHTML = currentStaffMember.name + " - " + currentStaffMember.position;
    SMHeader.append(SMHTitle);
    const SMHPlus = document.createElement("p");
    SMHPlus.innerHTML = "+";
    SMHeader.append(SMHPlus);
    //create content holder holder
    const SMContentHolder = document.createElement("div");
    SMContentHolder.classList.add("sm_content_holder");
    SMEl.append(SMContentHolder);
    //create content holder
    const SMContent = document.createElement("div");
    SMContent.classList.add("sm_content");
    SMContentHolder.append(SMContent);
    //create image
    const SMImg = document.createElement("img");
    SMImg.src = currentStaffMember.poster;
    SMImg.alt = currentStaffMember.alt;
    SMContent.append(SMImg);
    //create text holder
    const SMTxt = document.createElement("div");
    SMTxt.classList.add("sm_txt");
    SMContent.append(SMTxt);
    //fill up text holder
    const SMName = document.createElement("h3");
    SMName.innerHTML = currentStaffMember.name;
    SMTxt.append(SMName);
    const SMPosition = document.createElement("h4");
    SMPosition.innerHTML = currentStaffMember.position;
    SMTxt.append(SMPosition);
    const SMDesc = document.createElement("p");
    SMDesc.innerHTML = currentStaffMember.description;
    SMTxt.append(SMDesc);
    //create object
    const NewSMObj = new SMObj(SMHeader, SMContentHolder, SMContent);
    NewSMObj.toggleSMObj();
    NewSMObj.initialized = true;
    SMObjs.push(NewSMObj)
    //append element
    staffMembersHolder.prepend(SMEl);
}
SMObjs.forEach(element => {
    element.header.addEventListener("click", () =>{element.toggleSMObj()});
});


//load "more" staff members
const moreSMHolder = document.getElementById("team_members");
for (let i = 5; i < staffMembers.length; i++) {
    const staffMember = staffMembers[i];
    //create staff member element
    const SMEl = document.createElement("div");
    SMEl.classList.add("team_member");
    moreSMHolder.append(SMEl);
    //fill staff member element
    const SMElImg = document.createElement("img");
    SMElImg.src = staffMember.poster;
    SMElImg.alt = staffMember.alt;
    SMEl.append(SMElImg);
    const SMElName = document.createElement("h1");
    if(staffMember.name.length <= 11){
        SMElName.innerHTML = staffMember.name;
    }
    else{
        SMElName.innerHTML = staffMember.short_name;
    }
    SMEl.append(SMElName);
}


//toggle "more" staff
const MSHeader = document.getElementById("staff_more_header");
const MSContentHolder = document.getElementById("staff_more_content_holder");
const MSContent = document.getElementById("staff_more_content");
let MSOn = true;
function closeMS(){
    MSOn = false;
    MSHeader.classList.remove("on");
    MSContentHolder.style.height = "0px";
}
function openMS(){
    MSOn = true;
    MSHeader.classList.add("on");
    MSContentHolder.style.height = MSContent.clientHeight + "px";
    SMObjs.forEach(element => {
        element.SMObjOn = true;
        element.toggleSMObj();
    });
}
function toggleMS(){
    if(!MSOn){openMS();}
    else{closeMS();}
}
MSHeader.addEventListener("click", () =>{toggleMS();})
toggleMS();