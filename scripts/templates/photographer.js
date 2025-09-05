function photographerTemplate(data) {
    const { name, portrait } = data;

    const picture = `assets\\photographers\\Photographers ID Photos\\${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.setAttribute("aria-label", `Voir la fiche de ${name}`);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        const pageLink = document.createElement('a');
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const city = document.createElement('p');
        city.textContent = `${data.city}, ${data.country}`;
        const tagline = document.createElement('p');
        tagline.textContent = data.tagline;
        const price = document.createElement('p');
        price.textContent = `${data.price}€/jour`;
        pageLink.setAttribute("aria-label", `Voir la fiche de ${name}`);
        pageLink.setAttribute("href", `photographer.html?id=${data.id}`);
        article.appendChild(pageLink);
        pageLink.appendChild(img);
        pageLink.appendChild(h2);
        pageLink.appendChild(city);
        pageLink.appendChild(tagline);
        pageLink.appendChild(price);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}
export default photographerTemplate;

// const picture = `assets\\photographers\\Photographers ID Photos\\EllieRoseWilkens.jpg`;