//Mettre le code JavaScript lié à la page photographer.html

   import pagephotographerTemplate from "../templates/pagePhotographer.js";

   async function getPagePhotographers() {
            // On va chercher le JSON
    const response = await fetch("data/photographers.json");
    const data = await response.json();
     // On retourne uniquement le tableau des photographes
    return { photographers: data.photographers };


    }

    async function displayData(photographers) {
        const photographHeader = document.querySelector(".photograph-header");

        photographers.forEach((photographer) => {
            const pagePhotographerModel = pagephotographerTemplate(photographer);
            const pageUserDOM = pagePhotographerModel.getPageHeaderDOM();
            photographHeader.appendChild(pageUserDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPagePhotographers();
        displayData(photographers);
    }
    
    init();
