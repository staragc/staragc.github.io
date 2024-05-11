const portfolioHolder = document.getElementById("portfolios");
function loadPortfolio(){
    for (let i = 0; i < portfolios.length; i++) {
        const currentPortfolio = portfolios[i];
        
        //create portfolio section
        const pfEl = document.createElement("section");
        pfEl.classList.add("sided");
        pfEl.classList.add("bottomed");
        pfEl.classList.add("animated");

        if(i == 0)
            pfEl.classList.add("half_topped");

        if(portfolios.length > 2){
            if(i == 0){
            }
            else{
                pfEl.classList.add("topped");
                pfEl.classList.add("bottomed");
                if((i+1)%2 == 0)
                    pfEl.classList.add("dark");
            }
        }
        else{
            if(i == 0){
                pfEl.classList.add("half_topped");
                pfEl.classList.add("double_bottomed")
            }       
        }
        
        //create title
        const pfTitle = document.createElement("h1");
        pfTitle.classList.add("slide_up");
        pfTitle.innerHTML = currentPortfolio.name;
        pfEl.append(pfTitle);
        //create projects holder
        const pfProjects = document.createElement("div");
        pfProjects.classList.add("slide_up");
        pfProjects.classList.add("projects");
        pfEl.append(pfProjects);
        //create projects
        for (let i = 0; i < currentPortfolio.projects.length; i++) {
            const currentProject = currentPortfolio.projects[i];
            //create holder
            const pfPrj = document.createElement("div");
            pfPrj.classList.add("project");
            //fill up holder
            const pfPrjImg = document.createElement("img");
            pfPrjImg.src = currentProject.image;
            pfPrjImg.alt = currentProject.alt;
            pfPrj.append(pfPrjImg);
            const pfPrjName = document.createElement("h3");
            pfPrjName.innerHTML = currentProject.name;
            pfPrj.append(pfPrjName);
            //append project
            pfProjects.append(pfPrj);
        }
        //append portfolio section
        portfolioHolder.append(pfEl);
    }
}
loadPortfolio();