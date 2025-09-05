function PageTemplate(data) {
    const { name, portrait, city, country, tagline, price } = data;
    const picture = `assets\\photographers\\Photographers ID Photos\\${portrait}`;

    function getPageHeaderDOM() {
        const photographheader = document.querySelector(".photograph-header");
        const informations = document.createElement('div');
        informations.setAttribute("aria-label", "Informations");
        const Title = document.createElement('h1');
        Title.textContent = name;
        informations.appendChild(Title);
        const city = document.createElement('p');
        city.textContent = `${data.city}, ${data.country}`;
        informations.appendChild(city);
        const tagline = document.createElement('p');
        tagline.textContent = data.tagline;
        informations.appendChild(tagline);
        photographheader.insertBefore(informations, photographheader.firstChild);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        photographheader.appendChild(img);

    }
    return { name , getPageHeaderDOM };
}
export default PageTemplate;
