// create the homepage content
function menuContent() {
  const menu = document.createElement("section");
  menu.setAttribute("class", "general-content");
  menu.appendChild(createCopy());
  return menu;
}

// create the page copy
function createCopy() {
  const copy = document.createElement("div");
  copy.setAttribute("class", "copy container");
  copy.appendChild(createHeadline());
  const menu = createMenu();
  copy.appendChild(menu);
  return copy;
}

// create headline
function createHeadline() {
  const headline = document.createElement("h1");
  const brandName = document.createElement("span");
  brandName.setAttribute("class", "brand");
  brandName.textContent = "munch";
  headline.innerHTML = `What's on the ${brandName.outerHTML} menu?`;
  return headline;
}

// create menu
function createMenu() {
  return document.createElement("div");
}

export { menuContent };
