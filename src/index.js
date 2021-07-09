import { loadHeader } from "./header";
import { main } from "./main";

function initialLoad() {
  const header = loadHeader();
  const content = document.getElementById("content");
  content.appendChild(header);
  content.appendChild(main);
}

initialLoad();
