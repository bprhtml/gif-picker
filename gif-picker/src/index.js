import { loadSearchPage } from "./search-gif-page";
import { loadRandomGif } from "./random-gif";


const body = document.querySelector('.flex-container');
const searchHeader = document.querySelector('.search-gif');
const randomHeader = document.querySelector('.random-gif');
const catHeader = document.querySelector('.categories');

searchHeader.addEventListener('click', () => {
    body.innerHTML = '';
    loadSearchPage(body);
})

randomHeader.addEventListener('click', () => {
    body.innerHTML = '';
    loadRandomGif(body);
})