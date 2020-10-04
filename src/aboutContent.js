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
  const subhead = document.createElement("p");
  subhead.textContent = "We are people.";
  copy.appendChild(subhead);
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

export { aboutContent };
