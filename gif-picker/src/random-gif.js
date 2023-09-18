const APIKEY = '8lNJqF3l3dla9Dg0N8sOlAuhCWYOXohr';
const LINK = 'https://api.giphy.com/v1/gifs/random';

export function loadRandomGif(container) {
    container.innerHTML = '';

    const gifBox = document.createElement('div');
    gifBox.classList.add('gif-box');
    container.appendChild(gifBox);

    searchGifsFunction(gifBox)
}

function searchGifsFunction(container) {
    fetch(LINK + '?api_key=' + APIKEY, { mode : 'cors'})
    .then(response => response.json())
    .then(function(response) {
        console.log(response);
        displayGIFs(response.data, container);
    })
}

function displayGIFs(object, container) {
    container.innerHTML = '';
    const gifPhoto = document.createElement('img');
    gifPhoto.src = object.images.original.url;
    gifPhoto.style.width = '40vw';
    gifPhoto.style.margin = '1vw';
    gifPhoto.style.height = 'auto';
    gifPhoto.style.position = 'absolute';
    gifPhoto.style.left = '30vw';
    container.appendChild(gifPhoto);
}