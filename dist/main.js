!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(){const e=document.createElement("section");return e.setAttribute("class","general-content"),e.appendChild(function(){const e=document.createElement("div");e.setAttribute("class","copy container"),e.appendChild(function(){const e=document.createElement("h1"),t=document.createElement("span");return t.setAttribute("class","brand"),t.textContent="munch",e.innerHTML=`Come and have a ${t.outerHTML}!`,e}());const t=document.createElement("p");t.textContent="Live a healthy lifestyle with with our organic range of dishes.",e.appendChild(t);const n=document.createElement("button");return n.textContent="Book Now!",e.appendChild(n),e}()),e}function r(){const e=document.createElement("section");return e.setAttribute("class","general-content"),e.appendChild(function(){const e=document.createElement("div");return e.setAttribute("class","copy container"),e.appendChild(function(){const e=document.createElement("h1"),t=document.createElement("span");return t.setAttribute("class","brand"),t.textContent="munch",e.innerHTML=`Who are the ${t.outerHTML} family?`,e}()),e.appendChild(function(){const e=document.createElement("p");return e.textContent="Looking for feel-good healthy food? We've got you covered!",e}()),e.appendChild(function(){const e=document.createElement("p");return e.textContent="Pop in to try out our delicious range. Our mouth-watering plant-based menu has something for everyone!",e}()),e.appendChild(function(){const e=document.createElement("p");return e.textContent="Contact us now at restaurant@munch.com!",e}()),e}()),e}function c(){const e=document.createElement("section");return e.setAttribute("class","general-content"),e.appendChild(function(){const e=document.createElement("div");e.setAttribute("class","copy container"),e.appendChild(function(){const e=document.createElement("h1"),t=document.createElement("span");return t.setAttribute("class","brand"),t.textContent="munch",e.innerHTML=`What's on the ${t.outerHTML} menu?`,e}());const t=document.createElement("div");return e.appendChild(t),e}()),e}n.r(t);const{main:u,links:i}=function(){const e=document.querySelector("#content"),{nav:t,links:n}=function(){const e=document.createElement("nav");e.setAttribute("class","container"),e.appendChild(function(){const e=document.createElement("a");e.setAttribute("href","#");const t=document.createElement("img");return t.setAttribute("src","../images/logo.png"),t.setAttribute("alt","munch"),e.appendChild(t),e}());const t=function(){const e=document.createElement("ul");return["Home","Menu","About","Book"].forEach(t=>{e.appendChild(function(e){const t=document.createElement("li");let n;"Book"===e?n=document.createElement("button"):(n=document.createElement("a"),n.setAttribute("href","#"));return n.textContent=e,t.appendChild(n),t}(t))}),e}();return e.appendChild(t),{nav:e,links:t}}();e.appendChild(t);const o=document.createElement("main");return e.appendChild(o),{main:o,links:n}}();u.appendChild(o());const a=Array.from(i.children).slice(0,3);function l(e){u.innerHTML="",a.forEach(e=>e.removeAttribute("class","active")),e.target.innerHTML.includes("Home")?(d("Home"),u.appendChild(o())):e.target.innerHTML.includes("Menu")?(d("Menu"),u.appendChild(c())):e.target.innerHTML.includes("About")&&(d("About"),u.appendChild(r()))}function d(e){a.filter(t=>t.innerHTML.includes(e))[0].setAttribute("class","active")}a[0].setAttribute("class","active"),a.forEach(e=>e.addEventListener("click",l))}]);