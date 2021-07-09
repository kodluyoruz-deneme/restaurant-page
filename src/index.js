import { loadHeader } from "./header";
import { loadMainPart } from "./main";
import { loadHome } from "./home";

function initialLoad() {
  const header = loadHeader();
  const main = loadMainPart(loadHome);
  const content = document.getElementById("content");
  content.appendChild(header);
  content.appendChild(main);
}

initialLoad();
