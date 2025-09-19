//Mettre le code JavaScript lié à la page photographer.html
import { PageTemplate, MediaTemplate } from "../templates/pagePhotographer.js";

async function getPagePhotographers() {
    const response = await fetch("data/photographers.json");
    const data = await response.json();
    return { photographers: data.photographers };
}

async function displayData(photographer, media) {
    // --- Header + tri + section photos ---
    const pagePhotographerModel = PageTemplate(photographer);
    pagePhotographerModel.getPageHeaderDOM();

    // --- Ajouter les images ---
    const photographerFirstName = photographer.name.split(" ")[0];
    MediaTemplate(media, photographerFirstName);
}

async function init() {
    const { photographers } = await getPagePhotographers();
    const urlParams = new URLSearchParams(window.location.search);
    const photographerId = parseInt(urlParams.get('id'), 10);

    const photographer = photographers.find(p => p.id === photographerId);

    // Récupérer les médias associés
    const response = await fetch("data/photographers.json");
    const data = await response.json();
    const media = data.media.filter(m => m.photographerId === photographerId);

    displayData(photographer, media);
}

init();
