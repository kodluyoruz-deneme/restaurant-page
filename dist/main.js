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
  h4Header.innerHTML =
    "Delicious meals and refreshing drinks <br>from ancient lands of Aegean...";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFc0I7Ozs7Ozs7Ozs7Ozs7OztBQzFCZjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25CTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsV0FBVyxTQUFTLFVBQVU7QUFDckU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzRE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O1VDcEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDQTtBQUNKO0FBQ0E7QUFDTTtBQUNGOztBQUV0QztBQUNBLGlCQUFpQixtREFBVTtBQUMzQixlQUFlLG1EQUFZO0FBQzNCLGlCQUFpQixtREFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksMkNBQVE7O0FBRXBCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLG1EQUFZLENBQUMsMkNBQVE7QUFDM0MsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esc0JBQXNCLG1EQUFZLENBQUMsMkNBQVE7QUFDM0MsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esc0JBQXNCLG1EQUFZLENBQUMsaURBQVc7QUFDOUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb25zdCBhZGRyZXNzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRlbFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBlbWFpbFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGFkZHJlc3NTZWN0aW9uLmlubmVySFRNTCA9XG4gICAgXCI8cD48c3Ryb25nPkFkcmVzczogPC9zdHJvbmc+QXRhdMO8cmssIDEyMS4gU2suLCAzNTY4MCBGb8OnYS/EsHptaXI8L3A+XCI7XG4gIHRlbFNlY3Rpb24uaW5uZXJIVE1MID0gXCI8cD48c3Ryb25nPlRlbDogPC9zdHJvbmc+MDg1MDEyMzEzMzkzNDwvcD5cIjtcbiAgZW1haWxTZWN0aW9uLmlubmVySFRNTCA9XG4gICAgXCI8cD48c3Ryb25nPkUtbWFpbDogPC9zdHJvbmc+YWVnZWFuYmlzdHJvQGdtYWlsLmNvbTwvcD5cIjtcblxuICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChhZGRyZXNzU2VjdGlvbik7XG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKHRlbFNlY3Rpb24pO1xuICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChlbWFpbFNlY3Rpb24pO1xuXG4gIHJldHVybiBjb250YWN0U2VjdGlvbjtcbn1cbiIsIi8vY3JlYXRlIGh0bWwgZWxlbWVudFxuXG5mdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGgxSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBoNEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcblxuICAvL0FkZCBpZCB0byB0aGUgZWxlbWVudHNcbiAgcmVzdGF1cmFudE5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXN0YXVyYW50LW5hbWVcIik7XG4gIHNsb2dhbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNsb2dhblwiKTtcblxuICAvL0FkZCBjb250ZW50IHRvIHRoZSBlbGVtZW50c1xuICBoMUhlYWRlci50ZXh0Q29udGVudCA9IFwiQWVnZWFuIEJpc3Ryb1wiO1xuICBoNEhlYWRlci5pbm5lckhUTUwgPVxuICAgIFwiRGVsaWNpb3VzIG1lYWxzIGFuZCByZWZyZXNoaW5nIGRyaW5rcyA8YnI+ZnJvbSBhbmNpZW50IGxhbmRzIG9mIEFlZ2Vhbi4uLlwiO1xuICAvL0FkZCBoZWFkZXIgc3ViIGNoaWxkcyB0byB0aGUgaGVhZGVyIGVsZW1lbnRcbiAgcmVzdGF1cmFudE5hbWUuYXBwZW5kQ2hpbGQoaDFIZWFkZXIpO1xuICBzbG9nYW4uYXBwZW5kQ2hpbGQoaDRIZWFkZXIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2xvZ2FuKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgeyBsb2FkSGVhZGVyIH07XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IGhvbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgSW4gdGhlIGhlYXJ0IG9mIEJvZHJ1bSwgc2V0IGF0IHRoZSBtYWduaWZpY2VudCBwbGFjZSwgbmVhciB0aGVcbiAgICBjYXN0bGUgb2YgQm9kcnVtLCB0aGUgZXRlcm5hbCBndWFyZGlhbiBvZiB0aGUgcmVnaW9uLCBhIHJ1c3RpYyBnZW1cbiAgICBhd2FpdHMgdG8gYmUgZGlzY292ZXJlZC4gVGhlIHJlc3RhdXJhbnQgJ0FlZ2VhbicgbGllcyBhIGZldyBtZXRlcnNcbiAgICBmcm9tIHRoZSBtYWluIHNxdWFyZSwgb24gb25lIG9mIHRoZSBtb3N0IHByaXZpbGVnZWQgc3BvdHMgb2YgdGhlXG4gICAgY2l0eSBpbiB0aGUgYXJtcyBvZiB0aGUgd2F2ZXMuIFRoZXJlLCB0aGUgY2hhcm0gb2Ygc2ltcGxpY2l0eSB3aXRoXG4gICAgc3Ryb25nIHRyYWRpdGlvbmFsIGVsZW1lbnRzIHRyYXZlbHMgeW91IGluIGEgZmVhc3Qgb2YgTWVkaXRlcnJhbmVhblxuICAgIGZsYXZvcnMuIFdpdGhpbiBlYXN5IGFjY2VzcyBldmVuIHdoZW4gdGhlcmUgYXJlIHBoeXNpY2FsXG4gICAgZGlzYWJpbGl0aWVzLCBpdHMgaG9zcGl0YWJsZSBjb3VydHlhcmQgb2ZmZXJzIHlvdSB0aGUgcGVyZmVjdFxuICAgIGVudmlyb25tZW50IHdoZXJlIHlvdSBjYW4gZW5qb3kgZGVsaWNpb3VzIGRpc2hlcyBvZiB0aGUgR3JlZWtcbiAgICBjdWlzaW5lLCBwcmVwYXJlZCB3aXRoIGNhcmUgYW5kIGxvY2FsLCBwdXJlIGluZ3JlZGllbnRzIGFuZCBmcmVzaFxuICAgIGZpc2ggb3Igb3JpZ2luYWwgc2FsYWRzIHRoYXQgbWVldCB0aGUgcmVxdWlyZW1lbnRzIG9mIHRoZSBtb2Rlcm5cbiAgICBoZWFsdGh5IGRpZXQuYDtcblxuICBob21lU2VjdGlvbi5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gIHJldHVybiBob21lU2VjdGlvbjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkTWFpblBhcnQobG9hZFNlbGVjdGVkU2VjdGlvbikge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnN0IHBhZ2VJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzZWxlY3RlZFNlY3Rpb24gPSBsb2FkU2VsZWN0ZWRTZWN0aW9uKCk7XG5cbiAgbWFpbkNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLWNvbnRlbnRcIik7XG4gIGltYWdlLnNyYyA9IFwiLi4vc3JjL3Jlc3RhdXJhbnQtaW1hZ2UuanBlZ1wiO1xuICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJzZWFzaWRlIHJlc3RhdXJhbnQgaW1hZ2VcIik7XG4gIG1haW5Db250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbi1jb250ZW50XCIpO1xuICBwYWdlSW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwYWdlLWltYWdlXCIpO1xuXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHNlbGVjdGVkU2VjdGlvbik7XG4gIHBhZ2VJbWFnZS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQocGFnZUltYWdlKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG5cbiAgcmV0dXJuIG1haW47XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbnN0IG1lbnUgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJHcmlsbGVkIFVtYnJhXCIsXG4gICAgICBpbWFnZTpcbiAgICAgICAgXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFvSENCWVZGUmdWRmhVWkdSZ2FIQmdZR0JrY0doZ1lHaGdlR1NFYUdSZ1lHQm9jSVM0ckhDY3JMUmtZSmpnbUt5OHhOVFU3R2lRN1FEczBTeTQwTlRFQkRBd01FQThRSHhJU0hqRXJKQ3d4TkRRME5ERTBQelEwTkRRMFFEUkFORFEwTkVBME5EZzBORFExTkRRME5EUTBORFE3TkRRME5EUTBORFEwTkRRME5QL0FBQkVJQUxjQkV3TUJJZ0FDRVFFREVRSC94QUFiQUFBQkJRRUJBQUFBQUFBQUFBQUFBQUFFQUFFQ0F3VUdCLy9FQURrUUFBSUJBZ1FFQkFVREF3UUNBd0VBQUFFQ0FBTVJCQkloTVFWQlVXRUdFeUp4TW9HUm9iRkN3ZEZTNGZBVUZTUHhRMklrZ3FJSC84UUFHUUVBQXdFQkFRQUFBQUFBQUFBQUFBQUFBQUVDQXdRRi84UUFKQkVBQWdJQ0F3RUJBQU1BQXdBQUFBQUFBQUVDRVJJaEF6RkJVU0lUTW1FRVFsTC8yZ0FNQXdFQUFoRURFUUEvQVBaSThpREhnQTk0OGpIdkFCNG8xNDBBSGl2R2lnQW85NDBVQUh2RmVORkFCU0xSNUV4b0NEd1dyQ1hnOVFTWk11Sm4xb0swTnFxWU15R1l5N09pSTlLSDBJRlRXRzBSS2dUSU5TWExLRU11VXpZd2tpd1I1R1BlSWtlTmVLOFY0QUs4ZU5lSzhBSGtZb3hnQWpJR09aRmpHVWlKanhyeHhFVVBGR3ZGQVJLT0RJNW80MWdLaVY0cnhzc1JFVmlKWGl2S21lUkx4T1NIaVhabzJlVTVvMTRzaDRoR2FNV2xGNHMwTWd4TGk4YlBLcnlKY0RuRElGRXVMeDgwb0ZRZFl4cVF5WVlscE1yYVZ0V0hXVU5Xa1NrV29rM3RLSEFpWjVCVGVaT1RaYVJJUyttOEdZMjNrUTNlQ2swVTFacUk0bDZ0TWRhaDZ5NWNVWnBIbVhwbktCcTVvOTVsL3dDck1tTVpML2xpUi9HelN2RkFreFFNSVdvSmFrbjBTNHRGc1VobUVmTkdLaHlZeE1STWdUR0NRNU1nVEhKa1pObEpDamlORkZZeVVVVjRvN0VSa2xhMEg4d3hzMHljMnlzUWw2bzVTczFDWlZlSzhUYlkxRkltVEd2STNqd0dQZUs4YTBRRUFIdkZlT0ZqaFlBUVo0TmljSm1IeEVTTmZFNitnWnJibTlsSGEvTSswdW9ZeFhIUWpjSGYrOGpKTjBLNk1LdmhIUzk2alpmZmFTWGl5b25xTisvV0Y4WHhDcWpsdEFBU1RQS0h4eHFFaEg5QnVOOW9aVXdrMDBkZW5GcXByTVJxbkx0N2Rab1ZPTzBsc29lN2M5ZGZwTW5DMGY4QTQ0QWF4dFluY3lodURvTldZbHROZFpwVDdZMVgwNm5EWXd2YnBDNk5iS3h1UG5PTzg4MGRxZ1lEbHZiM3RDbTR3K1VQWUZPWnZlQ2xIeENhZmh2NCttOVM0VnJRTERVNnlJVmMzUFdZMlB4NzVEVVJ4cU5CZis4SzRQeEozcHFYWVpqcHYrMHFsTFZBbTFzMDM0d2laVU44eDdYbXBUYk1Md1RENFpGQmRpcGFHVTZxc05KaHlSeGV5NHl5NkpXaXRIRWUwZ3NqSkxVSTV4b3JSN1FGb3hEUjF4WjV5aTBVZVVsNkxGQnlZc0dFSzk1a1drMHFFYlMxeXYwaHcrR3FaR1UwOFFETEE0TTFVa3lLYUp4UkNLTVFvb29wUWdXS09pR1dyU21GR2xsUUVrQkxIc0pTMVNBSjJUdEpnNmJmajk0T2FrUWVDRXlaYy8wZmNSdk1lL3dENXQvYVBtZzJKeFd5cWRUdWVnNW1EYVhiRlRZbnhGVzVBVmROeURlM2JXMnNEeE9KemtJS2pvZjFNYklCL3dDbzZrKzhuVnhMQmJLaHNQdi9BREh3NlpSWjhvWTZrblc1OXZ0TTVTQncvd0JJSmhWeWhGcUd3NldnR05xR21SWjlRZE5pUGFBZUplRFU2eHprT2hCR1prT1hUMjV5RG4xb2hiTXRyQmpvZE9wNXpLVmVhSy9qdEFIaU9wVXIzdVNFdGNnZHVzNGJGQUlFQ1hBTzg5RHFpK2MyOUJKVWEvRjdUa2VMOE9CY0RQbDBHVzQwWWRqMTdSUmx1bVpxVzlsYUxYeXFFYzJZNXJYNmRSTjVlTVpVeTF5U2JicXZ4ZHJpRDRmQ0UwN0tMTUJxZWdrYWVPUUFxN0tDbDc1Z1NyZEFMVGJqbms2Wm8xYXZ3amh1SklYOUM2YnNHNWpuckZYNGlvVnYrTWhEb0xFZmlEY013aHExeVNsazU1U3dIWXIxbXR4SEFqSVFpNXdQL3dBbnVONXVvTkswRGtycGhmQThGaC9JOVQzemFqWGFGMWVFb2llZzYydmZlWXZEY1JXcElGVERyVVVrNWdSWUh1TDdIdE5BWXZhcFRESXZ3dWpyOEhVanFQYVd1ak45bk9OVXhDUG16Rmt2cUw2ZlNkSnc3eEtxRDFCc28zME9rQ3gyRkZTN0lSYm5hNUgybUhqRXJrRlUrQTJHZzZkenRNcFJ2VE5iOVBSTUh4K2k3WERpeEUxVng2Y2lMR2VKOFA0ZmtxSE03S1JyWUFtNDU2enA4RnhzSjZENjBHdlJoN1huUE9NbzdScEdwSHBZWldPa2l3c2JUbitEY1NvMUF6STdBalFxZVVOYkhvcHNXMWs1TkxZWW1sRktROXBZclM3Q2lVYTBsYU5HQkVpU1Z5T2NVYTBCQk5IRUhuREExNWxYbDFQRUVhY3BwQ2ZqSWxINEgzaWxJeEs5WXB0a3ZwRk1JekRsS0t0ZnZKMUQzbVppRzF0TXBTclJVWTJUclZwVjVzcVl4bG1lUmVKZUhrbnJCUmU0bFZXMlFqbkJjTmh5VnlNYmo3eFNsU3BCR0lSNWpQOEFDd2tLT0ZlNVl1TjdlMXRwVFhXbmhsTHU0VlIxM1BZRGN6bWNUeHA2cmxrVXFnK0VkZTVIV1kzWGFMZStqcmE3Z0ZWelpyWGI2V3RmNjMrVWg1dlRVemxLbkZuWFZ3ZHJTNm54cG5GazNnbTcwQ2l2VFZ4MWMySTZ6bWNaV0kwL3AzUDR0RTNFWExFTnBidkkxZ3ppdzI1bjNtY2syOWo1SFVkRzBpb1VvSXB1em01SjNzTlNPMDV6SDRZbXMxTy9vVWx6cGV4R2xnZTh0cHNhTlJDQ1RsQk5yM3RlV212bGU1QTlaSlk4OVI2WmVVWlZSeHlpMXNMNEZpcWJVNmdRczdyZTZrYWtkQU9nbVduQzZvQXJ1b0w1bUdVQVpjdkkyUDd6c1BEM0Q2SVh6RlFCMjlMSHFKclYwQ1BteStsckE5bTJCdDMybXovTk9KckIrUG80SEE4WXlWUVdCUldZS1ZEQUZkRDYwR29JMnZjZk9kTlF4dXhZcTZQWmxjS3Vnc2I1d1RibHVEejJuT2VNTUN5QmFsTlVzTXdPWmMxdGpwb2JjOVp5bUl4RHNjN1VLWXZsS1pDamc1TW95NmtsYjJKdWZiVzgzaHlTYXNVb1JzOUp4K0t3NUZuclUwYTVZRU5iMDI2QmlPNDY5SlhoOFhUcUlVb3VsUmxPckZXSWUrbWU5dHZiU2VZSEZWTVFWQzBseUpaYmdITmw1YW01SjU2QTIxMHROL2hUWVNrRXFzMVhPaDlTZXBDTFdPV3dleEd0K1c1djBtcWw5SWNmaDJXSnc0U2lXVkZ6Z1hBc1VIYzJPL09BWUdvYTRCQVZFSUtsV0Zzd0J0bVJ1Y3ljUnhqRFYzUjNSd2d6RHpGWnM2TXA5RHVWOUlVM0FJRjdkNXZZUEZZYW5sckJMbGlRcXJVenNEcG15SmJYZlcyMExUZWdxbHNyeC9BZ1ZDb1NlWkYvK1JCYmNFYmpUN3ptOFBnYWZsdGtxVXkrWWdsbnlNdGh0a092WFhuT3d4TlNqaVFpakVOVFluTnI2S281bEFlZzV6QzhXWXZDMGtBQ1VxcjNIeEFGaVYwdTVBMCtmVzk0U2pGb2NaT3pJcDFLbUZjT3RqY2FpL3BjZkw4enVPRThid09KS1psSzFORFp1WkhJVzNuazlLc1N6c2k1VXRvbXR0ZWt2d2RGaFp3YkVHNDdFYXprcFJiT21zbzJldWNSeEFOVDB0NlJwbDUrNGx1RnhhTVNMNmljamc4Ui9xVkJSc3RSYlhVbm4xSFVHRDhWNGxXdzdJV1FqV3prYTM3elBKdHZRNlNSNkV0WFdFSW1ZWEU1UEE4Y1I4b0IzK3M2R25pamxBNVFqSVVsOENtU1JCbDFDb0NOWk44UGNYRTFxK2lNcTdCcnhXaWNXaXRlQ0N4WlJGR3l4UjB3c0t4NzIwbVl4bWxqbDlYeW1leVdoTmJKaTlERVM5YXFXN3lWSlZ5c1NkZGJmdEFhbUdjaTZ5VTM0VTZKdXdackQ1OXB6UGlIeG5UdzVhbmh3SHJYeW05OGlIcVQrbzloQ1BFdU9kVjh0QVZ1UFUyeDlsL21lZlliQTN4Q1hCdG0xUDhBTXlUVGxzdkYwZFR3bmhsYkVBVk1RN09keGZZWDZEWVRyc053MVZGZ3NLd0NJRlVBalFDR3ZVQUdrMHhYWk52bzVuamxORld4R3BuRzRqRE9uclM0OXAzSEVsVTNaeUw3Q2M4K0RkcjYyVHZNcE5SWnJGV2pFd3pNN0FIV2EyQnh5ZXRON2VrRHFZSmk2bmtsY2d1TDJMVzBFeHVLMXlsaWxyazNZN2FuOXBLaktURnlOUmRHb0hGaVNmV0NRM2ZwQk9LNG9ncVFOTEtUMklFRlN1R3NTZGVaL0Vlc2plVVFkV3FITjdBYUMzdUJCUXhsWnljajBrZGQ0UnhCZDBjc1RjWE90aDlKMnVKY0ZDTFhERGxQTU9DY1JTZ1I1cHNnUWJhM0owNVQwbkRNckloVDRUWXI3SFdiUVRwaEZramhMcGxaYmkydCtmZjV6eWYvQVBvSENQSnFLeUN5TXV0cjJ6WDF0MDJVejJNazNzTFdJMTYvS1kzaUxoQ1YwTng2bDlTSG93MjBsTDh1MGFyNHp5bmhHSVVxaVZXcVpMQlZ5QXRtdUNBd0x1ZFJhNXlXQUtwYUdjWnFVWGVuU3E1a2RWeWlxcmtzd055UTZzN2tYdWJBbTQwMEEyek1WbVk1SHBFVlN5a3VyTmwzS2xuUmJnSGJVQUd3ZytQNFJXUStvTjhWbFpVY0pjbjlCS2pudHRPanRhSmFwbWwvdDlSbUM0YXFyb01pRlhxS2pGbnVQUm1BdDhPdHRRZVJ1SWs0cWlLR3hOUC9BSkF3dVVTcFJaR0J1d3E2WlhjNkd3dDhKdWRvc0J3K3RsVjZ1RnExS1djaDhsSXVTVkJHYTRGbXltNHRtWFhNTmJteHZFTWRoNnpaRGhxcnV4RE1nQlIydUFGS0t1WEt0d0JxVGJUNHI2Tkt1eE4yeG44VTFselVzUFh6SzF5akVaaXFrdHNHRmh1U2N4TzQzdE16aEdFU3RWQ1lsblV1VGt5b1RuSXZuQ2dDd0lJMU53Qk5XcjRhcDBhZHg1alZuMVhESmthb3RybGxxVmJNcWdEcUw2YlhObzlQMFlmSVI1VHV6TTVwdmQ4cDFSQ2NwQkExdUZJVWxybmNXTnAvcm9kcXZ5dG15M0RzSTRGQ21WcFZLZnFJektXY0FBMkxIVE5yOEoxdnVKTEVjTHBPbWVsa1IySUFSbUM5ckQxRUVuUTZIbU9zNGQrRk9qS3lPY3ltNmxsc09venVqbXgyRzJ2YVdyeHJFM1h6U1NiVzlhZ3FWMXV1U3hERHBwcGM5akljb1MrRFVacjZhZUp3aEJKRjFkVHJZMnNSN1RYcFlwcTZCU2N6cUxNRHVlVjV5OURpN3VTWEF2ZmNBS1BZQlFCTE01QnpveEIzdUp5eVRUbzZVclgrbXBUd0dSOHpzeTVkUU9VOUE0YlZ6b3BIUVRpTUp4Rk1VZ3B1d1dxQllFNlovYitKMS9neStSa2JlbWJmeGFOTGV6SGFiT2dvVXRJUlNlQTFxeEp0dEM4THFKckh2UkV1dGx0YW5mY1FJaXhtb3F5aXZoeHVzMGxEMUV4a1ZERW4rbUtVMmlrNU1xa0VZMG5NWU95MzVYaG1NWFhOS1VzTEdPUzNzbVBSVXVHWW5ZZ2Q5Slppc1lsSmRZWFhyQzJrNVhqN005c28yQk1ua2E0NDJ1eW9MTjB6SzRualBQZTFnTFRMUkZCdUxlOHA4NHN4ME4rUmwrR29NcDlRbkJKeWY2ZnAycUtXalV3dkVjbHN4bXVtTUw2SnAzbkwxNkpmYjY5Slpuc29SS3VSN2ZxK0VuMzVSUjVLMVlwUVNWbTFYV21ucXFNQ1J0TVBpdU5WL3dCVmdOZ1Azbk9ZeW5pTTV6c1MzMUh1SlVLYi9xbXFrcTBSajdac1luRjUwQ0tMNjMwN1ROUEM2cE4zc1FiK2s4aDd5emg3K1ZmTVJxYmdtR3Z4YlA2S2E1MmIwaTNQcktqS3RJeTVFcXRtTncvaHloenI2QU9mTTNzSVB4VEc1V0tnM0tvYmUyd2h1T3hTcUdDa0VnaEZ5N1hQeE44aCtaajVUWjMzc0FCMTVTbzI1WEk1WDNZa1ErU3IxQ1JybE9selluZWV5OERkVFRvaFd1b1VXUHkwbmlsTEZrMDJ1L3JMcVFEMEhJQ2R6NE00azZaUS93QUozSDlKNmlhdHRML0xOSXhiUFVGVVh2enRhQ1k5OHFNYlhJVW0zV3d2YjdSVXNVcEFzUWI4K3NpN2hpUnAzOXRvTm9wSThoeFBpSEZVa2FrYTFQSys2QUtUcnJZcXdzdXAyTXlhM0ZLeFFsMWRnRDZtTk9rOU5PUTlKUWprTmJyOFZoMW5lOGQ0TlRRc1dTK1kvRmNIVGY3RDhUbWEvQUZCUGwxMlFOZk11dVUzNnFDSmNlWHhsT0s3UUUzaVJpNklqcFRWTTZsa3BCUldHbGtOTkwydVZBVzFndHliODUwRkx4TXJZZkw1VHJpbVJnU0FVQ0ZTRlV2VXZuWUg0YlhGdGIzTmpNTnZES0x1NVBPd0Z2cmFhMkN3ZE5MWlYrMXR1VWI1V3Y2aVhHbjJVWVU0aDFDT1V0ZGN6QkZWeUYweTNXd0k2WEJJSE9hMURoNkxhNDE1bnJ6Tnp6K2NTNWpld3NEOHpKdGh5RkdZazlwelRjcGYyWnRHbDBReFdIUTJ0YmZsTTdIOFBRY3JrNmpuYWI5QkZ5NXNvQUd0ejdiNndER1lsU0NjM3NkdnAxK1V5Y1V0bzBpMmNwNUtPNVZkMUpYdG1JbEtzd3VyRHRES2ZEd0tocU01Q2dobEcyWWptZW5MNlNUMERVWXNOQVpybXRKZkFjWHRzeGtVK2F1cEhROURQWS9ES010TU14dXhHcDYrODgyVEFYTitZMm5wSGgyc1RSRjl4cE5JdFMwWVNUaWF4R3NOd2Q0QWxTMFB3Q3NmVnkybXNhUmxJMDFTVDhvUmxNdEJtOUdMWm0xYUdwalEweFNjVVBKaXFwekFtWFZUWHBmNmZLYkFickI4UmhnMytmaUVvM3NjWlVCWVp5VktrYlRDNG5YWWc1TFhITFluMm1wV3FtbXc1eXJpSEQxcWdNcHRmVy9Rem01WXR4cUwyam80Mm95dDlIRkFldktWeXNwT1ljd2Vjc1l1N20vcFFEVmp1ZXdtbnhTbWlXMEdjNmx2emZyZWN4NGh4N0JDaVgxR3A2VGdkcVdMTzFmcFdnSGkvaW9VMnlVMURBYU1iNlg3ZFpnMWZFem00Q0RVN25sQVRRdnZwTGNKdzdPd1ZkNTFSanh4VzBaeVVuMEhZZnhCVmIwbEE0N0EzRWppNnoxaU10UWhmNkRvVjYrODZqdy93a1VBU1RkanYvQW1aeC9BWm56cW1VNzMydjhBSVRKY3NNdnlxSmx3eVN0UFlOeEttcTBseTNacjJJM091a3BPS1pBVXBBZzI5Ym5RcURzRkEyK3NwcFl0U01qYW0vMzZ6U0ZOTWlJdGhyZHR5WDU2bWFwMHRuSzAzL1lHZmh2cFJRU0NxM0o3dnF4OTVhYVFSYkEzMjE5cG5jVDRnV0JSQ1F4UHRZU25CVldSQ3pObjlRR1htTzhhakp4c3VNVjhIcjBSbnpnYm5VQVRyT0VYdXB5MkEzTXljTmlrT1UyR3ZYbDd6WXA0cklDRnNiajg5SXBOMVROVkZMb3R4dkUyVzZxekFtNXNDUmJwb0lMd1hqV0twdWJrT2gzemszQTdHVFNrcHV4M1BYOTVmaUt5a2dKVEZsRnMxMnNlNXZ1ZmtKS2xpaHVDWm9jWjR3bFJGTGpKWWpmVWN4cDEzNlFLaGo2U2c1aTN2bHVMZlBhWWVPUWs1bUpOdGh5SHNJRTFOMlk1bUJROHJFSDYzMWxSZCtnNFZxanBYNGpUTjhvSkhYU1ZQajFHb1B5dC9Nd1Z3ZGdNcEtBL1NWTWpYeXMydmM3OTROWDZDaWEySzhVaW1McFNMV3Q4VEFENVdCbWJWOGF1eEE4c0lPcXRtUDNBbUx4YW1WSVltNm43R0MweXBtMFlSeHQ3TVpTZVZIU3B4WVZpRjh4N25jRFQ2eTFNQnJtTlJ2Y25YNm1jL2hmUTRkVHJLTVppWGR2VXhQYmxFK08zU0xqTnBiT3hTblJPOVFHM2VTRlJBZlN3dE9JcFBhYUdIekhhOHlsdzQrbHJrYk9uL3dCVXFrQWJtZFZ3VEYrbXduRjhOd0dZZ21kdGdNT0VVU1k5NkNYV3pkdzR6R2JlQnYxMEV3c0FjeEFFNmZEVWNvblpDTm5MSjBYQ0s4a3FSenBOekVoYUtMV0tLZ3N1dEd0R1Vqa1pLL1dNUUppOEl0UVdPaDVIbi9lWWJxOURNckRNaDVqOGlkTmE4aFZwQmhZaTRtYzRYdGRsd25qcnc4eXg1TGFIa1NSZmVZMk9vVDBQaW5CRmJiVG9mNUU1YmlIQzNRRzYzWHFOUjgrbnpuaTgzRE9NclBWNGVhTFZIRjE4TXA1UitGSmtmTjJ0Q2NUaDZ1ZTZaUXZNRWFuNXl0NnlJZFNBYjJzWTdsVmQyYkp4WjBDWWdBYi9BT2Q0RHhHb3pnS28xZTRUVFE5VGZ0QUt1SlBLVzhIRHM1TE1TQnN0OUJmWFFTSXhyOUZTZDZCRjhOT3B6WlF4OTVubWsxSzRKWUZqbEpQTGtTQk84emtDY3A0bGZOc05iNmRacnhjMHBTeGtjM0x3eHgwWURZVHkxSkxYTjlKTkhBUmdmaXVOVHRCNm9aaUxuYjdTZFNtMm1ndGEyZzMwNXp2djZaUnFLcElpbFU1dFBhYWlZaGdMZy9YV0NLTXVoWFczL2NzZWlTb0FOaHIvQUlZbTB4cGVzdS8zQmlRVHJxTnpwM25VVXNRaFVXWWFpNDEzbkFXT2JLRCtSZUhvUllCYjNHcDEvRWlYR24wVkYyZExpcWR3VE1oV09kVjBzVFlrbXdBNnk0VmJxRG1OeUxIMmdWSkN4QTB6WEozc05OcGtvMTJVOW5XUHc5Q2dDNzIrTG5lWXIwdmJNcHVEYm1PUnZ5bTFocTNvQUlzd0V4NnJqT1NPc1Nic1ZHVnh0eTZ1U0JtSnVkT2N3S0ZNamNXbTV4Sjl3T1pneUp6SXVaMHhuakV3NU9MS1ZnejA5QVFaUjVKM21vYUJKdmFYMDhKZmxGL01rVXVNQ3dsSWMxdk5yRDRlNDI5Z0lzUGd1MDNzRmdMMkZwaFBsY3RJMFNTN0x1QTRITXk1dEJmWDJuU05oVG55cURiOXBad1hoTDhsdHRxZVU2M0JZRlVIVnVaL2liOFBFMnJaemMzSWt3UGhYQzhndTIvU2E4Y0xKQVRzakZSVkk1WEszWkdSYU96aVZPeGxFalpvcFZrTVVXVEtvSXpBeHdUeU41aVlIajlLcFlFNVc2SCtacksxOVFRZmFTcHFXMERnNHVtVzV4ejBrS21JQzg3eXF1cFlXdkFtb01PVi9iV0tVbXVoeGluMlBXckZqS2pGRk9lVnZiT2hVZ0RGOEpwVlBpUUE5VjlKL3Y4QU9jdnhUd1FHWldSd2N1d2E0UHlJL2lkdGFNWmsrTk4yVXB0YVBPOFR3T29nMVErNDFIMUVBb0k2TmUyazlTdEtLMkRSL2lSVDdnZm1ZUy80Ny82czZJLzhqNmpoRzRrQU5RZTA1dmlqbHp6dHFaNmZpUEQxRnRnVjlqL041bFlqd2dEOEwvVWZ1SkVlS1VIZFdhUG1qSlVlYTB5aGJJWWFYVlJZTGM5OWZhMDZ1cjRQY0c0Q0g1MlAzRUVxK0dxdy93REdUN0ZUKzgwbEtYeGlpNC9VY2s0ZHVleE9udnZDblUrV1RwYzJ2Tld2d0dxUC9HL3lVbVVOd3VxRnlsSEE1ZWx2eDlaU21EUzhNS25RS2VzMk9ZR3czMDc5Sk5GdnNQa2JmbUdWZUh1TCtsaGExaFpyc094QXR5N1FmeW52b3JYRzNwT3Q5NzZUWlN2WkZVQ1ZhNXpBWHQxdDl0b2ZocUJOaU45K2R4eXNmenAxaXczQzNQcUtNU2YvQUZNMWNIdzJxUDBPZi9xMzhUT2MxMGlvcjFnM21QYkt6M3R5dUFTUGVSYjZUV1hnRlpqZnltK2RoK1lYUzhNVlR1b0h1UisweXQrSXU0cnRuTTFLUVlBQVg1azYvUzB1bzRBenI2SGhrajRuVWV3dkQ2UEFhWTNMSDdEN1IxeVM4SWM0bzQ1TUFCdk5EQ2NKZC9oUW52YXcrcG5YNGZCSW53b1BlMXo5VERWRXFQRC9BT21aUzVmaU1EQmVIYmF1dzlsL2t6b3VHOFBRR3dIOG41eEJaYlRPVTNFNkl4akh3eGxKdEcvUXBCUllDWFRIVEhrUzVNZDFuVXB4T1p3a2FCZVZNOHFSOHd2eWpsZ05TUUJIWk5FNUN2V0NpNStuTS94QU1aeFpFQnNmbk9JNDE0czFJUzdIcnlIOHlKUzhXMmFSaGUyZG0zR093alR6SC9mSE80YUtUVS9wWDVOYS9hRlliaVZTbjhMbjIzRXphYm5wTHdiOC93QjV5UmJYUjJ5U2ZaMUdGOFU4cWlmTVRZdzNGS1QvQUF1UFk2VHowbnJFR3RxTit4dE5Wek5kbUV1R1BoNld5QnVRUGVWUGgraCtzNGJEY1lySnN4UFk2eld3M2lvL3JUNWlhS2NaR2I0NUxvM21ROUpVWlhodU8wWHNDd0h2REZySTJ6QTlOWTNGVm9WdGRvRnRHTU04b0dRTkFTY1FzRk1WcGMySDZHVitVMFdJOGlCRVFqbEQwakdMRWVSSlk5cFdESHpHTEVMSk9nNkNVR21Pa3NMR1JNS0tzZ1ZFWXJMRElrUW9MSVJtV1R5eHNoaXBoWlZramhaY0tSNlNhME80anBoWlNGa2hMaWdIT1FMS0k2RllsRWtGbGJZcEY2Zk9CNGp4SFRwL3JVV2owRk0xRm90MHQ3NlNaVkYrSmg3RFg4emkrSStPay9TUzN0dE9leFhpMm8raStuOHg1ZkF3YlBUTVh4dEVHaEE3a3ptT0plTEFiaFRtUDJuQ1ZzYTduMU1UN21NanlYTnZzMGp4cEd4ak9KUFVQcWJUb0pUVGI2UUV0N3l4WFBPNGhHVmREY1Y2YVhuQ0tCNTRwZWJJd2o4TmhLM1hlV2d4UlRqT2xpTFNHYjIra2VLV1N4QnVrWTRpMjRpaWdCRXNEL2hqaXU2N0VqNXhvb0pnMGdtang2c211YS92RGFYakYvMUM4VVUwakptY29SRGFQaTllYW1IMGZFbEppTisraGlpbWliTW5GQkE0eWhPNStobHJjUlEvOUdLS05pUkgvVkwvQUplT01RSThVVEFzVEdLQWRPa1o4Y3ZUN1JSU2ZRUkZjU3YrWGlPTFVYL3ZGRkdDQTYzRkVIL1JncmVJVVcrdjJQOEFFVVVDa2dDdjRxUWN6OURNekVlTmtYWU1Zb29EU1JsMXZINS9TbjFtWmlQR21JYmF3aWlnaG1WWDR6WHFmRTUrc0Zhb3gxTEV4b29Nb21nN3kveXlPOGVLSmpKS2UwdlFpS0tTeXl3RzNPV0s1NnhSUk1SWmM5WW9vb0FmLzlrPVwiLFxuICAgICAgcHJpY2U6IDEwLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJHcmlsbGVkIFBsYWljZVwiLFxuICAgICAgaW1hZ2U6XG4gICAgICAgIFwiaHR0cHM6Ly9pLmd1aW0uY28udWsvaW1nL21lZGlhL2ExYWZhZjkyN2I4NGYyMWQxNmYwZjc4MDIzYWQxMjkzZjczOGM5OGIvMF8xODMwXzQ4MjJfMjg5MS9tYXN0ZXIvNDgyMi5qcGc/d2lkdGg9MTIwMCZoZWlnaHQ9OTAwJnF1YWxpdHk9ODUmYXV0bz1mb3JtYXQmZml0PWNyb3Amcz03NWJiM2M3YmE5M2I2NWZkYTliNWMxNmU3NDE1NmI3Y1wiLFxuICAgICAgcHJpY2U6IDEyLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJGcmllZCBXaGl0aW5nXCIsXG4gICAgICBpbWFnZTpcbiAgICAgICAgXCJodHRwczovL3d3dy5zYXZvcnl0aG91Z2h0cy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTIvRnJpZWQtV2hpdGluZy1GaXNoLVJlY2lwZS01MDB4NDIwLmpwZ1wiLFxuICAgICAgcHJpY2U6IDgsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkZyaWVkIFN0cmlwZWQgTXVsbGV0XCIsXG4gICAgICBpbWFnZTpcbiAgICAgICAgXCJodHRwczovL21lZGlhLWNkbi50cmlwYWR2aXNvci5jb20vbWVkaWEvcGhvdG8tcy8xNC8zZi9kNC82OS9zdHJpcGVkLW11bGxldC5qcGdcIixcbiAgICAgIHByaWNlOiA5LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJTb2xlIEZpc2ggd2l0aCBCdXR0ZXJcIixcbiAgICAgIGltYWdlOlxuICAgICAgICBcImh0dHBzOi8vbG92ZWluY29ycG9yYXRlZC5ibG9iLmNvcmUud2luZG93cy5uZXQvY29udGVudGltYWdlcy9tYWluL3JhY2hlbCthbGxlbitiYWtlZCtkb3Zlcitzb2xlK29yaWdpbmFsK2ltYWdlLmpwZ1wiLFxuICAgICAgcHJpY2U6IDE0LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJGcmllZCBBbmNob3Z5XCIsXG4gICAgICBpbWFnZTpcbiAgICAgICAgXCJodHRwczovL3d3dy5oYXBweWZvb2RzdHViZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDQvZnJpZWQtYW5jaG92aWVzLTIuanBnXCIsXG4gICAgICBwcmljZTogMTMsXG4gICAgfSxcbiAgXTtcblxuICBtZW51LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBpdGVtQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgIGl0ZW1JbWFnZS5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2l0ZW0uaW1hZ2V9XCIgYWx0PVwiJHtpdGVtLm5hbWV9XCIgLz5gO1xuICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XG5cbiAgICBpdGVtQ2FyZC5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgaXRlbUNhcmQuYXBwZW5kQ2hpbGQoaXRlbUltYWdlKTtcbiAgICBpdGVtQ2FyZC5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuXG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoaXRlbUNhcmQpO1xuICB9KTtcblxuICByZXR1cm4gbWVudVNlY3Rpb247XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZE5hdmJhcigpIHtcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgaG9tZUJ1dHRvbi5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNcIj5Ib21lPC9hPic7XG4gIG1lbnVCdXR0b24uaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIjXCI+TWVudTwvYT4nO1xuICBjb250YWN0QnV0dG9uLmlubmVySFRNTCA9ICc8YSBocmVmPVwiI1wiPkNvbnRhY3Q8L2E+JztcbiAgaG9tZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWUtYnV0dG9uXCIpO1xuICBtZW51QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS1idXR0b25cIik7XG4gIGNvbnRhY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LWJ1dHRvblwiKTtcblxuICB1bC5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgdWwuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gIHVsLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQodWwpO1xuXG4gIHJldHVybiBuYXZiYXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRIZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCB7IGxvYWRNYWluUGFydCB9IGZyb20gXCIuL21haW5cIjtcbmltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBsb2FkQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCB7IGxvYWROYXZiYXIgfSBmcm9tIFwiLi9uYXZiYXJcIjtcblxuZnVuY3Rpb24gaW5pdGlhbExvYWQobG9hZFBhZ2UpIHtcbiAgY29uc3QgaGVhZGVyID0gbG9hZEhlYWRlcigpO1xuICBjb25zdCBtYWluID0gbG9hZE1haW5QYXJ0KGxvYWRQYWdlKTtcbiAgY29uc3QgbmF2YmFyID0gbG9hZE5hdmJhcigpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2YmFyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJNYWluQ29udGVudCgpIHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgbWFpbkNvbnRlbnQucmVtb3ZlKCk7XG59XG5cbmluaXRpYWxMb2FkKGxvYWRIb21lKTtcblxuY29uc3QgaG9tZU1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtYnV0dG9uXCIpO1xuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1idXR0b25cIik7XG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LWJ1dHRvblwiKTtcblxuaG9tZU1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xlYXJNYWluQ29udGVudCgpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGxvYWRNYWluUGFydChsb2FkSG9tZSkpO1xufSk7XG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xlYXJNYWluQ29udGVudCgpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGxvYWRNYWluUGFydChsb2FkTWVudSkpO1xufSk7XG5cbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xlYXJNYWluQ29udGVudCgpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGxvYWRNYWluUGFydChsb2FkQ29udGFjdCkpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9