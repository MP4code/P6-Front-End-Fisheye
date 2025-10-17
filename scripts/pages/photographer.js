//Mettre le code JavaScript lié à la page photographer.html 
// lié au template Photographer.js et mediaFactory.js
import { PhotographerFactory } from "../templates/photographer.js";
import { mediaFactory } from "../templates/mediaFactory.js";
import { likesFactory} from "../templates/likesFactory.js";
import { setupModal, displayModal, closeModal } from "../utils/contactForm.js";
import { lightboxModal} from "../templates/lightbox.js";

async function init() {
    const response = await fetch("data/photographers.json");
    const data = await response.json();

    const urlParams = new URLSearchParams(window.location.search);
    const photographerId = parseInt(urlParams.get("id"), 10);

    const photographerData = data.photographers.find(p => p.id === photographerId);
    if (!photographerData) return;

    const photographerFirstName = photographerData.name.split(' ')[0];

    const mediaArray = data.media.filter(m => m.photographerId === photographerId);

    const photographer = PhotographerFactory.createPhotographer(photographerData);

     // --- Injecte le header dans le div déjà existant ---
    const headerDiv = document.querySelector(".photograph-header");
    headerDiv.innerHTML = photographer.createHeaderHTML();
    
    // Configuration du modal
    setupModal();

    const contactButton = document.querySelector(".contact_button");
    contactButton.addEventListener("click", displayModal);
    const closeButton = document.querySelector(".close-button");
    if (closeButton) {
    closeButton.addEventListener("click", closeModal);
    }
    // Prénom du photographe dans le modal
    const photographerNameInModal = document.getElementById("photographer_name");
    photographerNameInModal.textContent = photographerData.name;

      // --- Section tri et section photos ---
    document.querySelector("main").insertAdjacentHTML("beforeend", photographer.createPageHTML());

    // --- Injecte les médias dans la section photos ---
    const sectionPhotos = document.querySelector(".sectionphotos");
    mediaArray.forEach(mediaData => {
        const media = new mediaFactory(mediaData); // crée ImageMedia ou VideoMedia
        sectionPhotos.insertAdjacentHTML("beforeend", media.createHTML(photographerFirstName));

    });
    // Calcule et affiche le total des likes
    const totalLikesContainer = document.getElementById("totalLikes");
    const totalLikes = mediaArray.reduce((sum, media) => sum + media.likes, 0);
    totalLikesContainer.textContent = totalLikes;

    // Active les clics sur tous les médias
    document.querySelectorAll(".mediaContainer").forEach(container => {
        likesFactory.activateLikes(container, totalLikesContainer);
    });
    // Lightbox
    lightboxModal();

}

init();
