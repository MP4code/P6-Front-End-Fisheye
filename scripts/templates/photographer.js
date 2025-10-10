// Factory Pattern pour créer les photographes sur la page d'accueil.
// Ce fichier et lié à index.html
export class PhotographerFactory {
    static createPhotographer(data) {
        return new Photographer(data);
    }
}

class Photographer {
    constructor(data) {
        this.name = data.name;
        this.portrait = data.portrait;
        this.city = data.city;
        this.country = data.country;
        this.tagline = data.tagline;
        this.price = data.price;
        this.id = data.id;

        // Chemin vers l’image du photographe
        this.picture = `assets/photographers/Photographers ID Photos/${this.portrait}`;
    }

    // Page d'accueil : carte photographe
    createHTML() {
        return `
        <article aria-label="Voir la fiche de ${this.name}">
            <a href="photographer.html?id=${this.id}" aria-label="Voir la fiche de ${this.name}">
                <img src="${this.picture}" alt="${this.name}">
                <h2>${this.name}</h2>
                <p>${this.city}, ${this.country}</p>
                <p>${this.tagline}</p>
                <p>${this.price}€/jour</p>
            </a>
        </article>`;
    }
    // Page photographe : header, section tri, section photos, aside likes et prix
     createHeaderHTML() {
        return `
        <div class="informations" aria-label="Informations">
            <h1>${this.name}</h1>
            <p>${this.city}, ${this.country}</p>
            <p>${this.tagline}</p>
        </div>
        <button class="contact_button" aria-label="Contactez-moi">Contactez-moi</button>
        <img src="${this.picture}" alt="${this.name}">`;

    }

    // Page photographe : sections tri, section photos et aside likes/price
    createPageHTML() {
        return `
        <section class="sectiondesign">
            <div class="trie">
                <p>Trier par</p>
                <select>
                    <option value="popularité">Popularité</option>
                    <option value="date">Date</option>
                    <option value="titre">Titre</option>
                </select>
            </div>
        </section>

        <section class="sectionphotos" aria-label="section photos"></section>

        <aside class="infolikesprice" aria-label="informations likes et prix">
            <div class="boxLikes" aria-label="Total des likes">
                <p id="totalLikes"></p>
                <img src="assets/icons/heart-black.png" alt="icon likes">
            </div>
            <div class="priceContainer">
                <p>${this.price}€/jour</p>
            </div>
        </aside>`;
    }
}