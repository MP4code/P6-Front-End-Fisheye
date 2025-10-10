// Factory Pattern pour créer des objets de type "likes" pour la page du photographe.

export class likesFactory{
    constructor(likes) {
        // On récupère le nombre de likes directement depuis le JSON
        this.likes = likes;
    }

    createHTML() {
        return `<div class="likesDiv" aria-label="likes">
            <p class="likes-count">${this.likes}</p>
            <img src="assets/icons/heart.png" alt="icon likes" class="heart-icon">
        </div>`;
    }


 static activateLikes(mediaContainer, totalLikes = null) {
        const heart = mediaContainer.querySelector(".heart-icon");
        const likesP = mediaContainer.querySelector(".likes-count");

        heart.addEventListener("click", () => {
            // Incrément local
            let likes = parseInt(likesP.textContent, 10);
            likes++;
            likesP.textContent = likes;

            // Incrément du total de la page
            if (totalLikes) {
                const currentTotal = parseInt(totalLikes.textContent, 10);
                totalLikes.textContent = currentTotal + 1;
            }
        });
    }

}
