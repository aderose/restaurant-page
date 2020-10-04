function homePage() {
  const content = document.querySelector("#content");
  content.appendChild(createNav());
  content.appendChild(createHero());
}

// create hero section
function createHero() {
  const main = document.createElement("main");
  const hero = document.createElement("section");
  hero.setAttribute("class", "hero");
  hero.appendChild(createCopy());
  main.appendChild(hero);
  return main;
}

// create the page copy
function createCopy() {
  const copy = document.createElement("div");
  copy.setAttribute("class", "copy container");
  copy.appendChild(createHeadline());
  const subhead = document.createElement("p");
  subhead.textContent =
    "Live a healthy lifestyle with with our organic range of dishes.";
  copy.appendChild(subhead);
  const cta = document.createElement("button");
  cta.textContent = "Book Now!";
  copy.appendChild(cta);
  return copy;
}

// create headline
function createHeadline() {
  const headline = document.createElement("h1");
  const brandName = document.createElement("span");
  brandName.setAttribute("class", "brand");
  brandName.textContent = "munch";
  headline.innerHTML = `Come and have a ${brandName.outerHTML}!`;
  return headline;
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

export { homePage };
