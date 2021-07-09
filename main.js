/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHeader": () => (/* binding */ loadHeader)
/* harmony export */ });
//create html element

function loadHeader() {
  const header = document.createElement("header");
  const restaurantName = document.createElement("div");
  const slogan = document.createElement("div");
  const h1Header = document.createElement("h1");
  const h4Header = document.createElement("h4");

  //Add id to the elements
  restaurantName.setAttribute("id", "restaurant-name");
  slogan.setAttribute("id", "slogan");

  //Add content to the elements
  h1Header.textContent = "Aegean Bistro";
  h4Header.textContent =
    "Delicious meals and refreshing drinks from ancient lands of Aegean";
  //Add header sub childs to the header element
  restaurantName.appendChild(h1Header);
  slogan.appendChild(h4Header);
  header.appendChild(restaurantName);
  header.appendChild(slogan);

  return header;
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });
function loadHome() {
  const homeSection = document.createElement("section");
  const paragraph = document.createElement("p");
  paragraph.textContent = `In the heart of Bodrum, set at the magnificent place, near the
    castle of Bodrum, the eternal guardian of the region, a rustic gem
    awaits to be discovered. The restaurant 'Aegean' lies a few meters
    from the main square, on one of the most privileged spots of the
    city in the arms of the waves. There, the charm of simplicity with
    strong traditional elements travels you in a feast of Mediterranean
    flavors. Within easy access even when there are physical
    disabilities, its hospitable courtyard offers you the perfect
    environment where you can enjoy delicious dishes of the Greek
    cuisine, prepared with care and local, pure ingredients and fresh
    fish or original salads that meet the requirements of the modern
    healthy diet.`;

  homeSection.appendChild(paragraph);

  return homeSection;
}


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMainPart": () => (/* binding */ loadMainPart)
/* harmony export */ });
function loadMainPart(loadSelectedSection) {
  const main = document.createElement("main");
  const pageImage = document.createElement("div");
  const image = document.createElement("img");
  const mainContent = document.createElement("div");
  const navbar = document.createElement("nav");
  const selectedSection = loadSelectedSection();
  const ul = document.createElement("ul");
  const homeButton = document.createElement("li");
  const menuButton = document.createElement("li");
  const contactButton = document.createElement("li");

  homeButton.innerHTML = '<a href="#">Home</a>';
  menuButton.innerHTML = '<a href="#">Menu</a>';
  contactButton.innerHTML = '<a href="#">Contact</a>';
  image.src = "../src/restaurant-image.jpeg";
  image.setAttribute("alt", "seaside restaurant image");
  mainContent.setAttribute("id", "main-content");
  pageImage.setAttribute("id", "page-image");

  ul.appendChild(homeButton);
  ul.appendChild(menuButton);
  ul.appendChild(contactButton);
  navbar.appendChild(ul);
  mainContent.appendChild(navbar);
  mainContent.appendChild(selectedSection);
  pageImage.appendChild(image);
  main.appendChild(pageImage);
  main.appendChild(mainContent);

  return main;
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");




function initialLoad() {
  const header = (0,_header__WEBPACK_IMPORTED_MODULE_0__.loadHeader)();
  const main = (0,_main__WEBPACK_IMPORTED_MODULE_1__.loadMainPart)(_home__WEBPACK_IMPORTED_MODULE_2__.loadHome);
  const content = document.getElementById("content");
  content.appendChild(header);
  content.appendChild(main);
}

initialLoad();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRXNCOzs7Ozs7Ozs7Ozs7Ozs7QUMxQmY7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25CTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O1VDL0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDQTtBQUNKOztBQUVsQztBQUNBLGlCQUFpQixtREFBVTtBQUMzQixlQUFlLG1EQUFZLENBQUMsMkNBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY3JlYXRlIGh0bWwgZWxlbWVudFxuXG5mdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGgxSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBoNEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcblxuICAvL0FkZCBpZCB0byB0aGUgZWxlbWVudHNcbiAgcmVzdGF1cmFudE5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXN0YXVyYW50LW5hbWVcIik7XG4gIHNsb2dhbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNsb2dhblwiKTtcblxuICAvL0FkZCBjb250ZW50IHRvIHRoZSBlbGVtZW50c1xuICBoMUhlYWRlci50ZXh0Q29udGVudCA9IFwiQWVnZWFuIEJpc3Ryb1wiO1xuICBoNEhlYWRlci50ZXh0Q29udGVudCA9XG4gICAgXCJEZWxpY2lvdXMgbWVhbHMgYW5kIHJlZnJlc2hpbmcgZHJpbmtzIGZyb20gYW5jaWVudCBsYW5kcyBvZiBBZWdlYW5cIjtcbiAgLy9BZGQgaGVhZGVyIHN1YiBjaGlsZHMgdG8gdGhlIGhlYWRlciBlbGVtZW50XG4gIHJlc3RhdXJhbnROYW1lLmFwcGVuZENoaWxkKGgxSGVhZGVyKTtcbiAgc2xvZ2FuLmFwcGVuZENoaWxkKGg0SGVhZGVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHNsb2dhbik7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IHsgbG9hZEhlYWRlciB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBjb25zdCBob21lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gYEluIHRoZSBoZWFydCBvZiBCb2RydW0sIHNldCBhdCB0aGUgbWFnbmlmaWNlbnQgcGxhY2UsIG5lYXIgdGhlXG4gICAgY2FzdGxlIG9mIEJvZHJ1bSwgdGhlIGV0ZXJuYWwgZ3VhcmRpYW4gb2YgdGhlIHJlZ2lvbiwgYSBydXN0aWMgZ2VtXG4gICAgYXdhaXRzIHRvIGJlIGRpc2NvdmVyZWQuIFRoZSByZXN0YXVyYW50ICdBZWdlYW4nIGxpZXMgYSBmZXcgbWV0ZXJzXG4gICAgZnJvbSB0aGUgbWFpbiBzcXVhcmUsIG9uIG9uZSBvZiB0aGUgbW9zdCBwcml2aWxlZ2VkIHNwb3RzIG9mIHRoZVxuICAgIGNpdHkgaW4gdGhlIGFybXMgb2YgdGhlIHdhdmVzLiBUaGVyZSwgdGhlIGNoYXJtIG9mIHNpbXBsaWNpdHkgd2l0aFxuICAgIHN0cm9uZyB0cmFkaXRpb25hbCBlbGVtZW50cyB0cmF2ZWxzIHlvdSBpbiBhIGZlYXN0IG9mIE1lZGl0ZXJyYW5lYW5cbiAgICBmbGF2b3JzLiBXaXRoaW4gZWFzeSBhY2Nlc3MgZXZlbiB3aGVuIHRoZXJlIGFyZSBwaHlzaWNhbFxuICAgIGRpc2FiaWxpdGllcywgaXRzIGhvc3BpdGFibGUgY291cnR5YXJkIG9mZmVycyB5b3UgdGhlIHBlcmZlY3RcbiAgICBlbnZpcm9ubWVudCB3aGVyZSB5b3UgY2FuIGVuam95IGRlbGljaW91cyBkaXNoZXMgb2YgdGhlIEdyZWVrXG4gICAgY3Vpc2luZSwgcHJlcGFyZWQgd2l0aCBjYXJlIGFuZCBsb2NhbCwgcHVyZSBpbmdyZWRpZW50cyBhbmQgZnJlc2hcbiAgICBmaXNoIG9yIG9yaWdpbmFsIHNhbGFkcyB0aGF0IG1lZXQgdGhlIHJlcXVpcmVtZW50cyBvZiB0aGUgbW9kZXJuXG4gICAgaGVhbHRoeSBkaWV0LmA7XG5cbiAgaG9tZVNlY3Rpb24uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICByZXR1cm4gaG9tZVNlY3Rpb247XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZE1haW5QYXJ0KGxvYWRTZWxlY3RlZFNlY3Rpb24pIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb25zdCBwYWdlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3Qgc2VsZWN0ZWRTZWN0aW9uID0gbG9hZFNlbGVjdGVkU2VjdGlvbigpO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICBob21lQnV0dG9uLmlubmVySFRNTCA9ICc8YSBocmVmPVwiI1wiPkhvbWU8L2E+JztcbiAgbWVudUJ1dHRvbi5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNcIj5NZW51PC9hPic7XG4gIGNvbnRhY3RCdXR0b24uaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIjXCI+Q29udGFjdDwvYT4nO1xuICBpbWFnZS5zcmMgPSBcIi4uL3NyYy9yZXN0YXVyYW50LWltYWdlLmpwZWdcIjtcbiAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwic2Vhc2lkZSByZXN0YXVyYW50IGltYWdlXCIpO1xuICBtYWluQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tY29udGVudFwiKTtcbiAgcGFnZUltYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGFnZS1pbWFnZVwiKTtcblxuICB1bC5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgdWwuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gIHVsLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQodWwpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChuYXZiYXIpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChzZWxlY3RlZFNlY3Rpb24pO1xuICBwYWdlSW1hZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBtYWluLmFwcGVuZENoaWxkKHBhZ2VJbWFnZSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuXG4gIHJldHVybiBtYWluO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2FkSGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgeyBsb2FkTWFpblBhcnQgfSBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQgeyBsb2FkSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcblxuZnVuY3Rpb24gaW5pdGlhbExvYWQoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGxvYWRIZWFkZXIoKTtcbiAgY29uc3QgbWFpbiA9IGxvYWRNYWluUGFydChsb2FkSG9tZSk7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuaW5pdGlhbExvYWQoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=