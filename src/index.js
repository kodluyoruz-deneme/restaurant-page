import { loadHeader } from "./header";
import { loadMainPart } from "./main";
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";
import { loadNavbar } from "./navbar";

function initialLoad(loadPage) {
  const header = loadHeader();
  const main = loadMainPart(loadPage);
  const navbar = loadNavbar();
  const content = document.getElementById("content");
  content.appendChild(header);
  content.appendChild(navbar);
  content.appendChild(main);
}

function clearMainContent() {
  const mainContent = document.querySelector("main");
  mainContent.remove();
}

initialLoad(loadHome);

const homeMenuButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const contactButton = document.getElementById("contact-button");

homeMenuButton.addEventListener("click", () => {
  clearMainContent();
  content.appendChild(loadMainPart(loadHome));
});

menuButton.addEventListener("click", () => {
  clearMainContent();
  content.appendChild(loadMainPart(loadMenu));
});

contactButton.addEventListener("click", () => {
  clearMainContent();
  content.appendChild(loadMainPart(loadContact));
});
