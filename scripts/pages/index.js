   // La page d'accueil des photographes
   // ce fichier est lié à photographers.js et index.html

  import { PhotographerFactory } from "../templates/photographer.js";

   async function getPhotographers() {
            // On va chercher le JSON
    const response = await fetch("data/photographers.json");
    const data = await response.json();
     // On retourne uniquement le tableau des photographes
    return { photographers: data.photographers };

    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((data) => {
           const photographer = PhotographerFactory.createPhotographer(data);
           // On génère le HTML avec la méthode createHTML()
           const photographerCard = photographer.createHTML();
           // On l'injecte dans la page avec insertAdjacentHTML
           photographersSection.insertAdjacentHTML("beforeend", photographerCard);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
