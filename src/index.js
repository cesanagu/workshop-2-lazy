
import { registerImage } from "./lazy";

// const baseUrl = "https://randomfox.ca/images/"

// const appNode = document.querySelector("#app");
// appNode.addEventListener("click", (event) => {
//     if (event.target.button){
//         items.append(...items)
//     }
// })

// const random1 = () => {
//     Math.random() * 120;
// }

// window.fetch(`${baseUrl}`).then(response => response.json())
// .then(responseJSON =>{
//     const items =[];
//     responseJSON.data.forEach(item => {

//         const imagen = document.createElement('img');
//         imagen.src = `${baseUrl}${random}+.jpg`

//         const container = document.createElement('div')
//         container.append(imagen);

//     items.push(container)
//     })
//     items.append(...items)
// })

// ----------------------------------------------------------------

const minimum = 1;
const maximum = 122;
const random = () => Math.floor(Math.random() * (maximum - minimum))+ minimum;

const createImage = () => {

    const container = document.createElement('div')
    container.className = 'p-4'

    const imagen = document.createElement('img');
    imagen.className = 'mx-auto my-5 rounded bg-gray-200';
    imagen.width = "320";
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen);

    return container;
};

const mountNode = document.getElementById('images');


// newImageButton
const addButton = document.querySelector('button');

const addImage = () => {
    const newImage = createImage();
    mountNode.appendChild(newImage);
    // mountNode.insertAdjacentElement('afterbegin', newImage);
    registerImage(newImage);
};

addButton.addEventListener("click", addImage);

// removeImageButton
const removeButton = document.getElementById('btn-clean');

const clearImage = () => {
    mountNode.replaceChildren();
};

removeButton.addEventListener("click", clearImage);

