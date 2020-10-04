// create the homepage content
function homeContent() {
  const home = document.createElement("section");
  home.setAttribute("class", "hero");
  home.appendChild(createCopy());
  return home;
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

export { homeContent };
