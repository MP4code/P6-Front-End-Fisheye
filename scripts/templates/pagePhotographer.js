
function PageTemplate(data) {
    const { name, portrait, city, country, tagline } = data;
    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;
    

    function getPageHeaderDOM() {
        const main = document.querySelector("main");
        const photographheader = document.querySelector(".photograph-header");
        const namePhotographer = document.getElementById("photographer_name");
        namePhotographer.textContent = name;
        const informations = document.createElement('div');
        informations.setAttribute("aria-label", "Informations");
        const Title = document.createElement('h1');
        Title.textContent = name;
        informations.appendChild(Title);
        const cityEl = document.createElement('p');
        cityEl.textContent = `${city}, ${country}`;
        informations.appendChild(cityEl);
        const taglineEl = document.createElement('p');
        taglineEl.textContent = tagline;
        informations.appendChild(taglineEl);
        photographheader.insertBefore(informations, photographheader.firstChild);

        const img = document.createElement('img');
        img.src = picture;
        img.alt = name;
        photographheader.appendChild(img);

        // Section tri
        const sectiondesign = document.createElement('section');
        sectiondesign.className = "sectiondesign";
        const trie = document.createElement('div');
        trie.className = "trie";
        const trierPar = document.createElement('p');
        trierPar.textContent = "Trier par";
        trie.appendChild(trierPar);
        const select = document.createElement('select');
        ["Popularité","Date","Titre"].forEach(txt => {
            const option = document.createElement('option');
            option.value = txt.toLowerCase();
            option.textContent = txt;
            select.appendChild(option);
        });
        trie.appendChild(select);
        sectiondesign.appendChild(trie);
        main.appendChild(sectiondesign);

        // Section photos
        const sectionphotos = document.createElement('section');
        sectionphotos.className = "sectionphotos";
        sectionphotos.setAttribute("aria-label","section photos");
        main.appendChild(sectionphotos);

        // Section likes et prix
        const aside = document.createElement('aside');
        aside.className = "infolikesprice";
        aside.setAttribute("aria-label", "informations likes et prix");
        main.appendChild(aside);

        // Calcul total likes

        const boxLikes = document.createElement('div');
        boxLikes.className = "boxLikes";
        boxLikes.setAttribute("aria-label", "total likes");
        const totalLikes = document.createElement('p');
        totalLikes.className = "totalLikes";
        totalLikes.textContent = "0 ";
        boxLikes.appendChild(totalLikes);
        aside.appendChild(boxLikes);
        const heartIcon2 = document.createElement('img');
        heartIcon2.src = "assets/icons/heart-black.png";
        heartIcon2.alt = "likes";
        boxLikes.appendChild(heartIcon2);
        const price = document.createElement('div');
        price.className = "price";
        price.textContent = `${data.price}€/jour`;
        aside.appendChild(price);
       
      
    }

    return { name, getPageHeaderDOM };
}

function MediaTemplate(mediaArray,photographerFirstName) {
    const sectionphotos = document.querySelector(".sectionphotos");
    const totalLikes = document.querySelector(".totalLikes");
    let likesSum = 0;


    mediaArray.forEach(media => {

        // Somme des likes
        likesSum += media.likes;
        
        // Conteneur média
        const mediaContainer = document.createElement('div');
        mediaContainer.className = "mediaContainer";
        sectionphotos.appendChild(mediaContainer);
        // Lien lightbox
        const mediaLink = document.createElement('a');
        mediaLink.className = "lightbox";
        mediaLink.setAttribute("aria-label", "lightbox");
        mediaLink.setAttribute("href", "#");
        mediaContainer.appendChild(mediaLink);
        // Titre et likes
        const infoDiv = document.createElement('div');
        infoDiv.setAttribute("aria-label", "informations");
        infoDiv.className = "infoDiv";
        const title = document.createElement('p');
        title.textContent = media.title;
        infoDiv.appendChild(title);
        const likesDiv = document.createElement('div');
        likesDiv.className = "likesDiv";
        likesDiv.setAttribute("aria-label", "likes");
        const likes = document.createElement('p');
        likes.textContent = `${media.likes}`;
        likesDiv.appendChild(likes);
        infoDiv.appendChild(likesDiv);
        mediaContainer.appendChild(infoDiv);
        const heartIcon = document.createElement('img');
        heartIcon.src = "assets/icons/heart.png";
        heartIcon.alt = "likes";
        likesDiv.appendChild(heartIcon);
        // Ajouter un écouteur d'événement pour le clic sur l'icône de cœur
        heartIcon.addEventListener('click', () => {
            media.likes++;
            likes.textContent = `${media.likes}`;
            likesSum++;
            totalLikes.textContent = `${likesSum} `;
        });
        // Image ou vidéo
        if(media.image){
            const img = document.createElement('img');
            img.src = `assets/images/Sample Photos/${photographerFirstName}/${media.image}`;
            img.alt = media.title || "";
            mediaLink.appendChild(img);
        } else if(media.video){
            const video = document.createElement('video');
            video.src = `assets/images/Sample Photos/${photographerFirstName}/${media.video}`;
            video.setAttribute("controls", "");
            mediaLink.appendChild(video);
        }
        // likes totaux
        totalLikes.textContent = `${likesSum} `;
    });

}

export { PageTemplate, MediaTemplate };
