// create the homepage content
function aboutContent() {
  const about = document.createElement("section");
  about.setAttribute("class", "general-content");
  about.appendChild(createCopy());
  return about;
}

// create the page copy
function createCopy() {
  const copy = document.createElement("div");
  copy.setAttribute("class", "copy container");
  copy.appendChild(createHeadline());
  copy.appendChild(createSubheadline());
  copy.appendChild(createDescription());
  copy.appendChild(createContact());
  return copy;
}

// create headline
function createHeadline() {
  const headline = document.createElement("h1");
  const brandName = document.createElement("span");
  brandName.setAttribute("class", "brand");
  brandName.textContent = "munch";
  headline.innerHTML = `Who are the ${brandName.outerHTML} family?`;
  return headline;
}

function createSubheadline() {
  const subhead = document.createElement("p");
  subhead.textContent =
    "Looking for feel-good healthy food? We've got you covered!";
  return subhead;
}

function createDescription() {
  const desc = document.createElement("p");
  desc.textContent =
    "Pop in to try out our delicious range. Our mouth-watering plant-based menu has something for everyone!";
  return desc;
}

function createContact() {
  const contact = document.createElement("p");
  contact.textContent = "Contact us now at restaurant@munch.com!";
  return contact;
}

export { aboutContent };
