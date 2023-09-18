/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search_gif_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-gif-page */ \"./src/search-gif-page.js\");\n/* harmony import */ var _random_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random-gif */ \"./src/random-gif.js\");\n\n\n\n\nconst body = document.querySelector('.flex-container');\nconst searchHeader = document.querySelector('.search-gif');\nconst randomHeader = document.querySelector('.random-gif');\nconst catHeader = document.querySelector('.categories');\n\nsearchHeader.addEventListener('click', () => {\n    body.innerHTML = '';\n    (0,_search_gif_page__WEBPACK_IMPORTED_MODULE_0__.loadSearchPage)(body);\n})\n\nrandomHeader.addEventListener('click', () => {\n    body.innerHTML = '';\n    (0,_random_gif__WEBPACK_IMPORTED_MODULE_1__.loadRandomGif)(body);\n})\n\n//# sourceURL=webpack://gif-picker/./src/index.js?");

/***/ }),

/***/ "./src/random-gif.js":
/*!***************************!*\
  !*** ./src/random-gif.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadRandomGif: () => (/* binding */ loadRandomGif)\n/* harmony export */ });\nconst APIKEY = '8lNJqF3l3dla9Dg0N8sOlAuhCWYOXohr';\nconst LINK = 'https://api.giphy.com/v1/gifs/random';\n\nfunction loadRandomGif(container) {\n    container.innerHTML = '';\n\n    const gifBox = document.createElement('div');\n    gifBox.classList.add('gif-box');\n    container.appendChild(gifBox);\n\n    searchGifsFunction(gifBox)\n}\n\nfunction searchGifsFunction(container) {\n    fetch(LINK + '?api_key=' + APIKEY, { mode : 'cors'})\n    .then(response => response.json())\n    .then(function(response) {\n        console.log(response);\n        displayGIFs(response.data, container);\n    })\n}\n\nfunction displayGIFs(object, container) {\n    container.innerHTML = '';\n    const gifPhoto = document.createElement('img');\n    gifPhoto.src = object.images.original.url;\n    gifPhoto.style.width = '40vw';\n    gifPhoto.style.margin = '1vw';\n    gifPhoto.style.height = 'auto';\n    gifPhoto.style.position = 'absolute';\n    gifPhoto.style.left = '30vw';\n    container.appendChild(gifPhoto);\n}\n\n//# sourceURL=webpack://gif-picker/./src/random-gif.js?");

/***/ }),

/***/ "./src/search-gif-page.js":
/*!********************************!*\
  !*** ./src/search-gif-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadSearchPage: () => (/* binding */ loadSearchPage)\n/* harmony export */ });\nconst APIKEY = '&api_key=8lNJqF3l3dla9Dg0N8sOlAuhCWYOXohr';\nconst LINK = 'https://api.giphy.com/v1/gifs/search?q=';\n\nfunction loadSearchPage(container) {\n    container.innerHTML = '';\n    const searchTitle = document.createElement('h1');\n    const searchContainer = document.createElement('div');\n    const searchForm = document.createElement('form');\n    const searchInput = document.createElement('input');\n    const searchButton = document.createElement('button');\n\n    searchInput. classList.add('search-input');\n    searchForm.  classList.add('search-form');\n    searchButton.classList.add('search-button');\n    searchButton.textContent = 'Search GIFs!'\n    searchTitle. textContent = 'Search for your favourite GIF!';\n\n    searchInput.placeholder = \"eg. 'funny cats'\";\n\n    searchContainer.style.display = 'flex';\n    searchContainer.style.margin = '5vh';\n\n    container.appendChild(searchTitle);\n    container.appendChild(searchContainer);\n    searchContainer.appendChild(searchForm);\n    searchForm.appendChild(searchInput)\n    searchForm.appendChild(searchButton);\n\n    const gifBox = document.createElement('div');\n    gifBox.classList.add('gif-box');\n    container.appendChild(gifBox);\n\n    searchButton.addEventListener('click', (e) => {\n        searchGifsFunction(e, gifBox);\n    })\n}\n\nfunction searchGifsFunction(event, container) {\n    event.preventDefault();\n    const searchValue = document.querySelector('.search-input').value;\n    console.log(searchValue);\n\n    fetch(LINK + searchValue + APIKEY, { mode : 'cors'})\n    .then(response => response.json())\n    .then(function(response) {\n        console.log(response);\n        displayGIFs(response.data, container);\n    })\n}\n\nfunction displayGIFs(array, container) {\n    container.innerHTML = '';\n    array.forEach((gif, index) => {\n        const gifPhoto = document.createElement('img');\n        gifPhoto.src = gif.images.original.url;\n        gifPhoto.setAttribute('index', index)\n        gifPhoto.style.width = '15vw';\n        gifPhoto.style.margin = '1vw';\n        gifPhoto.style.height = 'auto';\n        gifPhoto.style.cursor = 'pointer';\n        gifPhoto.addEventListener('click', () => {\n            enlargeGif(array, gifPhoto, container);\n        })\n        container.appendChild(gifPhoto);\n    });\n}\n\nfunction enlargeGif(array, gif, container) {\n    const elementToBeRemoved = document.querySelector('.preview-pane');\n    \n    if (elementToBeRemoved) {\n        elementToBeRemoved.remove()\n    } else {\n    let item = array[gif.getAttribute('index')];\n    console.log(item);\n\n    const previewPane = document.createElement('div');\n    previewPane.classList.add('preview-pane');\n    container.appendChild(previewPane);\n\n    const exitButton = document.createElement('button');\n    exitButton.textContent = 'X';\n    exitButton.classList.add('exit-button');\n    previewPane.appendChild(exitButton)\n\n    const gifContainer = document.createElement('div');\n    gifContainer.classList.add('gif-container');\n    previewPane.appendChild(gifContainer);\n\n    const previewGif = document.createElement('img');\n    previewGif.src = item.images.original.url;\n    previewGif.classList.add('gif-preview');\n    previewPane.appendChild(previewGif);\n\n    exitButton.addEventListener('click', () => {\n        const elementToBeRemoved = document.querySelector('.preview-pane');\n        elementToBeRemoved.remove();\n    })\n    }\n\n}\n\n//# sourceURL=webpack://gif-picker/./src/search-gif-page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;