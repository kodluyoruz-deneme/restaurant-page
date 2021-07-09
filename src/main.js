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

export { main };
