import {} from "../templates/mediaFactory.js";
export function lightboxModal() {
    const lightboxLinks = document.querySelectorAll(".lightbox");
    const lightboxModal = document.createElement("div");
    lightboxModal.id = "lightbox_modal";
    lightboxModal.style.display = "none";
    document.body.appendChild(lightboxModal);
}

document.addEventListener("click", function (event) {
    if (event.target.closest(".lightbox")) {
        event.preventDefault();
        const lightboxModal = document.getElementById("lightbox_modal");
        const mediaSrc = event.target.src;
        const mediaAlt = event.target.alt;

        lightboxModal.innerHTML = `
            <div class="lightbox_content">
                <img src="assets/icons/arrow-left.png" alt="image précédente" class="lightbox_prev">
                <img src="${mediaSrc}" alt="${mediaAlt}" class="lightbox_image">
                <img src="assets/icons/arrow-right.png" alt="image suivante" class="lightbox_next">
                <div class="lightbox_caption">${mediaAlt}</div>
                <div class="lightbox_closer"><img src="assets/icons/close-lightbox.png" alt="fermer la lightbox" class="lightbox_close">
                </div>
                
            </div>`;
        lightboxModal.style.display = "block";
    }
});
document.addEventListener("click", function (event) {
    const lightboxModal = document.getElementById("lightbox_modal");
    if (event.target.closest(".lightbox_close")) {
        lightboxModal.style.display = "none";
    }
});   

// finir CSS et ajouter la navigation entre les médias
// 2e Trie des médias dans la lightbox (popularité, date, titre)
// navigation clavier