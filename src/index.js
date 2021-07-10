import { loadHeader } from "./header";
import { loadMainPart } from "./main";
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

function initialLoad(loadPage) {
  const header = loadHeader();
  const main = loadMainPart(loadPage);
  const content = document.getElementById("content");
  content.appendChild(header);
  content.appendChild(main);
}

function clearPage() {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  header.remove();
  main.remove();
}

initialLoad(loadHome);

const homeMenuButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const contactButton = document.getElementById("contact-button");

homeMenuButton.addEventListener("click", () => {
  clearPage();
  initialLoad(loadHome);
});

menuButton.addEventListener("click", () => {
  clearPage();
  initialLoad(loadMenu);
});

contactButton.addEventListener("click", () => {
  console.log("clicked");
  clearPage();
  initialLoad(loadContact);
});
