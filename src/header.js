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

export { loadHeader };
