const portfolioHolder = document.getElementById("portfolios");
function loadPortfolio(){
    for (let i = 0; i < portfolios.length; i++) {
        const currentPortfolio = portfolios[i];
        
        //create portfolio section
        const pfEl = document.createElement("section");
        pfEl.classList.add("sided");
        pfEl.classList.add("bottomed");
        pfEl.classList.add("animated");
        if(i%2 == 0){
            if(i==0)
                pfEl.classList.add("half_topped");
            else
                pfEl.classList.add("topped");
        }
        else{
            pfEl.classList.add("dark");
            pfEl.classList.add("topped");
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