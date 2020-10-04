import { pageFrame } from "./pageFrame.js";
import { homeContent } from "./homeContent.js";

const { main, links } = pageFrame();
main.appendChild(homeContent());
