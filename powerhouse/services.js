const srvExtDesignPortolio = document.getElementById("ext_des_portfolio")
const srvIntDesignPortolio = document.getElementById("int_des_portfolio");
const srvPermitPortfolio = document.getElementById("permits_portfolio");
function loadSrvExtDesignPortfolio(){
    for (let i = 0; i < portfolios.length; i++) {
        let currentPortfolio;
        if(portfolios[i].name == "Exterior Design"){
            currentPortfolio = portfolios[i];
            for (let i = 0; i < 2; i++) {
                const currentProject = currentPortfolio.projects[i];
                const prjEl = document.createElement("div");
                prjEl.classList.add("project");
                const prjImg = document.createElement("img");
                prjImg.src = currentProject.image;
                prjEl.append(prjImg);
                const prjTitle = document.createElement("h3");
                prjTitle.innerHTML = currentProject.name;
                prjEl.append(prjTitle);
                srvExtDesignPortolio.append(prjEl);
            }
        }
    }
}
function loadSrvIntDesignPortfolio(){
    for (let i = 0; i < portfolios.length; i++) {
        let currentPortfolio;
        if(portfolios[i].name == "Interior Design"){
            currentPortfolio = portfolios[i];
            for (let i = 0; i < 2; i++) {
                const currentProject = currentPortfolio.projects[i];
                const prjEl = document.createElement("div");
                prjEl.classList.add("project");
                const prjImg = document.createElement("img");
                prjImg.src = currentProject.image;
                prjEl.append(prjImg);
                const prjTitle = document.createElement("h3");
                prjTitle.innerHTML = currentProject.name;
                prjEl.append(prjTitle);
                srvIntDesignPortolio.append(prjEl);
            }
        }
    }    
}
function loadSrvsrvPermitPortfolio(){
    for (let i = 0; i < portfolios.length; i++) {
        let currentPortfolio;
        if(portfolios[i].name == "Permits & Regulations"){
            currentPortfolio = portfolios[i];
            for (let i = 0; i < 2; i++) {
                const currentProject = currentPortfolio.projects[i];
                const prjEl = document.createElement("div");
                prjEl.classList.add("project");
                const prjImg = document.createElement("img");
                prjImg.src = currentProject.image;
                prjEl.append(prjImg);
                const prjTitle = document.createElement("h3");
                prjTitle.innerHTML = currentProject.name;
                prjEl.append(prjTitle);
                srvPermitPortfolio.append(prjEl);
            }
        }
    }     
}
function loadSrvPortfolios(){
    loadSrvExtDesignPortfolio();
    loadSrvIntDesignPortfolio();
    loadSrvsrvPermitPortfolio();
}
window.onload = loadSrvPortfolios;