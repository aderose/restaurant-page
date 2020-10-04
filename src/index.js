import { pageFrame } from "./pageFrame.js";
import { homeContent } from "./homeContent.js";

const { main, links } = pageFrame();
main.appendChild(homeContent());

// extract home, menu & about page from the page links
const tabs = Array.from(links.children).slice(0, 3);

// set homepage to active
tabs[0].setAttribute("class", "active");

// add event listener to each tab link
tabs.forEach((link) => link.addEventListener("click", changeTab));

function changeTab(e) {
  console.log(e.target);
}
