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

  contactSection.setAttribute("id", "contact");

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
  homeSection.setAttribute("id", "home");
  const paragraph = document.createElement("p");
  paragraph.textContent = `In the heart of Bodrum, set at the magnificent place, near the
    castle of Bodrum, the eternal guardian of the region, a rustic gem
    awaits to be discovered. The restaurant 'Aegean' lies a few meters
    from the main square, on one of the most privileged spots of the
    city in the arms of the waves. There, the charm of simplicity with
    strong traditional elements travels you in a feast of Mediterranean
    flavors. Within easy access even when there are physical
    disabilities, its hospitable courtyard offers you the perfect
    environment where you can enjoy delicious dishes of the Turkish
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
  menuSection.setAttribute("id", "menu");
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

    itemCard.classList.add("item-card");
    itemName.classList.add("item-name");
    itemImage.classList.add("item-image");
    itemPrice.classList.add("item-price");

    itemName.textContent = item.name;
    itemImage.innerHTML = `<img src="${item.image}" alt="${item.name}" />`;
    itemPrice.textContent = "$" + item.price;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFc0I7Ozs7Ozs7Ozs7Ozs7OztBQzFCZjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLFdBQVcsU0FBUyxVQUFVO0FBQ3JFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztVQ3BCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ0E7QUFDSjtBQUNBO0FBQ007QUFDRjs7QUFFdEM7QUFDQSxpQkFBaUIsbURBQVU7QUFDM0IsZUFBZSxtREFBWTtBQUMzQixpQkFBaUIsbURBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLDJDQUFROztBQUVwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixtREFBWSxDQUFDLDJDQUFRO0FBQzNDLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHNCQUFzQixtREFBWSxDQUFDLDJDQUFRO0FBQzNDLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHNCQUFzQixtREFBWSxDQUFDLGlEQUFXO0FBQzlDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgY29uc3QgYWRkcmVzc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0ZWxTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZW1haWxTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb250YWN0U2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RcIik7XG5cbiAgYWRkcmVzc1NlY3Rpb24uaW5uZXJIVE1MID1cbiAgICBcIjxwPjxzdHJvbmc+QWRyZXNzOiA8L3N0cm9uZz5BdGF0w7xyaywgMTIxLiBTay4sIDM1NjgwIEZvw6dhL8Swem1pcjwvcD5cIjtcbiAgdGVsU2VjdGlvbi5pbm5lckhUTUwgPSBcIjxwPjxzdHJvbmc+VGVsOiA8L3N0cm9uZz4wODUwMTIzMTMzOTM0PC9wPlwiO1xuICBlbWFpbFNlY3Rpb24uaW5uZXJIVE1MID1cbiAgICBcIjxwPjxzdHJvbmc+RS1tYWlsOiA8L3N0cm9uZz5hZWdlYW5iaXN0cm9AZ21haWwuY29tPC9wPlwiO1xuXG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGFkZHJlc3NTZWN0aW9uKTtcbiAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQodGVsU2VjdGlvbik7XG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGVtYWlsU2VjdGlvbik7XG5cbiAgcmV0dXJuIGNvbnRhY3RTZWN0aW9uO1xufVxuIiwiLy9jcmVhdGUgaHRtbCBlbGVtZW50XG5cbmZ1bmN0aW9uIGxvYWRIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2xvZ2FuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaDFIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGg0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuXG4gIC8vQWRkIGlkIHRvIHRoZSBlbGVtZW50c1xuICByZXN0YXVyYW50TmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlc3RhdXJhbnQtbmFtZVwiKTtcbiAgc2xvZ2FuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2xvZ2FuXCIpO1xuXG4gIC8vQWRkIGNvbnRlbnQgdG8gdGhlIGVsZW1lbnRzXG4gIGgxSGVhZGVyLnRleHRDb250ZW50ID0gXCJBZWdlYW4gQmlzdHJvXCI7XG4gIGg0SGVhZGVyLmlubmVySFRNTCA9XG4gICAgXCJEZWxpY2lvdXMgbWVhbHMgYW5kIHJlZnJlc2hpbmcgZHJpbmtzIDxicj5mcm9tIGFuY2llbnQgbGFuZHMgb2YgQWVnZWFuLi4uXCI7XG4gIC8vQWRkIGhlYWRlciBzdWIgY2hpbGRzIHRvIHRoZSBoZWFkZXIgZWxlbWVudFxuICByZXN0YXVyYW50TmFtZS5hcHBlbmRDaGlsZChoMUhlYWRlcik7XG4gIHNsb2dhbi5hcHBlbmRDaGlsZChoNEhlYWRlcik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChzbG9nYW4pO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmV4cG9ydCB7IGxvYWRIZWFkZXIgfTtcbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgY29uc3QgaG9tZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgaG9tZVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gYEluIHRoZSBoZWFydCBvZiBCb2RydW0sIHNldCBhdCB0aGUgbWFnbmlmaWNlbnQgcGxhY2UsIG5lYXIgdGhlXG4gICAgY2FzdGxlIG9mIEJvZHJ1bSwgdGhlIGV0ZXJuYWwgZ3VhcmRpYW4gb2YgdGhlIHJlZ2lvbiwgYSBydXN0aWMgZ2VtXG4gICAgYXdhaXRzIHRvIGJlIGRpc2NvdmVyZWQuIFRoZSByZXN0YXVyYW50ICdBZWdlYW4nIGxpZXMgYSBmZXcgbWV0ZXJzXG4gICAgZnJvbSB0aGUgbWFpbiBzcXVhcmUsIG9uIG9uZSBvZiB0aGUgbW9zdCBwcml2aWxlZ2VkIHNwb3RzIG9mIHRoZVxuICAgIGNpdHkgaW4gdGhlIGFybXMgb2YgdGhlIHdhdmVzLiBUaGVyZSwgdGhlIGNoYXJtIG9mIHNpbXBsaWNpdHkgd2l0aFxuICAgIHN0cm9uZyB0cmFkaXRpb25hbCBlbGVtZW50cyB0cmF2ZWxzIHlvdSBpbiBhIGZlYXN0IG9mIE1lZGl0ZXJyYW5lYW5cbiAgICBmbGF2b3JzLiBXaXRoaW4gZWFzeSBhY2Nlc3MgZXZlbiB3aGVuIHRoZXJlIGFyZSBwaHlzaWNhbFxuICAgIGRpc2FiaWxpdGllcywgaXRzIGhvc3BpdGFibGUgY291cnR5YXJkIG9mZmVycyB5b3UgdGhlIHBlcmZlY3RcbiAgICBlbnZpcm9ubWVudCB3aGVyZSB5b3UgY2FuIGVuam95IGRlbGljaW91cyBkaXNoZXMgb2YgdGhlIFR1cmtpc2hcbiAgICBjdWlzaW5lLCBwcmVwYXJlZCB3aXRoIGNhcmUgYW5kIGxvY2FsLCBwdXJlIGluZ3JlZGllbnRzIGFuZCBmcmVzaFxuICAgIGZpc2ggb3Igb3JpZ2luYWwgc2FsYWRzIHRoYXQgbWVldCB0aGUgcmVxdWlyZW1lbnRzIG9mIHRoZSBtb2Rlcm5cbiAgICBoZWFsdGh5IGRpZXQuYDtcblxuICBob21lU2VjdGlvbi5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gIHJldHVybiBob21lU2VjdGlvbjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkTWFpblBhcnQobG9hZFNlbGVjdGVkU2VjdGlvbikge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnN0IHBhZ2VJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzZWxlY3RlZFNlY3Rpb24gPSBsb2FkU2VsZWN0ZWRTZWN0aW9uKCk7XG5cbiAgbWFpbkNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLWNvbnRlbnRcIik7XG4gIGltYWdlLnNyYyA9IFwiLi4vc3JjL3Jlc3RhdXJhbnQtaW1hZ2UuanBlZ1wiO1xuICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJzZWFzaWRlIHJlc3RhdXJhbnQgaW1hZ2VcIik7XG4gIG1haW5Db250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbi1jb250ZW50XCIpO1xuICBwYWdlSW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwYWdlLWltYWdlXCIpO1xuXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHNlbGVjdGVkU2VjdGlvbik7XG4gIHBhZ2VJbWFnZS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQocGFnZUltYWdlKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG5cbiAgcmV0dXJuIG1haW47XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIG1lbnVTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKTtcbiAgY29uc3QgbWVudSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkdyaWxsZWQgVW1icmFcIixcbiAgICAgIGltYWdlOlxuICAgICAgICBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQW9IQ0JZVkZSZ1ZGaFVaR1JnYUhCZ1lHQmtjR2hnWUdoZ2VHU0VhR1JnWUdCb2NJUzRySENjckxSa1lKamdtS3k4eE5UVTdHaVE3UURzMFN5NDBOVEVCREF3TUVBOFFIeElTSGpFckpDd3hORFEwTkRFMFB6UTBORFEwUURSQU5EUTBORUEwTkRnME5EUTFORFEwTkRRME5EUTdORFEwTkRRME5EUTBORFEwTlAvQUFCRUlBTGNCRXdNQklnQUNFUUVERVFIL3hBQWJBQUFCQlFFQkFBQUFBQUFBQUFBQUFBQUVBQUVDQXdVR0IvL0VBRGtRQUFJQkFnUUVCQVVEQXdRQ0F3RUFBQUVDQUFNUkJCSWhNUVZCVVdFR0V5SnhNb0dSb2JGQ3dkRlM0ZkFVRlNQeFEySWtncUlILzhRQUdRRUFBd0VCQVFBQUFBQUFBQUFBQUFBQUFBRUNBd1FGLzhRQUpCRUFBZ0lDQXdFQkFBTUFBd0FBQUFBQUFBRUNFUkloQXpGQlVTSVRNbUVFUWxMLzJnQU1Bd0VBQWhFREVRQS9BUFpJOGlESGdBOTQ4akh2QUI0bzE0MEFIaXZHaWdBbzk0MFVBSHZGZU5GQUJTTFI1RXhvQ0R3V3JDWGc5UVNaTXVKbjFvSzBOcXFZTXlHWXk3T2lJOUtIMElGVFdHMFJLZ1RJTlNYTEtFTXVVell3a2l3UjVHUGVJa2VOZUs4VjRBSzhlTmVLOEFIa1lveGdBaklHT1pGakdVaUpqeHJ4eEVVUEZHdkZBUktPREk1bzQxZ0tpVjRyeHNzUkVWaUpYaXZLbWVSTHhPU0hpWFpvMmVVNW8xNHNoNGhHYU1XbEY0czBNZ3hMaThiUEtyeUpjRG5ESUZFdUx4ODBvRlFkWXhxUXlZWWxwTXJhVnRXSFdVTldrU2tXb2szdEtIQWlaNUJUZVpPVFphUklTK204R1kyM2tRM2VDazBVMVpxSTRsNnRNZGFoNnk1Y1VacEhtWHBuS0JxNW85NWwvd0NyTW1NWkwvbGlSL0d6U3ZGQWt4UU1JV29KYWtuMFM0dEZzVWhtRWZOR0toeVl4TVJNZ1RHQ1E1TWdUSEprWk5sSkNqaU5GRll5VVVWNG83RVJrbGEwSDh3eHMweWMyeXNRbDZvNVNzMUNaVmVLOFRiWTFGSW1UR3ZJM2p3R1BlSzhhMFFFQUh2RmVPRmpoWUFRWjROaWNKbUh4RVNOZkU2K2dacmJtOWxIYS9NKzB1b1l4WEhRamNIZis4akpOMEs2TUt2aEhTOTZqWmZmYVNYaXlvbnFOKy9XRjhYeENxamx0QUFTVFBLSHh4cUVoSDlCdU45b1pVd2swMGRlbkZxcHJNUnFuTHQ3ZFpvVk9PMGxzb2U3YzlkZnBNbkMwZjhBNDRBYXh0WW5jeWh1RG9OV1lsdE5kWnBUN1kxWDA2bkRZd3ZicEM2TmJLeHVQbk9PODgwZHFnWURsdmIzdENtNHcrVVBZRk9admVDbEh4Q2FmaHY0K205UzRWclFMRFU2eUlWYzNQV1kyUHg3NURVUnhxTkJmKzhLNFB4SjNwcVhZWmpwdiswcWxMVkFtMXMwMzR3aVpVTjh4N1htcFRiTUx3VEQ0WkZCZGlwYUdVNnFzTkpoeVJ4ZXk0eXk2SldpdEhFZTBnc2pKTFVJNXhvclI3UUZveERSMXhaNXlpMFVlVWw2TEZCeVlzR0VLOTVrV2swcUViUzF5djBodytHcVpHVTA4UURMQTRNMVVreUthSnhSQ0tNUW9vb3BRZ1dLT2lHV3JTbUZHbGxRRWtCTEhzSlMxU0FKMlR0Smc2YmZqOTRPYWtRZUNFeVpjLzBmY1J2TWUvd0Q1dC9hUG1nMkp4V3lxZFR1ZWc1bURhWGJGVFlueEZXNUFWZE55RGUzYlcyc0R4T0p6a0lLam9mMU1iSUIvd0NvNmsrOG5WeExCYktoc1B2L0FESHc2WlJaOG9ZNmtuVzU5dnRNNVNCdy93QklKaFZ5aEZxR3c2V2dHTnFHbVJaOVFkTmlQYUFlSmVEVTZ4emtPaEJHWmtPWFQyNXlEbjFvaGJNdHJCam9kT3A1ektWZWFLL2p0QUhpT3BVcjN1U0V0Y2dkdXM0YkZBSUVDWEFPODlEcWkrYzI5QkpVYS9GN1RrZUw4T0JjRFBsMEdXNDBZZGoxN1JSbHVtWnFXOWxhTFh5cUVjMlk1clg2ZFJONWVNWlV5MXlTYmJxdnhkcmlENGZDRTA3S0xNQnFlZ2thZU9RQXE3S0NsNzVnU3JkQUxUYmpuazZabzFhdndqaHVKSVg5QzZic0c1am5yRlg0aW9WditNaERvTEVmaURjTXdocTF5U2xrNTVTd0hZcjFtdHhIQWpJUWk1d1Avd0FudU41dW9OSzBEa3JwaGZBOEZoL0k5VDN6YWpYYUYxZUVvaWVnNjJ2ZmVZdkRjUldwSUZURHJVVWs1Z1JZSHVMN0h0TkFZdmFwVERJdnd1anI4SFVqcVBhV3VqTjluT05VeENQbXpGa3ZxTDZmU2RKdzd4S3FEMUJzbzMwT2tDeDJGRlM3SVJibmE1SDJtSGpFcmtGVStBMkdnNmR6dE1wUnZUTmI5UFJNSHgraTdYRGl4RTFWeDZjaUxHZUo4UDRma3FITTdLUnJZQW00NTZ6cDhGeHNKNkQ2MEd2Umg3WG5QT01vN1JwR3BIcFlaV09raXdzYlRuK0RjU28xQXpJN0FqUXFlVU5iSG9wc1cxazVOTFlZbWxGS1E5cFlyUzdDaVVhMGxhTkdCRWlTVnlPY1VhMEJCTkhFSG5EQTE1bFhsMVBFRWFjcHBDZmpJbEg0SDNpbEl4SzlZcHRrdnBGTUl6RGxLS3RmdkoxRDNtWmlHMXRNcFNyUlVZMlRyVnBWNXNxWXhsbWVSZUplSGtuckJSZTRsVlcyUWpuQmNOaHlWeU1iajd4U2xTcEJHSVI1alA4QUN3a0tPRmU1WXVON2UxdHBUWFduaGxMdTRWUjEzUFlEY3ptY1R4cDZybGtVcWcrRWRlNUhXWTNYYUxlK2pyYTdnRlZ6WnJYYjZXdGY2MytVaDV2VFV6bEtuRm5YVndkclM2bnhwbkZrM2dtNzBDaXZUVngxYzJJNnptY1pXSTAvcDNQNHRFM0VYTEVOcGJ2STFneml3MjVuM21jazI5ajVIVWRHMGlvVW9JcHV6bTVKM3NOU08wNXpINFltczFPL29VbHpwZXhHbGdlOHRwc2FOUkNDVGxCTnIzdGVXbXZsZTVBOVpKWTg5UjZaZVVaVlJ4eWkxc0w0RmlxYlU2Z1FzN3JlNmtha2RBT2dtV25DNm9BcnVvTDVtR1VBWmN2STJQN3pzUEQzRDZJWHpGUUIyOUxIcUpyVjBDUG15K2xyQTltMkJ0MzJtei9OT0pyQitQbzRIQThZeVZRV0JSV1lLVkRBRmRENjBHb0kydmNmT2ROUXh1eFlxNlBabGNLdWdzYjV3VGJsdUR6Mm5PZU1NQ3lCYWxOVXNNd09aYzF0anBvYmM5WnltSXhEc2M3VUtZdmxLWkNqZzVNb3k2a2xiMkp1ZmJXODNoeVNhc1VvUnM5SngrS3c1Rm5yVTBhNVlFTmIwMjZCaU80NjlKWGg4WFRxSVVvdWxSbE9yRldJZSttZTl0dmJTZVlIRlZNUVZDMGx5SlpiZ0hObDVhbTVKNTZBMjEwdE4vaFRZU2tFcXMxWE9oOVNlcENMV09Xd2V4R3QrVzV2MG1xbDlJY2ZoMldKdzRTaVdWRnpnWEFzVUhjMk8vT0FZR29hNEJBVkVJS2xXRnN3QnRtUnVjeWNSeGpEVjNSM1J3Z3pEekZaczZNcDlEdVY5SVUzQUlGN2Q1dllQRllhbmxyQkxsaVFxclV6c0RwbXlKYlhmVzIwTFRlZ3Fsc3J4L0FnVkNvU2VaRi8rUkJiY0VialQ3em04UGdhZmx0a3FVeStZZ2xueU10aHRrT3ZYWG5Pd3hOU2ppUWlqRU5UWW5OcjZLbzVsQWVnNXpDOFdZdkMwa0FDVXFyM0h4QUZpVjB1NUEwK2ZXOTRTakZvY1pPeklwMUttRmNPdGpjYWkvcGNmTDh6dU9FOGJ3T0pLWmxLMU5EWnVaSElXM25rOUtzU3pzaTVVdG9tdHRla3Z3ZEZoWndiRUc0N0VhemtwUmJPbXNvMmV1Y1J4QU5UMHQ2UnBsNSs0bHVGeGFNU0w2aWNqZzhSL3FWQlJzdFJiWFVubjFIVUdEOFY0bFd3N0lXUWpXemthMzd6UEp0dlE2U1I2RXRYV0VJbVlYRTVQQThjUjhvQjMrczZHbmlqbEE1UWpJVWw4Q21TUkJsMUNvQ05aTjhQY1hFMXEraU1xN0JyeFdpY1dpdGVDQ3haUkZHeXhSMHdzS3g3MjBtWXhtbGpsOVh5bWV5V2hOYkppOURFUzlhcVc3eVZKVnlzU2RkYmZ0QWFtR2NpNnlVMzRVNkp1d1pyRDU5cHpQaUh4blR3NWFuaHdIclh5bTk4aUhxVCtvOWhDUEV1T2RWOHRBVnVQVTJ4OWwvbWVmWWJBM3hDWEJ0bTFQOEFNeVRUbHN2RjBkVHduaGxiRUFWTVE3T2R4ZllYNkRZVHJzTncxVkZnc0t3Q0lGVUFqUUNHdlVBR2sweFhaTnZvNW5qbE5GV3hHcG5HNGpET25yUzQ5cDNIRWxVM1p5TDdDYzgrRGRyNjJUdk1wTlJackZXakV3ek03QUhXYTJCeHlldE43ZWtEcVlKaTZua2xjZ3VMMkxXMEV4dUsxeWxpbHJrM1k3YW45cEtqS1RGeU5SZEdvSEZpU2ZXQ1EzZnBCT0s0b2dxUU5MS1QySUVGU3VHc1NkZVovRWVzamVVUWRXcUhON0FhQzN1QkJReGxaeWNqMGtkZDRSeEJkMGNzVGNYT3RoOUoydUpjRkNMWEREbFBNT0NjUlNnUjVwc2dRYmEzSjA1VDBuRE1ySWhUNFRZcjdIV2JRVHBoRmtqaExwbFpiaTJ0K2ZmNXp5Zi9BUG9IQ1BKcUt5Q3lNdXRyMnpYMXQwMlV6Mk1rM3NMV0kxNi9LWTNpTGhDVjBOeDZsOVNIb3cyMGxMOHUwYXI0enluaEdJVXFpVldxWkxCVnlBdG11Q0F3THVkUmE1eVdBS3BhR2NacVVYZW5TcTVrZFZ5aXFya3N3TnlRNnM3a1h1YkFtNDAwQTJ6TVZtWTVIcEVWU3lrdXJObDNLbG5SYmdIYlVBR3dnK1A0UldRK29OOFZsWlVjSmNuOUJLam50dE9qdGFKYXBtbC90OVJtQzRhcXJvTWlGWHFLakZudVBSbUF0OE90dFFlUnVJazRxaUtHeE5QL0FKQXd1VVNwUlpHQnV3cTZaWGM2R3d0OEp1ZG9zQncrdGxWNnVGcTFLV2NoOGxJdVNWQkdhNEZteW00dG1YWE1OYm14dkVNZGg2elpEaHFydXhETWdCUjJ1QUZLS3VYS3R3QnFUYlQ0cjZOS3V4TjJ4bjhVMWx6VXNQWHpLMXlqRVppcWt0c0dGaHVTY3hPNDN0TXpoR0VTdFZDWWxuVXVUa3lvVG5Jdm5DZ0N3SUkxTndCTldyNGFwMGFkeDVqVm4xWERKa2FvdHJsbHFWYk1xZ0RxTDZiWE5vOVAwWWZJUjVUdXpNNXB2ZDhwMVJDY3BCQTF1RklVbHJuY1dOcC9yb2Rxdnl0bXkzRHNJNEZDbVZwVktmcUl6S1djQUEyTEhUTnI4SjF2dUpMRWNMcE9tZWxrUjJJQVJtQzlyRDFFRW5RNkhtT3M0ZCtGT2pLeU9jeW02bGxzT296dWpteDJHMnZhV3J4ckUzWHpTU2JXOWFncVYxdXVTeEREcHBwYzlqSWNvUytEVVpyNmFlSndoQkpGMWRUclkyc1I3VFhwWXBxNkJTY3pxTE1EdWVWNXk5RGk3dVNYQXZmY0FLUFlCUUJMTTVCem94QjN1Snl5VFRvNlVyWCttcFR3R1I4enN5NWRRT1U5QTRiVnpvcEhRVGlNSnhGTVVncHV3V3FCWUU2Wi9iK0oxL2d5K1JrYmVtYmZ4YU5MZXpIYWJPZ29VdElSU2VBMXF4SnR0QzhMcUpySHZSRXV0bHRhbmZjUUlpeG1vcXlpdmh4dXMwbEQxRXhrVkRFbittS1UyaWs1TXFrRVkwbk1ZT3kzNVhobU1YWE5LVXNMR09TM3NtUFJVdUdZbllnZDlKWmlzWWxKZFlYWHJDMms1WGo3TTlzbzJCTW5rYTQ0MnV5b0xOMHpLNG5qUFBlMWdMVExSRkJ1TGU4cDg0c3gwTitSbCtHb01wOVFuQkp5ZjZmcDJxS1dqVXd2RWNsc3htdW1NTDZKcDNuTDE2SmZiNjlKWm5zb1JLdVI3ZnErRW4zNVJSNUsxWXBRU1ZtMVhXbW5xcU1DUnRNUGl1TlYvd0JWZ05nUDNuT1l5bmlNNXpzUzMxSHVKVUtiL3FtcWtxMFJqN1pzWW5GNTBDS0w2MzA3VE5QQzZwTjNzUWIrazhoN3l6aDcrVmZNUnFiZ21HdnhiUDZLYTUyYjBpM1ByS2pLdEl5NUVxdG1Ody9oeWh6cjZBT2ZNM3NJUHhURzVXS2czS29iZTJ3aHVPeFNxR0NrRWdoRnk3WFB4TjhoK1pqNVRaMzNzQUIxNVNvMjVYSTVYM1lrUStTcjFDUnJsT2x6WW5lZXk4RGRUVG9oV3VvVVdQeTBuaWxMRmswMnUvckxxUUQwSElDZHo0TTRrNlpRL3dBSjNIOUo2aWF0dEwvTE5JeGJQVUZVWHZ6dGFDWTk4cU1iWElVbTNXd3ZiN1JVc1VwQXNRYjgrc2k3aGlScDM5dG9Ob3BJOGh4UGlIRlVrYWthMVBLKzZBS1Rycllxd3N1cDJNeWEzRkt4UWwxZGdENm1OT2s5Tk9ROUpRamtOYnI4VmgxbmU4ZDROVFFzV1MrWS9GY0hUZjdEOFRtYS9BRkJQbDEyUU5mTXV1VTM2cUNKY2VYeGxPSzdRRTNpUmk2SWpwVFZNNmxrcEJSV0dsa05OTDJ1VkFXMWd0eWI4NTBGTHhNcllmTDVUcmltUmdTQVVDRlNGVXZVdm5ZSDRiWEZ0YjNOak1OdkRLTHU1UE93RnZyYWEyQ3dkTkxaVisxdHVVYjVXdjZpWEduMlVZVTRoMUNPVXRkY3pCRlZ5RjB5M1d3STZYQklIT2ExRGg2TGE0MTVucnpOenorY1M1amV3c0Q4ekp0aHlGR1lrOXB6VGNwZjJadEdsMFF4V0hRMnRiZmxNN0g4UFFjcms2am5hYjlCRnk1c29BR3R6N2I2d0RHWWxTQ2Mzc2R2cDErVXljVXRvMGkyY3A1S081VmQxSlh0bUlsS3N3dXJEdERLZkR3S2hxTTVDZ2hsRzJZam1lbkw2U1QwRFVZc05BWnJtdEpmQWNYdHN4a1UrYXVwSFE5RFBZL0RLTXRNTXh1eEdwNis4ODJUQVhOK1kybnBIaDJzVFJGOXhwTkl0UzBZU1RpYXhHc053ZDRBbFMwUHdDc2ZWeTJtc2FSbEkwMVNUOG9SbE10Qm05R0xabTFhR3BqUTB4U2NVUEppcXB6QW1YVlRYcGY2ZktiQWJyQjhSaGczK2ZpRW8zc2NaVUJZWnlWS2tiVEM0blhZZzVMWEhMWW4ybXBXcW1tdzV5cmlIRDFxZ01wdGZXL1F6bTVZdHhxTDJqbzQyb3l0OUhGQWV2S1Z5c3BPWWN3ZWNzWXU3bS9wUURWanVld21ueFNtaVcwR2M2bHZ6ZnJlY3g0aHg3QkNpWDFHcDZUZ2RxV0xPMWZwV2dIaS9pb1UyeVUxREFhTWI2WDdkWmcxZkV6bTRDRFU3bmxBVFF2dnBMY0p3N093VmQ1MVJqeHhXMFp5VW4wSFlmeEJWYjBsQTQ3QTNFamk2ejFpTXRRaGY2RG9WNis4Nmp3L3drVUFTVGRqdi9BbVp4L0FabnpxbVU3MzJ2OEFJVEpjc012eXFKbHd5U3RQWU54S21xMGx5M1pyMkkzT3VrcE9LWkFVcEFnMjliblFxRHNGQTIrc3BwWXRTTWphbS8zNnpTRk5NaUl0aHJkdHlYNTZtYXAwdG5LMDMvWUdmaHZwUlFTQ3EzSjd2cXg5NWFhUVJiQTMyMTlwbmNUNGdXQlJDUXhQdFlTbkJWV1JDek5uOVFHWG1POGFqSnhzdU1WOEhyMFJuemdiblVBVHJPRVh1cHkyQTNNeWNOaWtPVTJHdlhsN3pZcDRySUNGc2JqODlJcE4xVE5WRkxvdHh2RTJXNnF6QW01c0NSYnBvSUx3WGpXS3B1YmtPaDN6azNBN0dUU2twdXgzUFg5NWZpS3lrZ0pURmxGczEyc2U1dnVma0pLbGlodUNab2NaNHdsUkZMakpZamZVY3hwMTM2UUtoajZTZzVpM3ZsdUxmUGFZZU9RazVtSk50aHlIc0lFMU4yWTVtQlE4ckVINjMxbFJkK2c0VnFqcFg0alROOG9KSFhTVlBqMUdvUHl0L013VndkZ01wS0EvU1ZNalh5czJ2Yzc5NE5YNkNpYTJLOFVpbUxwU0xXdDhUQUQ1V0JtYlY4YXV4QThzSU9xdG1QM0FtTHhhbVZJWW02bjdHQzB5cG0wWVJ4dDdNWlNlVkhTcHhZVmlGOHg3bmNEVDZ5MU1Ccm1OUnZjblg2bWMvaGZRNGRUcktNWmlYZHZVeFBibEUrTzNTTGpOcGJPeFNuUk85UUczZVNGUkFmU3d0T0lwUGFhR0h6SGE4eWx3NCtscmtiT24vd0JVcWtBYm1kVndURittd25GOE53R1lnbWR0Z01PRVVTWTk2Q1hXemR3NHpHYmVCdjEwRXdzQWN4QUU2ZkRVY29uWkNObkxKMFhDSzhrcVJ6cE56RWhhS0xXS0tnc3V0R3RHVWprWksvV01RSmk4SXRRV09oNUhuL2VZYnE5RE1yRE1oNWo4aWROYThoVnBCaFlpNG1jNFh0ZGx3bmpydzh5eDVMYUhrU1JmZVkyT29UMFBpbkJGYmJUb2Y1RTViaUhDM1FHNjNYcU5SOCtuem5pODNET01yUFY0ZWFMVkhGMThNcDVSK0ZKa2ZOMnRDY1RoNnVlNlpRdk1FYW41eXQ2eUlkU0FiMnNZN2xWZDJiSnhaMENZZ0FiL0FPZDREeEdvemdLbzFlNFRUUTlUZnRBS3VKUEtXOEhEczVMTVNCc3Q5QmZYUVNJeHI5RlNkNkJGOE5PcHpaUXg5NW5tazFLNEpZRmpsSlBMa1NCTzh6a0NjcDRsZk5zTmI2ZFpyeGMwcFN4a2MzTHd4eDBZRFlUeTFKTFhOOUpOSEFSZ2ZpdU5UdEI2b1ppTG5iN1NkU20ybWd0YTJnMzA1enZ2NlpScUtwSWlsVTV0UGFhaVloZ0xnL1hXQ0tNdWhYVzMvY3NlaVNvQU5oci9BSVltMHhwZXN1LzNCaVFUcnFOenAzblVVc1FoVVdZYWk0MTNuQVdPYktEK1JlSG9SWUJiM0dwMS9FaVhHbjBWRjJkTGlxZHdUTWhXT2RWMHNUWWttd0E2eTRWYnFEbU55TEgyZ1ZKQ3hBMHpYSjNzTk5wa28xMlU5bldQdzlDZ0M3MitMbmVZcjB2Yk1wdURibU9SdnltMWhxM29BSXN3RXg2cmpPU09zU2JzVkdWeHR5NnVTQm1KdWRPY3dLRk1qY1dtNXhKOXdPWmd5SnpJdVoweG5qRXc1T0xLVmd6MDlBUVpSNUozbW9hQkp2YVgwOEpmbEYvTWtVdU1Dd2xJYzF2TnJENGU0MjlnSXNQZ3UwM3NGZ0wyRnBoUGxjdEkwU1M3THVBNEhNeTV0QmZYMm5TTmhUbnlxRGI5cFp3WGhMOGx0dHFlVTYzQllGVUhWdVovaWI4UEUyclp6YzNJa3dQaFhDOGd1Mi9TYThjTEpBVHNqRlJWSTVYSzNaR1JhT3ppVk94bEVqWm9wVmtNVVdUS29JekF4d1R5TjVpWUhqOUtwWUU1VzZIK1pySzE5UVFmYVNwcVcwRGc0dW1XNXh6MGtLbUlDODd5cXVwWVd2QW1vTU9WL2JXS1VtdWh4aW4yUFdyRmpLakZGT2VWdmJPaFVnREY4SnBWUGlRQTlWOUovdjhBT2N2eFR3UUdaV1J3Y3V3YTRQeUkvaWR0YU1aaytOTjJVcHRhUE84VHdPb2cxUSs0MUgxRUFvSTZOZTJrOVN0S0syRFIvaVJUN2dmbVlTLzQ3LzZzNkkvOGo2amhHNGtBTlFlMDV2aWpsenp0cVo2ZmlQRDFGdGdWOWovTjVsWWp3Z0Q4TC9VZnVKRWVLVUhkV2FQbWpKVWVhMHloYklZYVhWUllMYzk5ZmEwNnVyNFBjRzRDSDUyUDNFRXErR3F3L3dER1Q3RlQrODBsS1h4aWk0L1VjazRkdWV4T252dkNuVStXVHBjMnZOV3Z3R3FQL0cveVVtVU53dXFGeWxIQTVlbHZ4OVpTbURTOE1LblFLZXMyT1lHdzMwNzlKTkZ2c1BrYmZtR1ZlSHVMK2xoYTFoWnJzT3hBdHk3UWZ5bnZvclhHM3BPdDk3NlRaU3ZaRlVDVmE1ekFYdDF0OXRvZmhxQk5pTjkrZHh5c2Z6cDFpdzNDM1BxS01TZi9BRk0xY0h3MnFQME9mL3EzOFRPYzEwaW9yMWczbVBiS3ozdHl1QVNQZVJiNlRXWGdGWmpmeW0rZGgrWVhTOE1WVHVvSHVSKzB5dCtJdTRydG5NMUtRWUFBWDVrNi9TMHVvNEF6cjZIaGtqNG5VZXd2RDZQQWFZM0xIN0Q3UjF5UzhJYzRvNDVNQUJ2TkRDY0pkL2hRbnZhdytwblg0ZkJJbndvUGUxejlURFZFcVBEL0FPbVpTNWZpTURCZUhiYXV3OWwva3pvdUc4UFFHd0g4bjV4QlpiVE9VM0U2SXhqSHd4bEp0Ry9RcEJSWUNYVEhUSGtTNU1kMW5VcHhPWndrYUJlVk04cVI4d3Z5amxnTlNRQkhaTkU1Q3ZXQ2k1K25NL3hBTVp4WkVCc2ZuT0k0MTRzMUlTN0hyeUg4eUpTOFcyYVJoZTJkbTNHT3dqVHpIL2ZITzRhS1RVL3BYNU5hL2FGWWJpVlNuOExuMjNFemFibnBMd2I4L3dCNXlSYlhSMnlTZloxR0Y4VThxaWZNVFl3M0ZLVC9BQXVQWTZUejBuckVHdHFOK3h0TlZ6TmRtRXVHUGg2V3lCdVFQZVZQaCtoK3M0YkRjWXJKc3hQWTZ6V3czaW8vclQ1aWFLY1pHYjQ1TG8zbVE5SlVaWGh1TzBYc0N3SHZERnJJMnpBOU5ZM0ZWb1Z0ZG9GdEdNTThvR1FOQVNjUXNGTVZwYzJINkdWK1UwV0k4aUJFUWpsRDBqR0xFZVJKWTlwV0RIekdMRUxKT2c2Q1VHbU9rc0xHUk1LS3NnVkVZckxESWtRb0xJUm1XVHl4c2hpcGhaVmtqaFpjS1I2U2EwTzRqcGhaU0ZraExpZ0hPUUxLSTZGWWxFa0ZsYllwRjZmT0I0anhIVHAvclVXajBGTTFGb3QwdDc2U1pWRitKaDdEWDh6aStJK09rL1NTM3R0T2V4WGkybytpK244eDVmQXdiUFRNWHh0RUdoQTdrem1PSmVMQWJoVG1QMm5DVnNhN24xTVQ3bU1qeVhOdnMwanhwR3hqT0pQVVBxYlRvSlRUYjZRRXQ3eXhYUE80aEdWZERjVjZhWG5DS0I1NHBlYkl3ajhOaEszWGVXZ3hSVGpPbGlMU0diMitrZUtXU3hCdWtZNGkyNGlpZ0JFc0QvaGppdTY3RWo1eG9vSmcwZ21qeDZzbXVhL3ZEYVhqRi8xQzhVVTBqSm1jb1JEYVBpOWVhbUgwZkVsSmlOKytoaWltaWJNbkZCQTR5aE81K2hscmNSUS85R0tLTmlSSC9WTC9BSmVPTVFJOFVUQXNUR0tBZE9rWjhjdlQ3UlJTZlFSRmNTditYaU9MVVgvdkZGR0NBNjNGRUgvUmdyZUlVVyt2MlA4QUVVVUNrZ0N2NHFRY3o5RE16RWVOa1hZTVlvb0RTUmwxdkg1L1NuMW1aaVBHbUliYXdpaWdobVZYNHpYcWZFNStzRmFveDFMRXhvb01vbWc3eS95eU84ZUtKakpLZTB2UWlLS1N5eXdHM09XSzU2eFJSTVJaYzlZb29vQWYvOWs9XCIsXG4gICAgICBwcmljZTogMTAsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkdyaWxsZWQgUGxhaWNlXCIsXG4gICAgICBpbWFnZTpcbiAgICAgICAgXCJodHRwczovL2kuZ3VpbS5jby51ay9pbWcvbWVkaWEvYTFhZmFmOTI3Yjg0ZjIxZDE2ZjBmNzgwMjNhZDEyOTNmNzM4Yzk4Yi8wXzE4MzBfNDgyMl8yODkxL21hc3Rlci80ODIyLmpwZz93aWR0aD0xMjAwJmhlaWdodD05MDAmcXVhbGl0eT04NSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZzPTc1YmIzYzdiYTkzYjY1ZmRhOWI1YzE2ZTc0MTU2YjdjXCIsXG4gICAgICBwcmljZTogMTIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkZyaWVkIFdoaXRpbmdcIixcbiAgICAgIGltYWdlOlxuICAgICAgICBcImh0dHBzOi8vd3d3LnNhdm9yeXRob3VnaHRzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMi9GcmllZC1XaGl0aW5nLUZpc2gtUmVjaXBlLTUwMHg0MjAuanBnXCIsXG4gICAgICBwcmljZTogOCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiRnJpZWQgU3RyaXBlZCBNdWxsZXRcIixcbiAgICAgIGltYWdlOlxuICAgICAgICBcImh0dHBzOi8vbWVkaWEtY2RuLnRyaXBhZHZpc29yLmNvbS9tZWRpYS9waG90by1zLzE0LzNmL2Q0LzY5L3N0cmlwZWQtbXVsbGV0LmpwZ1wiLFxuICAgICAgcHJpY2U6IDksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlNvbGUgRmlzaCB3aXRoIEJ1dHRlclwiLFxuICAgICAgaW1hZ2U6XG4gICAgICAgIFwiaHR0cHM6Ly9sb3ZlaW5jb3Jwb3JhdGVkLmJsb2IuY29yZS53aW5kb3dzLm5ldC9jb250ZW50aW1hZ2VzL21haW4vcmFjaGVsK2FsbGVuK2Jha2VkK2RvdmVyK3NvbGUrb3JpZ2luYWwraW1hZ2UuanBnXCIsXG4gICAgICBwcmljZTogMTQsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkZyaWVkIEFuY2hvdnlcIixcbiAgICAgIGltYWdlOlxuICAgICAgICBcImh0dHBzOi8vd3d3LmhhcHB5Zm9vZHN0dWJlLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wNC9mcmllZC1hbmNob3ZpZXMtMi5qcGdcIixcbiAgICAgIHByaWNlOiAxMyxcbiAgICB9LFxuICBdO1xuXG4gIG1lbnUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgaXRlbUNhcmQuY2xhc3NMaXN0LmFkZChcIml0ZW0tY2FyZFwiKTtcbiAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwiaXRlbS1uYW1lXCIpO1xuICAgIGl0ZW1JbWFnZS5jbGFzc0xpc3QuYWRkKFwiaXRlbS1pbWFnZVwiKTtcbiAgICBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZChcIml0ZW0tcHJpY2VcIik7XG5cbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICBpdGVtSW1hZ2UuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtpdGVtLmltYWdlfVwiIGFsdD1cIiR7aXRlbS5uYW1lfVwiIC8+YDtcbiAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBcIiRcIiArIGl0ZW0ucHJpY2U7XG5cbiAgICBpdGVtQ2FyZC5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgaXRlbUNhcmQuYXBwZW5kQ2hpbGQoaXRlbUltYWdlKTtcbiAgICBpdGVtQ2FyZC5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuXG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoaXRlbUNhcmQpO1xuICB9KTtcblxuICByZXR1cm4gbWVudVNlY3Rpb247XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZE5hdmJhcigpIHtcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgaG9tZUJ1dHRvbi5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNcIj5Ib21lPC9hPic7XG4gIG1lbnVCdXR0b24uaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIjXCI+TWVudTwvYT4nO1xuICBjb250YWN0QnV0dG9uLmlubmVySFRNTCA9ICc8YSBocmVmPVwiI1wiPkNvbnRhY3Q8L2E+JztcbiAgaG9tZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWUtYnV0dG9uXCIpO1xuICBtZW51QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS1idXR0b25cIik7XG4gIGNvbnRhY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LWJ1dHRvblwiKTtcblxuICB1bC5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgdWwuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gIHVsLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQodWwpO1xuXG4gIHJldHVybiBuYXZiYXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRIZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCB7IGxvYWRNYWluUGFydCB9IGZyb20gXCIuL21haW5cIjtcbmltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBsb2FkQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCB7IGxvYWROYXZiYXIgfSBmcm9tIFwiLi9uYXZiYXJcIjtcblxuZnVuY3Rpb24gaW5pdGlhbExvYWQobG9hZFBhZ2UpIHtcbiAgY29uc3QgaGVhZGVyID0gbG9hZEhlYWRlcigpO1xuICBjb25zdCBtYWluID0gbG9hZE1haW5QYXJ0KGxvYWRQYWdlKTtcbiAgY29uc3QgbmF2YmFyID0gbG9hZE5hdmJhcigpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2YmFyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJNYWluQ29udGVudCgpIHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgbWFpbkNvbnRlbnQucmVtb3ZlKCk7XG59XG5cbmluaXRpYWxMb2FkKGxvYWRIb21lKTtcblxuY29uc3QgaG9tZU1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtYnV0dG9uXCIpO1xuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1idXR0b25cIik7XG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LWJ1dHRvblwiKTtcblxuaG9tZU1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xlYXJNYWluQ29udGVudCgpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGxvYWRNYWluUGFydChsb2FkSG9tZSkpO1xufSk7XG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xlYXJNYWluQ29udGVudCgpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGxvYWRNYWluUGFydChsb2FkTWVudSkpO1xufSk7XG5cbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xlYXJNYWluQ29udGVudCgpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGxvYWRNYWluUGFydChsb2FkQ29udGFjdCkpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9