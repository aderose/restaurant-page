function pageFrame() {
  const content = document.querySelector("#content");
  const nav = createNav();
  content.appendChild(nav);
  const main = createMain();
  content.appendChild(main);
  return main;
}

// create hero section
function createMain() {
  return document.createElement("main");
}

// create navigation at top of page
function createNav() {
  const nav = document.createElement("nav");
  nav.setAttribute("class", "container");

  // logo creation
  nav.appendChild(createLogo());

  // nav link creation
  nav.appendChild(createLinks());
  return nav;
}

// create HTML element containing a clickable image
function createLogo() {
  const logoLink = document.createElement("a");
  logoLink.setAttribute("href", "#");
  const logoImg = document.createElement("img");
  logoImg.setAttribute("src", "../images/logo.png");
  logoImg.setAttribute("alt", "munch");
  logoLink.appendChild(logoImg);
  return logoLink;
}

// create a list of links
function createLinks() {
  const links = document.createElement("ul");
  ["Home", "Menu", "About", "Book"].forEach((linkText) => {
    links.appendChild(createLink(linkText));
  });
  return links;
}

function createLink(text) {
  const link = document.createElement("li");
  let childEl;
  if (text === "Book") {
    childEl = document.createElement("button");
  } else {
    childEl = document.createElement("a");
    childEl.setAttribute("href", "#");
  }
  childEl.textContent = text;
  link.appendChild(childEl);
  return link;
}

export { pageFrame };
