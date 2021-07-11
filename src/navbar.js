export function loadNavbar() {
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
