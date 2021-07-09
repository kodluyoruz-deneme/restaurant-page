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
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
//create html elements
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




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "main": () => (/* binding */ main)
/* harmony export */ });
//Create main part html elements
const main = document.createElement("main");
const pageImage = document.createElement("div");
const image = document.createElement("img");
const mainContent = document.createElement("div");
const h2Header = document.createElement("h2");
const paragraph = document.createElement("p");

//Set content of elements
image.src = "../src/restaurant-image.jpeg";
image.setAttribute("alt", "seaside restaurant image");
h2Header.textContent = "Home";
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

//Set ID's of elements
mainContent.setAttribute("id", "main-content");
pageImage.setAttribute("id", "page-image");

pageImage.appendChild(image);
mainContent.appendChild(h2Header);
mainContent.appendChild(paragraph);
main.appendChild(pageImage);
main.appendChild(mainContent);




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



const content = document.getElementById("content");
content.appendChild(_header__WEBPACK_IMPORTED_MODULE_0__.header);
content.appendChild(_main__WEBPACK_IMPORTED_MODULE_1__.main);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7O0FDckJsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0I7Ozs7Ozs7VUNuQ2hCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNKOztBQUU5QjtBQUNBLG9CQUFvQiwyQ0FBTTtBQUMxQixvQkFBb0IsdUNBQUkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY3JlYXRlIGh0bWwgZWxlbWVudHNcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5jb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBzbG9nYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgaDFIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5jb25zdCBoNEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcblxuLy9BZGQgaWQgdG8gdGhlIGVsZW1lbnRzXG5yZXN0YXVyYW50TmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlc3RhdXJhbnQtbmFtZVwiKTtcbnNsb2dhbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNsb2dhblwiKTtcblxuLy9BZGQgY29udGVudCB0byB0aGUgZWxlbWVudHNcbmgxSGVhZGVyLnRleHRDb250ZW50ID0gXCJBZWdlYW4gQmlzdHJvXCI7XG5oNEhlYWRlci50ZXh0Q29udGVudCA9XG4gIFwiRGVsaWNpb3VzIG1lYWxzIGFuZCByZWZyZXNoaW5nIGRyaW5rcyBmcm9tIGFuY2llbnQgbGFuZHMgb2YgQWVnZWFuXCI7XG4vL0FkZCBoZWFkZXIgc3ViIGNoaWxkcyB0byB0aGUgaGVhZGVyIGVsZW1lbnRcbnJlc3RhdXJhbnROYW1lLmFwcGVuZENoaWxkKGgxSGVhZGVyKTtcbnNsb2dhbi5hcHBlbmRDaGlsZChoNEhlYWRlcik7XG5oZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuaGVhZGVyLmFwcGVuZENoaWxkKHNsb2dhbik7XG5cbmV4cG9ydCB7IGhlYWRlciB9O1xuIiwiLy9DcmVhdGUgbWFpbiBwYXJ0IGh0bWwgZWxlbWVudHNcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbmNvbnN0IHBhZ2VJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBoMkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4vL1NldCBjb250ZW50IG9mIGVsZW1lbnRzXG5pbWFnZS5zcmMgPSBcIi4uL3NyYy9yZXN0YXVyYW50LWltYWdlLmpwZWdcIjtcbmltYWdlLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInNlYXNpZGUgcmVzdGF1cmFudCBpbWFnZVwiKTtcbmgySGVhZGVyLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5wYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgSW4gdGhlIGhlYXJ0IG9mIEJvZHJ1bSwgc2V0IGF0IHRoZSBtYWduaWZpY2VudCBwbGFjZSwgbmVhciB0aGVcbiAgY2FzdGxlIG9mIEJvZHJ1bSwgdGhlIGV0ZXJuYWwgZ3VhcmRpYW4gb2YgdGhlIHJlZ2lvbiwgYSBydXN0aWMgZ2VtXG4gIGF3YWl0cyB0byBiZSBkaXNjb3ZlcmVkLiBUaGUgcmVzdGF1cmFudCAnQWVnZWFuJyBsaWVzIGEgZmV3IG1ldGVyc1xuICBmcm9tIHRoZSBtYWluIHNxdWFyZSwgb24gb25lIG9mIHRoZSBtb3N0IHByaXZpbGVnZWQgc3BvdHMgb2YgdGhlXG4gIGNpdHkgaW4gdGhlIGFybXMgb2YgdGhlIHdhdmVzLiBUaGVyZSwgdGhlIGNoYXJtIG9mIHNpbXBsaWNpdHkgd2l0aFxuICBzdHJvbmcgdHJhZGl0aW9uYWwgZWxlbWVudHMgdHJhdmVscyB5b3UgaW4gYSBmZWFzdCBvZiBNZWRpdGVycmFuZWFuXG4gIGZsYXZvcnMuIFdpdGhpbiBlYXN5IGFjY2VzcyBldmVuIHdoZW4gdGhlcmUgYXJlIHBoeXNpY2FsXG4gIGRpc2FiaWxpdGllcywgaXRzIGhvc3BpdGFibGUgY291cnR5YXJkIG9mZmVycyB5b3UgdGhlIHBlcmZlY3RcbiAgZW52aXJvbm1lbnQgd2hlcmUgeW91IGNhbiBlbmpveSBkZWxpY2lvdXMgZGlzaGVzIG9mIHRoZSBHcmVla1xuICBjdWlzaW5lLCBwcmVwYXJlZCB3aXRoIGNhcmUgYW5kIGxvY2FsLCBwdXJlIGluZ3JlZGllbnRzIGFuZCBmcmVzaFxuICBmaXNoIG9yIG9yaWdpbmFsIHNhbGFkcyB0aGF0IG1lZXQgdGhlIHJlcXVpcmVtZW50cyBvZiB0aGUgbW9kZXJuXG4gIGhlYWx0aHkgZGlldC5gO1xuXG4vL1NldCBJRCdzIG9mIGVsZW1lbnRzXG5tYWluQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tY29udGVudFwiKTtcbnBhZ2VJbWFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBhZ2UtaW1hZ2VcIik7XG5cbnBhZ2VJbWFnZS5hcHBlbmRDaGlsZChpbWFnZSk7XG5tYWluQ29udGVudC5hcHBlbmRDaGlsZChoMkhlYWRlcik7XG5tYWluQ29udGVudC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xubWFpbi5hcHBlbmRDaGlsZChwYWdlSW1hZ2UpO1xubWFpbi5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG5cbmV4cG9ydCB7IG1haW4gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgeyBtYWluIH0gZnJvbSBcIi4vbWFpblwiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=