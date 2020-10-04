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
  copy.appendChild(createMenu());
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
  const menu = document.createElement("div");
  const options = [
    {
      name: "Salad & Shrimp",
      price: "£10.00",
      description: "A beautiful mix of grilled shrimp and vegetables.",
    },
    {
      name: "Salad & Shrimp",
      price: "£10.00",
      description: "A beautiful mix of grilled shrimp and vegetables.",
    },
    {
      name: "Salad & Shrimp",
      price: "£10.00",
      description: "A beautiful mix of grilled shrimp and vegetables.",
    },
    {
      name: "Salad & Shrimp",
      price: "£10.00",
      description: "A beautiful mix of grilled shrimp and vegetables.",
    },
    {
      name: "Salad & Shrimp",
      price: "£10.00",
      description: "A beautiful mix of grilled shrimp and vegetables.",
    },
  ];
  options.forEach((option) => menu.appendChild(createOption(option)));
  return menu;
}

function createOption(optionObj) {
  const option = document.createElement("div");
  option.setAttribute("class", "meal-container");

  const optionHeader = document.createElement("div");
  optionHeader.setAttribute("class", "meal-header");

  const title = document.createElement("div");
  title.textContent = optionObj.name;
  title.setAttribute("class", "meal-title");

  const price = document.createElement("div");
  price.textContent = optionObj.price;
  price.setAttribute("class", "meal-price");

  optionHeader.appendChild(title);
  optionHeader.appendChild(price);

  const description = document.createElement("p");
  description.textContent = optionObj.description;
  description.setAttribute("class", "meal-desc");

  option.appendChild(optionHeader);
  option.appendChild(description);

  return option;
}

export { menuContent };
