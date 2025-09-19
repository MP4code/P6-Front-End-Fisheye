
function PageTemplate(data) {
    const { name, portrait, city, country, tagline } = data;
    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

    function getPageHeaderDOM() {
        const main = document.querySelector("main");
        const photographheader = document.querySelector(".photograph-header");

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
    }

    return { name, getPageHeaderDOM };
}

function MediaTemplate(mediaArray,photographerFirstName) {
    const sectionphotos = document.querySelector(".sectionphotos");

    mediaArray.forEach(media => {
        const mediaLink = document.createElement('a');
        mediaLink.className = "lightbox";
        mediaLink.setAttribute("aria-label", "lightbox");
        mediaLink.setAttribute("href", "#");
        sectionphotos.appendChild(mediaLink);

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
    });
}

export { PageTemplate, MediaTemplate };
