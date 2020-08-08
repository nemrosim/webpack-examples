import webpackImage from './assets/webpack-image.png';
import './css/image.css'

function divWithImage() {
    const element = document.createElement('div');

    const image = new Image();
    image.src = webpackImage;
    image.className = 'image'

    element.appendChild(image);

    return element;
}

document.body.appendChild(divWithImage());
