export function loadMainPart(loadSelectedSection) {
  const main = document.createElement("main");
  const pageImage = document.createElement("div");
  const image = document.createElement("img");
  const mainContent = document.createElement("div");
  const selectedSection = loadSelectedSection();

  mainContent.setAttribute("id", "main-content");
  image.src =
    "https://cdn.otelleri.net/landing/marmaris/gezi-rehberi/marmaris-kalabalik-meyhane-1259-53.jpg";
  image.setAttribute("alt", "seaside restaurant image");
  mainContent.setAttribute("id", "main-content");
  pageImage.setAttribute("id", "page-image");

  mainContent.appendChild(selectedSection);
  pageImage.appendChild(image);
  main.appendChild(pageImage);
  main.appendChild(mainContent);

  return main;
}
