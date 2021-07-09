import { loadHeader } from "./header";
import { loadMainPart } from "./main";
import { loadHome } from "./home";
import { loadMenu } from "./menu";

function initialLoad() {
  const header = loadHeader();
  const main = loadMainPart(loadMenu);
  const content = document.getElementById("content");
  content.appendChild(header);
  content.appendChild(main);
}

initialLoad();
