/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
function loadContact() {
  const contactSection = document.createElement("section");
  const addressSection = document.createElement("div");
  const telSection = document.createElement("div");
  const emailSection = document.createElement("div");

  addressSection.innerHTML =
    "<p><strong>Adress: </strong>Atatürk, 121. Sk., 35680 Foça/İzmir</p>";
  telSection.innerHTML = "<p><strong>Tel: </strong>0850123133934</p>";
  emailSection.innerHTML =
    "<p><strong>E-mail: </strong>aegeanbistro@gmail.com</p>";

  contactSection.appendChild(addressSection);
  contactSection.appendChild(telSection);
  contactSection.appendChild(emailSection);

  return contactSection;
}


/***/ }),

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
  const selectedSection = loadSelectedSection();

  mainContent.setAttribute("id", "main-content");
  image.src = "../src/restaurant-image.jpeg";
  image.setAttribute("alt", "seaside restaurant image");
  mainContent.setAttribute("id", "main-content");
  pageImage.setAttribute("id", "page-image");

  mainContent.appendChild(selectedSection);
  pageImage.appendChild(image);
  main.appendChild(pageImage);
  main.appendChild(mainContent);

  return main;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {
  const menuSection = document.createElement("section");
  const menu = [
    {
      name: "Grilled Umbra",
      image:
        "data:image/jpeg;base64,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",
      price: 10,
    },
    {
      name: "Grilled Plaice",
      image:
        "https://i.guim.co.uk/img/media/a1afaf927b84f21d16f0f78023ad1293f738c98b/0_1830_4822_2891/master/4822.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=75bb3c7ba93b65fda9b5c16e74156b7c",
      price: 12,
    },
    {
      name: "Fried Whiting",
      image:
        "https://www.savorythoughts.com/wp-content/uploads/2019/12/Fried-Whiting-Fish-Recipe-500x420.jpg",
      price: 8,
    },
    {
      name: "Fried Striped Mullet",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/14/3f/d4/69/striped-mullet.jpg",
      price: 9,
    },
    {
      name: "Sole Fish with Butter",
      image:
        "https://loveincorporated.blob.core.windows.net/contentimages/main/rachel+allen+baked+dover+sole+original+image.jpg",
      price: 14,
    },
    {
      name: "Fried Anchovy",
      image:
        "https://www.happyfoodstube.com/wp-content/uploads/2016/04/fried-anchovies-2.jpg",
      price: 13,
    },
  ];

  menu.forEach((item) => {
    const itemCard = document.createElement("div");
    const itemName = document.createElement("div");
    const itemImage = document.createElement("div");
    const itemPrice = document.createElement("div");

    itemName.textContent = item.name;
    itemImage.innerHTML = `<img src="${item.image}" alt="${item.name}" />`;
    itemPrice.textContent = item.price;

    itemCard.appendChild(itemName);
    itemCard.appendChild(itemImage);
    itemCard.appendChild(itemPrice);

    menuSection.appendChild(itemCard);
  });

  return menuSection;
}


/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadNavbar": () => (/* binding */ loadNavbar)
/* harmony export */ });
function loadNavbar() {
  const navbar = document.createElement("nav");
  const ul = document.createElement("ul");
  const homeButton = document.createElement("li");
  const menuButton = document.createElement("li");
  const contactButton = document.createElement("li");

  homeButton.innerHTML = '<a href="#">Home</a>';
  menuButton.innerHTML = '<a href="#">Menu</a>';
  contactButton.innerHTML = '<a href="#">Contact</a>';
  homeButton.setAttribute("id", "home-button");
  menuButton.setAttribute("id", "menu-button");
  contactButton.setAttribute("id", "contact-button");

  ul.appendChild(homeButton);
  ul.appendChild(menuButton);
  ul.appendChild(contactButton);
  navbar.appendChild(ul);

  return navbar;
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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");







function initialLoad(loadPage) {
  const header = (0,_header__WEBPACK_IMPORTED_MODULE_0__.loadHeader)();
  const main = (0,_main__WEBPACK_IMPORTED_MODULE_1__.loadMainPart)(loadPage);
  const navbar = (0,_navbar__WEBPACK_IMPORTED_MODULE_5__.loadNavbar)();
  const content = document.getElementById("content");
  content.appendChild(header);
  content.appendChild(navbar);
  content.appendChild(main);
}

function clearMainContent() {
  const mainContent = document.querySelector("main");
  mainContent.remove();
}

initialLoad(_home__WEBPACK_IMPORTED_MODULE_2__.loadHome);

const homeMenuButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const contactButton = document.getElementById("contact-button");

homeMenuButton.addEventListener("click", () => {
  clearMainContent();
  content.appendChild((0,_main__WEBPACK_IMPORTED_MODULE_1__.loadMainPart)(_home__WEBPACK_IMPORTED_MODULE_2__.loadHome));
});

menuButton.addEventListener("click", () => {
  clearMainContent();
  content.appendChild((0,_main__WEBPACK_IMPORTED_MODULE_1__.loadMainPart)(_menu__WEBPACK_IMPORTED_MODULE_3__.loadMenu));
});

contactButton.addEventListener("click", () => {
  clearMainContent();
  content.appendChild((0,_main__WEBPACK_IMPORTED_MODULE_1__.loadMainPart)(_contact__WEBPACK_IMPORTED_MODULE_4__.loadContact));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFc0I7Ozs7Ozs7Ozs7Ozs7OztBQzFCZjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25CTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsV0FBVyxTQUFTLFVBQVU7QUFDckU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzRE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O1VDcEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDQTtBQUNKO0FBQ0E7QUFDTTtBQUNGOztBQUV0QztBQUNBLGlCQUFpQixtREFBVTtBQUMzQixlQUFlLG1EQUFZO0FBQzNCLGlCQUFpQixtREFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksMkNBQVE7O0FBRXBCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLG1EQUFZLENBQUMsMkNBQVE7QUFDM0MsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esc0JBQXNCLG1EQUFZLENBQUMsMkNBQVE7QUFDM0MsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esc0JBQXNCLG1EQUFZLENBQUMsaURBQVc7QUFDOUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb25zdCBhZGRyZXNzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRlbFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBlbWFpbFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGFkZHJlc3NTZWN0aW9uLmlubmVySFRNTCA9XG4gICAgXCI8cD48c3Ryb25nPkFkcmVzczogPC9zdHJvbmc+QXRhdMO8cmssIDEyMS4gU2suLCAzNTY4MCBGb8OnYS/EsHptaXI8L3A+XCI7XG4gIHRlbFNlY3Rpb24uaW5uZXJIVE1MID0gXCI8cD48c3Ryb25nPlRlbDogPC9zdHJvbmc+MDg1MDEyMzEzMzkzNDwvcD5cIjtcbiAgZW1haWxTZWN0aW9uLmlubmVySFRNTCA9XG4gICAgXCI8cD48c3Ryb25nPkUtbWFpbDogPC9zdHJvbmc+YWVnZWFuYmlzdHJvQGdtYWlsLmNvbTwvcD5cIjtcblxuICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChhZGRyZXNzU2VjdGlvbik7XG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKHRlbFNlY3Rpb24pO1xuICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChlbWFpbFNlY3Rpb24pO1xuXG4gIHJldHVybiBjb250YWN0U2VjdGlvbjtcbn1cbiIsIi8vY3JlYXRlIGh0bWwgZWxlbWVudFxuXG5mdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGgxSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBoNEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcblxuICAvL0FkZCBpZCB0byB0aGUgZWxlbWVudHNcbiAgcmVzdGF1cmFudE5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXN0YXVyYW50LW5hbWVcIik7XG4gIHNsb2dhbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNsb2dhblwiKTtcblxuICAvL0FkZCBjb250ZW50IHRvIHRoZSBlbGVtZW50c1xuICBoMUhlYWRlci50ZXh0Q29udGVudCA9IFwiQWVnZWFuIEJpc3Ryb1wiO1xuICBoNEhlYWRlci50ZXh0Q29udGVudCA9XG4gICAgXCJEZWxpY2lvdXMgbWVhbHMgYW5kIHJlZnJlc2hpbmcgZHJpbmtzIGZyb20gYW5jaWVudCBsYW5kcyBvZiBBZWdlYW5cIjtcbiAgLy9BZGQgaGVhZGVyIHN1YiBjaGlsZHMgdG8gdGhlIGhlYWRlciBlbGVtZW50XG4gIHJlc3RhdXJhbnROYW1lLmFwcGVuZENoaWxkKGgxSGVhZGVyKTtcbiAgc2xvZ2FuLmFwcGVuZENoaWxkKGg0SGVhZGVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHNsb2dhbik7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IHsgbG9hZEhlYWRlciB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBjb25zdCBob21lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gYEluIHRoZSBoZWFydCBvZiBCb2RydW0sIHNldCBhdCB0aGUgbWFnbmlmaWNlbnQgcGxhY2UsIG5lYXIgdGhlXG4gICAgY2FzdGxlIG9mIEJvZHJ1bSwgdGhlIGV0ZXJuYWwgZ3VhcmRpYW4gb2YgdGhlIHJlZ2lvbiwgYSBydXN0aWMgZ2VtXG4gICAgYXdhaXRzIHRvIGJlIGRpc2NvdmVyZWQuIFRoZSByZXN0YXVyYW50ICdBZWdlYW4nIGxpZXMgYSBmZXcgbWV0ZXJzXG4gICAgZnJvbSB0aGUgbWFpbiBzcXVhcmUsIG9uIG9uZSBvZiB0aGUgbW9zdCBwcml2aWxlZ2VkIHNwb3RzIG9mIHRoZVxuICAgIGNpdHkgaW4gdGhlIGFybXMgb2YgdGhlIHdhdmVzLiBUaGVyZSwgdGhlIGNoYXJtIG9mIHNpbXBsaWNpdHkgd2l0aFxuICAgIHN0cm9uZyB0cmFkaXRpb25hbCBlbGVtZW50cyB0cmF2ZWxzIHlvdSBpbiBhIGZlYXN0IG9mIE1lZGl0ZXJyYW5lYW5cbiAgICBmbGF2b3JzLiBXaXRoaW4gZWFzeSBhY2Nlc3MgZXZlbiB3aGVuIHRoZXJlIGFyZSBwaHlzaWNhbFxuICAgIGRpc2FiaWxpdGllcywgaXRzIGhvc3BpdGFibGUgY291cnR5YXJkIG9mZmVycyB5b3UgdGhlIHBlcmZlY3RcbiAgICBlbnZpcm9ubWVudCB3aGVyZSB5b3UgY2FuIGVuam95IGRlbGljaW91cyBkaXNoZXMgb2YgdGhlIEdyZWVrXG4gICAgY3Vpc2luZSwgcHJlcGFyZWQgd2l0aCBjYXJlIGFuZCBsb2NhbCwgcHVyZSBpbmdyZWRpZW50cyBhbmQgZnJlc2hcbiAgICBmaXNoIG9yIG9yaWdpbmFsIHNhbGFkcyB0aGF0IG1lZXQgdGhlIHJlcXVpcmVtZW50cyBvZiB0aGUgbW9kZXJuXG4gICAgaGVhbHRoeSBkaWV0LmA7XG5cbiAgaG9tZVNlY3Rpb24uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICByZXR1cm4gaG9tZVNlY3Rpb247XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZE1haW5QYXJ0KGxvYWRTZWxlY3RlZFNlY3Rpb24pIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb25zdCBwYWdlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2VsZWN0ZWRTZWN0aW9uID0gbG9hZFNlbGVjdGVkU2VjdGlvbigpO1xuXG4gIG1haW5Db250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbi1jb250ZW50XCIpO1xuICBpbWFnZS5zcmMgPSBcIi4uL3NyYy9yZXN0YXVyYW50LWltYWdlLmpwZWdcIjtcbiAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwic2Vhc2lkZSByZXN0YXVyYW50IGltYWdlXCIpO1xuICBtYWluQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tY29udGVudFwiKTtcbiAgcGFnZUltYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGFnZS1pbWFnZVwiKTtcblxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChzZWxlY3RlZFNlY3Rpb24pO1xuICBwYWdlSW1hZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBtYWluLmFwcGVuZENoaWxkKHBhZ2VJbWFnZSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuXG4gIHJldHVybiBtYWluO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb25zdCBtZW51ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiR3JpbGxlZCBVbWJyYVwiLFxuICAgICAgaW1hZ2U6XG4gICAgICAgIFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBb0hDQllWRlJnVkZoVVpHUmdhSEJnWUdCa2NHaGdZR2hnZUdTRWFHUmdZR0JvY0lTNHJIQ2NyTFJrWUpqZ21LeTh4TlRVN0dpUTdRRHMwU3k0ME5URUJEQXdNRUE4UUh4SVNIakVySkN3eE5EUTBOREUwUHpRME5EUTBRRFJBTkRRME5FQTBORGcwTkRRMU5EUTBORFEwTkRRN05EUTBORFEwTkRRME5EUTBOUC9BQUJFSUFMY0JFd01CSWdBQ0VRRURFUUgveEFBYkFBQUJCUUVCQUFBQUFBQUFBQUFBQUFBRUFBRUNBd1VHQi8vRUFEa1FBQUlCQWdRRUJBVURBd1FDQXdFQUFBRUNBQU1SQkJJaE1RVkJVV0VHRXlKeE1vR1JvYkZDd2RGUzRmQVVGU1B4UTJJa2dxSUgvOFFBR1FFQUF3RUJBUUFBQUFBQUFBQUFBQUFBQUFFQ0F3UUYvOFFBSkJFQUFnSUNBd0VCQUFNQUF3QUFBQUFBQUFFQ0VSSWhBekZCVVNJVE1tRUVRbEwvMmdBTUF3RUFBaEVERVFBL0FQWkk4aURIZ0E5NDhqSHZBQjRvMTQwQUhpdkdpZ0FvOTQwVUFIdkZlTkZBQlNMUjVFeG9DRHdXckNYZzlRU1pNdUpuMW9LME5xcVlNeUdZeTdPaUk5S0gwSUZUV0cwUktnVElOU1hMS0VNdVV6WXdraXdSNUdQZUlrZU5lSzhWNEFLOGVOZUs4QUhrWW94Z0FqSUdPWkZqR1VpSmp4cnh4RVVQRkd2RkFSS09ESTVvNDFnS2lWNHJ4c3NSRVZpSlhpdkttZVJMeE9TSGlYWm8yZVU1bzE0c2g0aEdhTVdsRjRzME1neExpOGJQS3J5SmNEbkRJRkV1THg4MG9GUWRZeHFReVlZbHBNcmFWdFdIV1VOV2tTa1dvazN0S0hBaVo1QlRlWk9UWmFSSVMrbThHWTIza1EzZUNrMFUxWnFJNGw2dE1kYWg2eTVjVVpwSG1YcG5LQnE1bzk1bC93Q3JNbU1aTC9saVIvR3pTdkZBa3hRTUlXb0pha24wUzR0RnNVaG1FZk5HS2h5WXhNUk1nVEdDUTVNZ1RISmtaTmxKQ2ppTkZGWXlVVVY0bzdFUmtsYTBIOHd4czB5YzJ5c1FsNm81U3MxQ1pWZUs4VGJZMUZJbVRHdkkzandHUGVLOGEwUUVBSHZGZU9GamhZQVFaNE5pY0ptSHhFU05mRTYrZ1pyYm05bEhhL00rMHVvWXhYSFFqY0hmKzhqSk4wSzZNS3ZoSFM5NmpaZmZhU1hpeW9ucU4rL1dGOFh4Q3FqbHRBQVNUUEtIeHhxRWhIOUJ1TjlvWlV3azAwZGVuRnFwck1ScW5MdDdkWm9WT08wbHNvZTdjOWRmcE1uQzBmOEE0NEFheHRZbmN5aHVEb05XWWx0TmRacFQ3WTFYMDZuRFl3dmJwQzZOYkt4dVBuT084ODBkcWdZRGx2YjN0Q200dytVUFlGT1p2ZUNsSHhDYWZodjQrbTlTNFZyUUxEVTZ5SVZjM1BXWTJQeDc1RFVSeHFOQmYrOEs0UHhKM3BxWFlaanB2KzBxbExWQW0xczAzNHdpWlVOOHg3WG1wVGJNTHdURDRaRkJkaXBhR1U2cXNOSmh5UnhleTR5eTZKV2l0SEVlMGdzakpMVUk1eG9yUjdRRm94RFIxeFo1eWkwVWVVbDZMRkJ5WXNHRUs5NWtXazBxRWJTMXl2MGh3K0dxWkdVMDhRRExBNE0xVWt5S2FKeFJDS01Rb29vcFFnV0tPaUdXclNtRkdsbFFFa0JMSHNKUzFTQUoyVHRKZzZiZmo5NE9ha1FlQ0V5WmMvMGZjUnZNZS93RDV0L2FQbWcySnhXeXFkVHVlZzVtRGFYYkZUWW54Rlc1QVZkTnlEZTNiVzJzRHhPSnprSUtqb2YxTWJJQi93Q282ays4blZ4TEJiS2hzUHYvQURIdzZaUlo4b1k2a25XNTl2dE01U0J3L3dCSUpoVnloRnFHdzZXZ0dOcUdtUlo5UWROaVBhQWVKZURVNnh6a09oQkdaa09YVDI1eURuMW9oYk10ckJqb2RPcDV6S1ZlYUsvanRBSGlPcFVyM3VTRXRjZ2R1czRiRkFJRUNYQU84OURxaStjMjlCSlVhL0Y3VGtlTDhPQmNEUGwwR1c0MFlkajE3UlJsdW1acVc5bGFMWHlxRWMyWTVyWDZkUk41ZU1aVXkxeVNiYnF2eGRyaUQ0ZkNFMDdLTE1CcWVna2FlT1FBcTdLQ2w3NWdTcmRBTFRiam5rNlpvMWF2d2podUpJWDlDNmJzRzVqbnJGWDRpb1Z2K01oRG9MRWZpRGNNd2hxMXlTbGs1NVN3SFlyMW10eEhBaklRaTV3UC93QW51TjV1b05LMERrcnBoZkE4RmgvSTlUM3phalhhRjFlRW9pZWc2MnZmZVl2RGNSV3BJRlREclVVazVnUllIdUw3SHROQVl2YXBUREl2d3VqcjhIVWpxUGFXdWpOOW5PTlV4Q1BtekZrdnFMNmZTZEp3N3hLcUQxQnNvMzBPa0N4MkZGUzdJUmJuYTVIMm1IakVya0ZVK0EyR2c2ZHp0TXBSdlROYjlQUk1IeCtpN1hEaXhFMVZ4NmNpTEdlSjhQNGZrcUhNN0tScllBbTQ1NnpwOEZ4c0o2RDYwR3ZSaDdYblBPTW83UnBHcEhwWVpXT2tpd3NiVG4rRGNTbzFBekk3QWpRcWVVTmJIb3BzVzFrNU5MWVltbEZLUTlwWXJTN0NpVWEwbGFOR0JFaVNWeU9jVWEwQkJOSEVIbkRBMTVsWGwxUEVFYWNwcENmaklsSDRIM2lsSXhLOVlwdGt2cEZNSXpEbEtLdGZ2SjFEM21aaUcxdE1wU3JSVVkyVHJWcFY1c3FZeGxtZVJlSmVIa25yQlJlNGxWVzJRam5CY05oeVZ5TWJqN3hTbFNwQkdJUjVqUDhBQ3drS09GZTVZdU43ZTF0cFRYV25obEx1NFZSMTNQWURjem1jVHhwNnJsa1VxZytFZGU1SFdZM1hhTGUranJhN2dGVnpaclhiNld0ZjYzK1VoNXZUVXpsS25GblhWd2RyUzZueHBuRmszZ203MENpdlRWeDFjMkk2em1jWldJMC9wM1A0dEUzRVhMRU5wYnZJMWd6aXcyNW4zbWNrMjlqNUhVZEcwaW9Vb0lwdXptNUozc05TTzA1ekg0WW1zMU8vb1VsenBleEdsZ2U4dHBzYU5SQ0NUbEJOcjN0ZVdtdmxlNUE5WkpZODlSNlplVVpWUnh5aTFzTDRGaXFiVTZnUXM3cmU2a2FrZEFPZ21XbkM2b0FydW9MNW1HVUFaY3ZJMlA3enNQRDNENklYekZRQjI5TEhxSnJWMENQbXkrbHJBOW0yQnQzMm16L05PSnJCK1BvNEhBOFl5VlFXQlJXWUtWREFGZEQ2MEdvSTJ2Y2ZPZE5ReHV4WXE2UFpsY0t1Z3NiNXdUYmx1RHoybk9lTU1DeUJhbE5Vc013T1pjMXRqcG9iYzlaeW1JeERzYzdVS1l2bEtaQ2pnNU1veTZrbGIySnVmYlc4M2h5U2FzVW9SczlKeCtLdzVGbnJVMGE1WUVOYjAyNkJpTzQ2OUpYaDhYVHFJVW91bFJsT3JGV0llK21lOXR2YlNlWUhGVk1RVkMwbHlKWmJnSE5sNWFtNUo1NkEyMTB0Ti9oVFlTa0VxczFYT2g5U2VwQ0xXT1d3ZXhHdCtXNXYwbXFsOUljZmgyV0p3NFNpV1ZGemdYQXNVSGMyTy9PQVlHb2E0QkFWRUlLbFdGc3dCdG1SdWN5Y1J4akRWM1IzUndnekR6RlpzNk1wOUR1VjlJVTNBSUY3ZDV2WVBGWWFubHJCTGxpUXFyVXpzRHBteUpiWGZXMjBMVGVncWxzcngvQWdWQ29TZVpGLytSQmJjRWJqVDd6bThQZ2FmbHRrcVV5K1lnbG55TXRodGtPdlhYbk93eE5TamlRaWpFTlRZbk5yNktvNWxBZWc1ekM4V1l2QzBrQUNVcXIzSHhBRmlWMHU1QTArZlc5NFNqRm9jWk96SXAxS21GY090amNhaS9wY2ZMOHp1T0U4YndPSktabEsxTkRadVpISVczbms5S3NTenNpNVV0b210dGVrdndkRmhad2JFRzQ3RWF6a3BSYk9tc28yZXVjUnhBTlQwdDZScGw1KzRsdUZ4YU1TTDZpY2pnOFIvcVZCUnN0UmJYVW5uMUhVR0Q4VjRsV3c3SVdRald6a2EzN3pQSnR2UTZTUjZFdFhXRUltWVhFNVBBOGNSOG9CMytzNkduaWpsQTVRaklVbDhDbVNSQmwxQ29DTlpOOFBjWEUxcStpTXE3QnJ4V2ljV2l0ZUNDeFpSRkd5eFIwd3NLeDcyMG1ZeG1samw5WHltZXlXaE5iSmk5REVTOWFxVzd5VkpWeXNTZGRiZnRBYW1HY2k2eVUzNFU2SnV3WnJENTlwelBpSHhuVHc1YW5od0hyWHltOThpSHFUK285aENQRXVPZFY4dEFWdVBVMng5bC9tZWZZYkEzeENYQnRtMVA4QU15VFRsc3ZGMGRUd25obGJFQVZNUTdPZHhmWVg2RFlUcnNOdzFWRmdzS3dDSUZVQWpRQ0d2VUFHazB4WFpOdm81bmpsTkZXeEdwbkc0akRPbnJTNDlwM0hFbFUzWnlMN0NjOCtEZHI2MlR2TXBOUlpyRldqRXd6TTdBSFdhMkJ4eWV0Tjdla0RxWUppNm5rbGNndUwyTFcwRXh1SzF5bGlscmszWTdhbjlwS2pLVEZ5TlJkR29IRmlTZldDUTNmcEJPSzRvZ3FRTkxLVDJJRUZTdUdzU2RlWi9FZXNqZVVRZFdxSE43QWFDM3VCQlF4bFp5Y2owa2RkNFJ4QmQwY3NUY1hPdGg5SjJ1SmNGQ0xYRERsUE1PQ2NSU2dSNXBzZ1FiYTNKMDVUMG5ETXJJaFQ0VFlyN0hXYlFUcGhGa2poTHBsWmJpMnQrZmY1enlmL0FQb0hDUEpxS3lDeU11dHIyelgxdDAyVXoyTWszc0xXSTE2L0tZM2lMaENWME54Nmw5U0hvdzIwbEw4dTBhcjR6eW5oR0lVcWlWV3FaTEJWeUF0bXVDQXdMdWRSYTV5V0FLcGFHY1pxVVhlblNxNWtkVnlpcXJrc3dOeVE2czdrWHViQW00MDBBMnpNVm1ZNUhwRVZTeWt1ck5sM0tsblJiZ0hiVUFHd2crUDRSV1Erb044VmxaVWNKY245QktqbnR0T2p0YUphcG1sL3Q5Um1DNGFxcm9NaUZYcUtqRm51UFJtQXQ4T3R0UWVSdUlrNHFpS0d4TlAvQUpBd3VVU3BSWkdCdXdxNlpYYzZHd3Q4SnVkb3NCdyt0bFY2dUZxMUtXY2g4bEl1U1ZCR2E0Rm15bTR0bVhYTU5ibXh2RU1kaDZ6WkRocXJ1eERNZ0JSMnVBRktLdVhLdHdCcVRiVDRyNk5LdXhOMnhuOFUxbHpVc1BYeksxeWpFWmlxa3RzR0ZodVNjeE80M3RNemhHRVN0VkNZbG5VdVRreW9Ubkl2bkNnQ3dJSTFOd0JOV3I0YXAwYWR4NWpWbjFYREprYW90cmxscVZiTXFnRHFMNmJYTm85UDBZZklSNVR1ek01cHZkOHAxUkNjcEJBMXVGSVVscm5jV05wL3JvZHF2eXRteTNEc0k0RkNtVnBWS2ZxSXpLV2NBQTJMSFROcjhKMXZ1SkxFY0xwT21lbGtSMklBUm1DOXJEMUVFblE2SG1PczRkK0ZPakt5T2N5bTZsbHNPb3p1am14MkcydmFXcnhyRTNYelNTYlc5YWdxVjF1dVN4RERwcHBjOWpJY29TK0RVWnI2YWVKd2hCSkYxZFRyWTJzUjdUWHBZcHE2QlNjenFMTUR1ZVY1eTlEaTd1U1hBdmZjQUtQWUJRQkxNNUJ6b3hCM3VKeXlUVG82VXJYK21wVHdHUjh6c3k1ZFFPVTlBNGJWem9wSFFUaU1KeEZNVWdwdXdXcUJZRTZaL2IrSjEvZ3krUmtiZW1iZnhhTkxlekhhYk9nb1V0SVJTZUExcXhKdHRDOExxSnJIdlJFdXRsdGFuZmNRSWl4bW9xeWl2aHh1czBsRDFFeGtWREVuK21LVTJpazVNcWtFWTBuTVlPeTM1WGhtTVhYTktVc0xHT1Mzc21QUlV1R1luWWdkOUpaaXNZbEpkWVhYckMyazVYajdNOXNvMkJNbmthNDQydXlvTE4weks0bmpQUGUxZ0xUTFJGQnVMZThwODRzeDBOK1JsK0dvTXA5UW5CSnlmNmZwMnFLV2pVd3ZFY2xzeG11bU1MNkpwM25MMTZKZmI2OUpabnNvUkt1UjdmcStFbjM1UlI1SzFZcFFTVm0xWFdtbnFxTUNSdE1QaXVOVi93QlZnTmdQM25PWXluaU01enNTMzFIdUpVS2IvcW1xa3EwUmo3WnNZbkY1MENLTDYzMDdUTlBDNnBOM3NRYitrOGg3eXpoNytWZk1ScWJnbUd2eGJQNkthNTJiMGkzUHJLakt0SXk1RXF0bU53L2h5aHpyNkFPZk0zc0lQeFRHNVdLZzNLb2JlMndodU94U3FHQ2tFZ2hGeTdYUHhOOGgrWmo1VFozM3NBQjE1U28yNVhJNVgzWWtRK1NyMUNScmxPbHpZbmVleThEZFRUb2hXdW9VV1B5MG5pbExGazAydS9yTHFRRDBISUNkejRNNGs2WlEvd0FKM0g5SjZpYXR0TC9MTkl4YlBVRlVYdnp0YUNZOThxTWJYSVVtM1d3dmI3UlVzVXBBc1FiOCtzaTdoaVJwMzl0b05vcEk4aHhQaUhGVWtha2ExUEsrNkFLVHJyWXF3c3VwMk15YTNGS3hRbDFkZ0Q2bU5PazlOT1E5SlFqa05icjhWaDFuZThkNE5UUXNXUytZL0ZjSFRmN0Q4VG1hL0FGQlBsMTJRTmZNdXVVMzZxQ0pjZVh4bE9LN1FFM2lSaTZJanBUVk02bGtwQlJXR2xrTk5MMnVWQVcxZ3R5Yjg1MEZMeE1yWWZMNVRyaW1SZ1NBVUNGU0ZVdlV2bllINGJYRnRiM05qTU52REtMdTVQT3dGdnJhYTJDd2ROTFpWKzF0dVViNVd2NmlYR24yVVlVNGgxQ09VdGRjekJGVnlGMHkzV3dJNlhCSUhPYTFEaDZMYTQxNW5yek56eitjUzVqZXdzRDh6SnRoeUZHWWs5cHpUY3BmMlp0R2wwUXhXSFEydGJmbE03SDhQUWNyazZqbmFiOUJGeTVzb0FHdHo3YjZ3REdZbFNDYzNzZHZwMStVeWNVdG8waTJjcDVLTzVWZDFKWHRtSWxLc3d1ckR0REtmRHdLaHFNNUNnaGxHMllqbWVuTDZTVDBEVVlzTkFacm10SmZBY1h0c3hrVSthdXBIUTlEUFkvREtNdE1NeHV4R3A2Kzg4MlRBWE4rWTJucEhoMnNUUkY5eHBOSXRTMFlTVGlheEdzTndkNEFsUzBQd0NzZlZ5Mm1zYVJsSTAxU1Q4b1JsTXRCbTlHTFptMWFHcGpRMHhTY1VQSmlxcHpBbVhWVFhwZjZmS2JBYnJCOFJoZzMrZmlFbzNzY1pVQllaeVZLa2JUQzRuWFlnNUxYSExZbjJtcFdxbW13NXlyaUhEMXFnTXB0ZlcvUXptNVl0eHFMMmpvNDJveXQ5SEZBZXZLVnlzcE9ZY3dlY3NZdTdtL3BRRFZqdWV3bW54U21pVzBHYzZsdnpmcmVjeDRoeDdCQ2lYMUdwNlRnZHFXTE8xZnBXZ0hpL2lvVTJ5VTFEQWFNYjZYN2RaZzFmRXptNENEVTdubEFUUXZ2cExjSnc3T3dWZDUxUmp4eFcwWnlVbjBIWWZ4QlZiMGxBNDdBM0VqaTZ6MWlNdFFoZjZEb1Y2Kzg2ancvd2tVQVNUZGp2L0FtWngvQVpuenFtVTczMnY4QUlUSmNzTXZ5cUpsd3lTdFBZTnhLbXEwbHkzWnIySTNPdWtwT0taQVVwQWcyOWJuUXFEc0ZBMitzcHBZdFNNamFtLzM2elNGTk1pSXRocmR0eVg1Nm1hcDB0bkswMy9ZR2ZodnBSUVNDcTNKN3ZxeDk1YWFRUmJBMzIxOXBuY1Q0Z1dCUkNReFB0WVNuQlZXUkN6Tm45UUdYbU84YWpKeHN1TVY4SHIwUm56Z2JuVUFUck9FWHVweTJBM015Y05pa09VMkd2WGw3ellwNHJJQ0ZzYmo4OUlwTjFUTlZGTG90eHZFMlc2cXpBbTVzQ1JicG9JTHdYaldLcHVia09oM3prM0E3R1RTa3B1eDNQWDk1ZmlLeWtnSlRGbEZzMTJzZTV2dWZrSktsaWh1Q1pvY1o0d2xSRkxqSllqZlVjeHAxMzZRS2hqNlNnNWkzdmx1TGZQYVllT1FrNW1KTnRoeUhzSUUxTjJZNW1CUThyRUg2MzFsUmQrZzRWcWpwWDRqVE44b0pIWFNWUGoxR29QeXQvTXdWd2RnTXBLQS9TVk1qWHlzMnZjNzk0Tlg2Q2lhMks4VWltTHBTTFd0OFRBRDVXQm1iVjhhdXhBOHNJT3F0bVAzQW1MeGFtVklZbTZuN0dDMHlwbTBZUnh0N01aU2VWSFNweFlWaUY4eDduY0RUNnkxTUJybU5SdmNuWDZtYy9oZlE0ZFRyS01aaVhkdlV4UGJsRStPM1NMak5wYk94U25STzlRRzNlU0ZSQWZTd3RPSXBQYWFHSHpIYTh5bHc0K2xya2JPbi93QlVxa0FibWRWd1RGK213bkY4TndHWWdtZHRnTU9FVVNZOTZDWFd6ZHc0ekdiZUJ2MTBFd3NBY3hBRTZmRFVjb25aQ05uTEowWENLOGtxUnpwTnpFaGFLTFdLS2dzdXRHdEdVamtaSy9XTVFKaThJdFFXT2g1SG4vZVlicTlETXJETWg1ajhpZE5hOGhWcEJoWWk0bWM0WHRkbHduanJ3OHl4NUxhSGtTUmZlWTJPb1QwUGluQkZiYlRvZjVFNWJpSEMzUUc2M1hxTlI4K256bmk4M0RPTXJQVjRlYUxWSEYxOE1wNVIrRkprZk4ydENjVGg2dWU2WlF2TUVhbjV5dDZ5SWRTQWIyc1k3bFZkMmJKeFowQ1lnQWIvQU9kNER4R296Z0tvMWU0VFRROVRmdEFLdUpQS1c4SERzNUxNU0JzdDlCZlhRU0l4cjlGU2Q2QkY4Tk9welpReDk1bm1rMUs0SllGamxKUExrU0JPOHprQ2NwNGxmTnNOYjZkWnJ4YzBwU3hrYzNMd3h4MFlEWVR5MUpMWE45Sk5IQVJnZml1TlR0QjZvWmlMbmI3U2RTbTJtZ3RhMmczMDV6dnY2WlJxS3BJaWxVNXRQYWFpWWhnTGcvWFdDS011aFhXMy9jc2VpU29BTmhyL0FJWW0weHBlc3UvM0JpUVRycU56cDNuVVVzUWhVV1lhaTQxM25BV09iS0QrUmVIb1JZQmIzR3AxL0VpWEduMFZGMmRMaXFkd1RNaFdPZFYwc1RZa213QTZ5NFZicURtTnlMSDJnVkpDeEEwelhKM3NOTnBrbzEyVTluV1B3OUNnQzcyK0xuZVlyMHZiTXB1RGJtT1J2eW0xaHEzb0FJc3dFeDZyak9TT3NTYnNWR1Z4dHk2dVNCbUp1ZE9jd0tGTWpjV201eEo5d09aZ3lKekl1WjB4bmpFdzVPTEtWZ3owOUFRWlI1SjNtb2FCSnZhWDA4SmZsRi9Na1V1TUN3bEljMXZOckQ0ZTQyOWdJc1BndTAzc0ZnTDJGcGhQbGN0STBTUzdMdUE0SE15NXRCZlgyblNOaFRueXFEYjlwWndYaEw4bHR0cWVVNjNCWUZVSFZ1Wi9pYjhQRTJyWnpjM0lrd1BoWEM4Z3UyL1NhOGNMSkFUc2pGUlZJNVhLM1pHUmFPemlWT3hsRWpab3BWa01VV1RLb0l6QXh3VHlONWlZSGo5S3BZRTVXNkgrWnJLMTlRUWZhU3BxVzBEZzR1bVc1eHowa0ttSUM4N3lxdXBZV3ZBbW9NT1YvYldLVW11aHhpbjJQV3JGaktqRkZPZVZ2Yk9oVWdERjhKcFZQaVFBOVY5Si92OEFPY3Z4VHdRR1pXUndjdXdhNFB5SS9pZHRhTVprK05OMlVwdGFQTzhUd09vZzFRKzQxSDFFQW9JNk5lMms5U3RLSzJEUi9pUlQ3Z2ZtWVMvNDcvNnM2SS84ajZqaEc0a0FOUWUwNXZpamx6enRxWjZmaVBEMUZ0Z1Y5ai9ONWxZandnRDhML1VmdUpFZUtVSGRXYVBtakpVZWEweWhiSVlhWFZSWUxjOTlmYTA2dXI0UGNHNENINTJQM0VFcStHcXcvd0RHVDdGVCs4MGxLWHhpaTQvVWNrNGR1ZXhPbnZ2Q25VK1dUcGMydk5XdndHcVAvRy95VW1VTnd1cUZ5bEhBNWVsdng5WlNtRFM4TUtuUUtlczJPWUd3MzA3OUpORnZzUGtiZm1HVmVIdUwrbGhhMWhacnNPeEF0eTdRZnludm9yWEczcE90OTc2VFpTdlpGVUNWYTV6QVh0MXQ5dG9maHFCTmlOOStkeHlzZnpwMWl3M0MzUHFLTVNmL0FGTTFjSHcycVAwT2YvcTM4VE9jMTBpb3IxZzNtUGJLejN0eXVBU1BlUmI2VFdYZ0ZaamZ5bStkaCtZWFM4TVZUdW9IdVIrMHl0K0l1NHJ0bk0xS1FZQUFYNWs2L1MwdW80QXpyNkhoa2o0blVld3ZENlBBYVkzTEg3RDdSMXlTOEljNG80NU1BQnZORENjSmQvaFFudmF3K3BuWDRmQklud29QZTF6OVREVkVxUEQvQU9tWlM1ZmlNREJlSGJhdXc5bC9rem91RzhQUUd3SDhuNXhCWmJUT1UzRTZJeGpId3hsSnRHL1FwQlJZQ1hUSFRIa1M1TWQxblVweE9ad2thQmVWTThxUjh3dnlqbGdOU1FCSFpORTVDdldDaTUrbk0veEFNWnhaRUJzZm5PSTQxNHMxSVM3SHJ5SDh5SlM4VzJhUmhlMmRtM0dPd2pUekgvZkhPNGFLVFUvcFg1TmEvYUZZYmlWU244TG4yM0V6YWJucEx3Yjgvd0I1eVJiWFIyeVNmWjFHRjhVOHFpZk1UWXczRktUL0FBdVBZNlR6MG5yRUd0cU4reHROVnpOZG1FdUdQaDZXeUJ1UVBlVlBoK2grczRiRGNZckpzeFBZNnpXdzNpby9yVDVpYUtjWkdiNDVMbzNtUTlKVVpYaHVPMFhzQ3dIdkRGckkyekE5TlkzRlZvVnRkb0Z0R01NOG9HUU5BU2NRc0ZNVnBjMkg2R1YrVTBXSThpQkVRamxEMGpHTEVlUkpZOXBXREh6R0xFTEpPZzZDVUdtT2tzTEdSTUtLc2dWRVlyTERJa1FvTElSbVdUeXhzaGlwaFpWa2poWmNLUjZTYTBPNGpwaFpTRmtoTGlnSE9RTEtJNkZZbEVrRmxiWXBGNmZPQjRqeEhUcC9yVVdqMEZNMUZvdDB0NzZTWlZGK0poN0RYOHppK0krT2svU1MzdHRPZXhYaTJvK2krbjh4NWZBd2JQVE1YeHRFR2hBN2t6bU9KZUxBYmhUbVAybkNWc2E3bjFNVDdtTWp5WE52czBqeHBHeGpPSlBVUHFiVG9KVFRiNlFFdDd5eFhQTzRoR1ZkRGNWNmFYbkNLQjU0cGViSXdqOE5oSzNYZVdneFJUak9saUxTR2IyK2tlS1dTeEJ1a1k0aTI0aWlnQkVzRC9oaml1NjdFajV4b29KZzBnbWp4NnNtdWEvdkRhWGpGLzFDOFVVMGpKbWNvUkRhUGk5ZWFtSDBmRWxKaU4rK2hpaW1pYk1uRkJBNHloTzUraGxyY1JRLzlHS0tOaVJIL1ZML0FKZU9NUUk4VVRBc1RHS0FkT2taOGN2VDdSUlNmUVJGY1N2K1hpT0xVWC92RkZHQ0E2M0ZFSC9SZ3JlSVVXK3YyUDhBRVVVQ2tnQ3Y0cVFjejlETXpFZU5rWFlNWW9vRFNSbDF2SDUvU24xbVppUEdtSWJhd2lpZ2htVlg0elhxZkU1K3NGYW94MUxFeG9vTW9tZzd5L3l5TzhlS0pqSktlMHZRaUtLU3l5d0czT1dLNTZ4UlJNUlpjOVlvb29BZi85az1cIixcbiAgICAgIHByaWNlOiAxMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiR3JpbGxlZCBQbGFpY2VcIixcbiAgICAgIGltYWdlOlxuICAgICAgICBcImh0dHBzOi8vaS5ndWltLmNvLnVrL2ltZy9tZWRpYS9hMWFmYWY5MjdiODRmMjFkMTZmMGY3ODAyM2FkMTI5M2Y3MzhjOThiLzBfMTgzMF80ODIyXzI4OTEvbWFzdGVyLzQ4MjIuanBnP3dpZHRoPTEyMDAmaGVpZ2h0PTkwMCZxdWFsaXR5PTg1JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnM9NzViYjNjN2JhOTNiNjVmZGE5YjVjMTZlNzQxNTZiN2NcIixcbiAgICAgIHByaWNlOiAxMixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiRnJpZWQgV2hpdGluZ1wiLFxuICAgICAgaW1hZ2U6XG4gICAgICAgIFwiaHR0cHM6Ly93d3cuc2F2b3J5dGhvdWdodHMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEyL0ZyaWVkLVdoaXRpbmctRmlzaC1SZWNpcGUtNTAweDQyMC5qcGdcIixcbiAgICAgIHByaWNlOiA4LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJGcmllZCBTdHJpcGVkIE11bGxldFwiLFxuICAgICAgaW1hZ2U6XG4gICAgICAgIFwiaHR0cHM6Ly9tZWRpYS1jZG4udHJpcGFkdmlzb3IuY29tL21lZGlhL3Bob3RvLXMvMTQvM2YvZDQvNjkvc3RyaXBlZC1tdWxsZXQuanBnXCIsXG4gICAgICBwcmljZTogOSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU29sZSBGaXNoIHdpdGggQnV0dGVyXCIsXG4gICAgICBpbWFnZTpcbiAgICAgICAgXCJodHRwczovL2xvdmVpbmNvcnBvcmF0ZWQuYmxvYi5jb3JlLndpbmRvd3MubmV0L2NvbnRlbnRpbWFnZXMvbWFpbi9yYWNoZWwrYWxsZW4rYmFrZWQrZG92ZXIrc29sZStvcmlnaW5hbCtpbWFnZS5qcGdcIixcbiAgICAgIHByaWNlOiAxNCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiRnJpZWQgQW5jaG92eVwiLFxuICAgICAgaW1hZ2U6XG4gICAgICAgIFwiaHR0cHM6Ly93d3cuaGFwcHlmb29kc3R1YmUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzA0L2ZyaWVkLWFuY2hvdmllcy0yLmpwZ1wiLFxuICAgICAgcHJpY2U6IDEzLFxuICAgIH0sXG4gIF07XG5cbiAgbWVudS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgaXRlbUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICBpdGVtSW1hZ2UuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtpdGVtLmltYWdlfVwiIGFsdD1cIiR7aXRlbS5uYW1lfVwiIC8+YDtcbiAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuXG4gICAgaXRlbUNhcmQuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgIGl0ZW1DYXJkLmFwcGVuZENoaWxkKGl0ZW1JbWFnZSk7XG4gICAgaXRlbUNhcmQuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcblxuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGl0ZW1DYXJkKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1lbnVTZWN0aW9uO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWROYXZiYXIoKSB7XG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIGhvbWVCdXR0b24uaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIjXCI+SG9tZTwvYT4nO1xuICBtZW51QnV0dG9uLmlubmVySFRNTCA9ICc8YSBocmVmPVwiI1wiPk1lbnU8L2E+JztcbiAgY29udGFjdEJ1dHRvbi5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNcIj5Db250YWN0PC9hPic7XG4gIGhvbWVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lLWJ1dHRvblwiKTtcbiAgbWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnUtYnV0dG9uXCIpO1xuICBjb250YWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdC1idXR0b25cIik7XG5cbiAgdWwuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gIHVsLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICB1bC5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKHVsKTtcblxuICByZXR1cm4gbmF2YmFyO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2FkSGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgeyBsb2FkTWFpblBhcnQgfSBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQgeyBsb2FkSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgbG9hZENvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgeyBsb2FkTmF2YmFyIH0gZnJvbSBcIi4vbmF2YmFyXCI7XG5cbmZ1bmN0aW9uIGluaXRpYWxMb2FkKGxvYWRQYWdlKSB7XG4gIGNvbnN0IGhlYWRlciA9IGxvYWRIZWFkZXIoKTtcbiAgY29uc3QgbWFpbiA9IGxvYWRNYWluUGFydChsb2FkUGFnZSk7XG4gIGNvbnN0IG5hdmJhciA9IGxvYWROYXZiYXIoKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdmJhcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTWFpbkNvbnRlbnQoKSB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIG1haW5Db250ZW50LnJlbW92ZSgpO1xufVxuXG5pbml0aWFsTG9hZChsb2FkSG9tZSk7XG5cbmNvbnN0IGhvbWVNZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLWJ1dHRvblwiKTtcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnV0dG9uXCIpO1xuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdC1idXR0b25cIik7XG5cbmhvbWVNZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsZWFyTWFpbkNvbnRlbnQoKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChsb2FkTWFpblBhcnQobG9hZEhvbWUpKTtcbn0pO1xuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsZWFyTWFpbkNvbnRlbnQoKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChsb2FkTWFpblBhcnQobG9hZE1lbnUpKTtcbn0pO1xuXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsZWFyTWFpbkNvbnRlbnQoKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChsb2FkTWFpblBhcnQobG9hZENvbnRhY3QpKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==