!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e){e.exports=JSON.parse("{}")},function(e,t,n){"use strict";function o(e,t){const n=document.querySelector(e),o=document.createElement("p");o.classList.add("subtitle--second","form__tooltip"),n&&n.addEventListener("submit",e=>{e.preventDefault();const r=new FormData(n),l=Object.fromEntries(r.entries());fetch(t,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(l)}).then(e=>e.json()).then(e=>{e.message&&(o.textContent=e.message,n.appendChild(o),setTimeout(()=>{n.removeChild(o)},3e3)),e.token&&(localStorage.setItem("token",e.token),document.location.href="/")}).catch(e=>console.log(e)),n.reset()})}n.r(t);var r={SERVER_URL:"http://localhost:8080"};n(0);window.addEventListener("DOMContentLoaded",()=>{new Swiper(".testimonials__slider",{spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".testimonials__slider-button-next",prevEl:".testimonials__slider-button-prev"},speed:700,loop:!0,delay:3e3,disableOnInteraction:!1});localStorage.getItem("token")&&document.querySelectorAll(".auth-page main").forEach(e=>{e.style.display="none"}),function(e,t,n){const o=document.querySelectorAll(e),r=document.querySelectorAll(t);let l=[];o.forEach(e=>{e.addEventListener("click",e=>{const t=e.target,o=t.dataset.category;t.classList.toggle(n),t.classList.contains(n)&&!l.includes(o)?l.push(o):l=l.filter(e=>e!==o),r.forEach(e=>{l.includes(e.dataset.category)||l.includes("All")||!l.length?e.style.display="flex":e.style.display="none"}),console.log(l)})})}(".blog-main__category",".blog-main__preview","category--active"),function(e,t,n,o){const r=document.querySelector(e),l=document.querySelector(t),a=document.querySelectorAll(n);l&&l.addEventListener("click",()=>{a.forEach(e=>{e.querySelector(o).textContent.toLowerCase().includes(r.value.toLowerCase())?e.style.display="flex":e.style.display="none"})}),r&&r.addEventListener("input",()=>{r.value.length||a.forEach(e=>{e.style.display="flex"})})}(".blog-main__search-form-input",".blog-main__search-form-btn",".blog-main__preview",".preview__title"),function(e,t,n){const o=document.querySelector(e),r=document.querySelector(t),l=r.querySelector("form");o&&o.addEventListener("click",e=>{e.preventDefault(),r.classList.toggle(n)}),l&&l.addEventListener("submit",()=>{setTimeout(()=>r.classList.remove(n),3e3)}),document.body.addEventListener("click",e=>{e.target===r&&r.classList.contains(n)&&r.classList.remove(n)})}(".header__btn",".get-demo-modal","get-demo-modal--active"),function(e,t,n,o){const r=document.querySelector(e),l=document.querySelector(t);r&&r.addEventListener("click",()=>{r.classList.toggle(n),r.classList.contains(n)?l.classList.add(o):l.classList.remove(o)})}(".header__burger-btn",".header__menu","burger-btn--active","header__menu--active"),function(e,t,n,o){const r=document.querySelectorAll(e),l=document.querySelectorAll(t);r&&r.forEach((e,t)=>{e.addEventListener("click",()=>{e.classList.toggle(n),e.classList.contains(n)?l[t].classList.add(o):l[t].classList.remove(o)})})}(".footer__navbar-title",".footer__navbar-list","footer__navbar-title--active","footer__navbar-list--active"),o(".demo-form",r.SERVER_URL+"/get-demo"),o(".sign-up-form",r.SERVER_URL+"/auth/sign-up"),o(".sign-in-form",r.SERVER_URL+"/auth/sign-in"),o(".recover-form",r.SERVER_URL+"/auth/recover")})}]);