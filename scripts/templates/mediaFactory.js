// Factory Pattern pour créer des objets médias (image ou vidéo) en fonction du type de média fourni dans les données.
import { likesFactory } from "../templates/likesFactory.js";

export class mediaFactory{
     constructor(data){
         const { title, image, video, likes } = data;
        if (data.image) {
            return new ImageMedia(title, image, likes);
        } else if (data.video) {
            return new VideoMedia(title, video, likes);
        } else {
            throw new Error('Unknown media type');
        }
    }

}
class ImageMedia {
    constructor(title, image, likes){
        this.title = title;
        this.image = image;
        this.likes = likes;
    }

    createHTML(photographerFirstName){
        const likesTemplate = new likesFactory(this.likes).createHTML();
        return `<div class="mediaContainer">
            <a href="#" class="lightbox" aria-label="lightbox de ${photographerFirstName}">
                <img src="assets/images/Sample Photos/${photographerFirstName}/${this.image}" alt="${this.title}">
            </a>
            <div class="infoDiv" aria-label="${this.title}, ${this.likes} likes">
                <p tabindex="0">${this.title}</p>
                <div class="likesDiv" tabindex="0">${likesTemplate}</div>
            </div>
        </div>`;
    }
}
class VideoMedia {
    constructor(title, video, likes){
        this.title = title;
        this.video = video;
        this.likes = likes;
    }

    createHTML(photographerFirstName){
        const likesTemplate = new likesFactory(this.likes).createHTML();
        return `<div class="mediaContainer">
            <a href="#" class="lightbox" aria-label="lightbox de ${photographerFirstName}">
                <video controls aria-label="${this.title}">
                    <source src="assets/images/Sample Photos/${photographerFirstName}/${this.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </a>
            <div class="infoDiv" aria-label="${this.title}, ${this.likes} likes">
                <p tabindex="0">${this.title}</p>
                <div class="likesDiv" tabindex="0">${likesTemplate}</div>
            </div>
        </div>`;
    }
}

// un fichier pour chaque class ( mediaFactory, imageMedia, videoMedia, likes) 