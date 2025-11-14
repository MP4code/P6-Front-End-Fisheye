import {} from "../templates/mediaFactory.js";

export function lightboxModal() {
    const lightboxLinks = document.querySelectorAll(".lightbox");
    const lightboxModal = document.createElement("div");
    lightboxModal.id = "lightbox_modal";
    lightboxModal.style.display = "none";
    document.body.appendChild(lightboxModal);

    // Tableau des médias (images + vidéos)
    const mediaArray = Array.from(lightboxLinks).map(link => {
        const media = link.querySelector("img, video");
        const title =  media.getAttribute("aria-label") ||
        media.getAttribute("title") ||
        media.alt ||
        link.getAttribute("title") ||
        "";
        const src = media.src;
        const alt = media.alt || media.getAttribute("title") || "";
        const isVideo = media.tagName.toLowerCase() === "video";
        console.log({ title});
        return { src, alt, isVideo, title };
    });

    // media.getAttribute("aria-label") || media.title || media.alt ||media.getAttribute("title") || "";
    let currentIndex = 0;          

    // --- OUVERTURE DE LA LIGHTBOX ---
    document.addEventListener("click", function (event) {
        const lightboxLink = event.target.closest(".lightbox");
        if (!lightboxLink) return;

        event.preventDefault();
        currentIndex = Array.from(lightboxLinks).indexOf(lightboxLink);
        openLightbox();
    });

    // --- AFFICHER LA LIGHTBOX ---
    function openLightbox() {
        const { src, alt, isVideo, title } = mediaArray[currentIndex];
        // Si c’est une vidéo, on affiche une balise <video>
        const mediaHTML = isVideo
            ? `<video class="lightbox_video" controls autoplay>
                   <source src="${src}" alt="${alt}" type="video/mp4">
               </video>`
            : `<img src="${src}" alt="${alt}" class="lightbox_image">`;

        lightboxModal.innerHTML = `
            <div class="lightbox_content">
                <div class="lightbox_carousel">
                    <img src="assets/icons/arrow-left.png" alt="image précédente" class="lightbox_prev">
                    ${mediaHTML}
                    <img src="assets/icons/arrow-right.png" alt="image suivante" class="lightbox_next">
                    <div class="lightbox_closer">
                        <img src="assets/icons/close-lightbox.png" alt="fermer la lightbox" class="lightbox_close">
                    </div>
                </div>
                <div class="lightbox_caption">${title}</div>
            </div>`;

        lightboxModal.style.display = "flex";

        // Ajoute les événements de navigation et fermeture
        lightboxModal.querySelector(".lightbox_image, .lightbox_video").focus();
        lightboxModal.querySelector(".lightbox_close").addEventListener("click", closeLightbox);
        lightboxModal.querySelector(".lightbox_prev").addEventListener("click", showPrevious);
        lightboxModal.querySelector(".lightbox_next").addEventListener("click", showNext);
        document.addEventListener("keydown", handleKeyNavigation);
    }

    // --- NAVIGATION ---
    function showNext() {
        currentIndex = (currentIndex + 1) % mediaArray.length;
        openLightbox();
    }

    function showPrevious() {
        currentIndex = (currentIndex - 1 + mediaArray.length) % mediaArray.length;
        openLightbox();
    }

    // --- FERMETURE ---
    function closeLightbox() {
        lightboxModal.style.display = "none";
        lightboxModal.innerHTML = "";
        document.removeEventListener("keydown", handleKeyNavigation);
    }

    // --- CLAVIER ---
    function handleKeyNavigation(e) {
        if (e.key === "ArrowRight") showNext();
        if (e.key === "ArrowLeft") showPrevious();
        if (e.key === "Escape") closeLightbox();
    }
}
