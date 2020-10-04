import { pageFrame } from "./pageFrame.js";
import { homeContent } from "./homeContent.js";
import { aboutContent } from "./aboutContent.js";
import { menuContent } from "./menuContent.js";

const { main, links } = pageFrame();
main.appendChild(homeContent());

// extract home, menu & about page from the page links
const tabs = Array.from(links.children).slice(0, 3);

// set homepage to active
tabs[0].setAttribute("class", "active");

// add event listener to each tab link
tabs.forEach((tab) => tab.addEventListener("click", changeTab));

// change the currently active tab and the page contents
function changeTab(e) {
  main.innerHTML = "";
  tabs.forEach((tab) => tab.removeAttribute("class", "active"));
  if (e.target.innerHTML.includes("Home")) {
    setActiveTab("Home");
    main.appendChild(homeContent());
  } else if (e.target.innerHTML.includes("Menu")) {
    setActiveTab("Menu");
    main.appendChild(menuContent());
  } else if (e.target.innerHTML.includes("About")) {
    setActiveTab("About");
    main.appendChild(aboutContent());
  }
}

// set the tab with the provided name as the active tab
function setActiveTab(tabName) {
  const tab = tabs.filter((tab) => tab.innerHTML.includes(tabName))[0];
  tab.setAttribute("class", "active");
}
