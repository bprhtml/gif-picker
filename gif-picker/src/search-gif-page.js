const APIKEY = '&api_key=8lNJqF3l3dla9Dg0N8sOlAuhCWYOXohr';
const LINK = 'https://api.giphy.com/v1/gifs/search?q=';

export function loadSearchPage(container) {
    container.innerHTML = '';
    const searchTitle = document.createElement('h1');
    const searchContainer = document.createElement('div');
    const searchForm = document.createElement('form');
    const searchInput = document.createElement('input');
    const searchButton = document.createElement('button');

    searchInput. classList.add('search-input');
    searchForm.  classList.add('search-form');
    searchButton.classList.add('search-button');
    searchButton.textContent = 'Search GIFs!'
    searchTitle. textContent = 'Search for your favourite GIF!';

    searchInput.placeholder = "eg. 'funny cats'";

    searchContainer.style.display = 'flex';
    searchContainer.style.margin = '5vh';

    container.appendChild(searchTitle);
    container.appendChild(searchContainer);
    searchContainer.appendChild(searchForm);
    searchForm.appendChild(searchInput)
    searchForm.appendChild(searchButton);

    const gifBox = document.createElement('div');
    gifBox.classList.add('gif-box');
    container.appendChild(gifBox);

    searchButton.addEventListener('click', (e) => {
        searchGifsFunction(e, gifBox);
    })
}

function searchGifsFunction(event, container) {
    event.preventDefault();
    const searchValue = document.querySelector('.search-input').value;
    console.log(searchValue);

    fetch(LINK + searchValue + APIKEY, { mode : 'cors'})
    .then(response => response.json())
    .then(function(response) {
        console.log(response);
        displayGIFs(response.data, container);
    })
}

function displayGIFs(array, container) {
    container.innerHTML = '';
    array.forEach((gif, index) => {
        const gifPhoto = document.createElement('img');
        gifPhoto.src = gif.images.original.url;
        gifPhoto.setAttribute('index', index)
        gifPhoto.style.width = '15vw';
        gifPhoto.style.margin = '1vw';
        gifPhoto.style.height = 'auto';
        gifPhoto.style.cursor = 'pointer';
        gifPhoto.addEventListener('click', () => {
            enlargeGif(array, gifPhoto, container);
        })
        container.appendChild(gifPhoto);
    });
}

function enlargeGif(array, gif, container) {
    const elementToBeRemoved = document.querySelector('.preview-pane');
    
    if (elementToBeRemoved) {
        elementToBeRemoved.remove()
    } else {
    let item = array[gif.getAttribute('index')];
    console.log(item);

    const previewPane = document.createElement('div');
    previewPane.classList.add('preview-pane');
    container.appendChild(previewPane);

    const exitButton = document.createElement('button');
    exitButton.textContent = 'X';
    exitButton.classList.add('exit-button');
    previewPane.appendChild(exitButton)

    const gifContainer = document.createElement('div');
    gifContainer.classList.add('gif-container');
    previewPane.appendChild(gifContainer);

    const previewGif = document.createElement('img');
    previewGif.src = item.images.original.url;
    previewGif.classList.add('gif-preview');
    previewPane.appendChild(previewGif);

    exitButton.addEventListener('click', () => {
        const elementToBeRemoved = document.querySelector('.preview-pane');
        elementToBeRemoved.remove();
    })
    }

}