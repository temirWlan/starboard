/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/js/components/articles-list-item.js":
/*!********************************************************!*\
  !*** ./app/assets/js/components/articles-list-item.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArticlesListItem; });
function ArticlesListItem(props) {
  const {
    title,
    desc,
    imgSrc,
    altImg,
    meta: {
      tag,
      date
    }
  } = props;
  const link = `/${title.toLowerCase().replace(" ", "-")}`;
  return `
        <li class="articles__list-item">
            <a class="articles__list-item-link" href="${link}">
                <div class="articles__list-item-image-block">
                    <img class="articles__list-item-image" src="${imgSrc}" alt="${altImg}">
                </div>
                <div class="articles__list-item-text">
                    <div class="articles__list-item-meta item__meta">
                        <span class="articles__list-item-tag item__tag">${tag}</span>
                        <span class="articles__list-item-date item__date">${date}</span>
                    </div>
                    <h5 class="articles__list-item-title">${title}</h5>
                    <p class="articles__list-item-desc item__desc">${desc}</p>
                </div>
            </a>
        </li>
    `;
}

/***/ }),

/***/ "./app/assets/js/components/preview.js":
/*!*********************************************!*\
  !*** ./app/assets/js/components/preview.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Preview; });
function Preview(props) {
  const {
    title,
    desc,
    imgSrc,
    altImg,
    meta: {
      tag,
      date
    }
  } = props;
  const link = `/${title.toLowerCase().replace(" ", "-")}`;
  return `    
        <li class="blog-main__preview preview" data-category="${tag}">
            <a class="preview__link" href="${link}">
                <div class="preview__image-block">
                    <img class="preview__image" src="${imgSrc}" alt="${altImg}">
                </div>
                <div class="preview__text">
                    <div class="preview__meta item__meta">
                        <span class="preview__tag item__tag">${tag}</span>
                        <span class="preview__date item__date">${date}</span>
                    </div>
                    <h3 class="preview__title item__title item__title--second">${title}</h3>
                    <p class="preview__desc item__desc">${desc}</p>
                </div>
            </a>
        </li>
    `;
}

/***/ }),

/***/ "./app/assets/js/components/sidebar-preview.js":
/*!*****************************************************!*\
  !*** ./app/assets/js/components/sidebar-preview.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SidebarPreview; });
function SidebarPreview(props) {
  const {
    title,
    desc,
    meta: {
      tag,
      date
    }
  } = props;
  const link = `/${title.toLowerCase().replace(" ", "-")}`;
  return `
        <li class="blog-main__sidebar-preview sidebar-preview">
            <a class="sidebar-preview__link" href="${link}">
                <div class="sidebar-preview__meta item__meta">
                    <span class="sidebar-preview__tag item__tag">${tag}</span>
                    <span class="sidebar-preview__date item__date">${date}</span>
                </div>
                <h3 class="sidebar-preview__title item__title item__title--second">${title}</h3>
                <p class="sidebar-preview__desc item__desc">${desc}</p>
            </a>
        </li>
    `;
}

/***/ }),

/***/ "./app/assets/js/config.js":
/*!*********************************!*\
  !*** ./app/assets/js/config.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const config = {
  SERVER_URL: "http://localhost:8080"
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./app/assets/js/main.js":
/*!*******************************!*\
  !*** ./app/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_articles_list_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/articles-list-item */ "./app/assets/js/components/articles-list-item.js");
/* harmony import */ var _components_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/preview */ "./app/assets/js/components/preview.js");
/* harmony import */ var _components_sidebar_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar-preview */ "./app/assets/js/components/sidebar-preview.js");
/* harmony import */ var _modules_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/categories */ "./app/assets/js/modules/categories.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/search */ "./app/assets/js/modules/search.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/form */ "./app/assets/js/modules/form.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/modal */ "./app/assets/js/modules/modal.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu */ "./app/assets/js/modules/menu.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/accordion */ "./app/assets/js/modules/accordion.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config */ "./app/assets/js/config.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data.json */ "./data.json", 1);











window.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".testimonials__slider", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".testimonials__slider-button-next",
      prevEl: ".testimonials__slider-button-prev"
    },
    speed: 700,
    loop: true,
    delay: 3000,
    disableOnInteraction: false
  });
  if (localStorage.getItem("token")) {
    document.querySelectorAll(".auth-page main").forEach(item => {
      item.style.display = "none";
    });
  }
  Object(_modules_categories__WEBPACK_IMPORTED_MODULE_3__["default"])(".blog-main__category", ".blog-main__preview", "category--active");
  Object(_modules_search__WEBPACK_IMPORTED_MODULE_4__["default"])(".blog-main__search-form-input", ".blog-main__search-form-btn", ".blog-main__preview", ".preview__title");
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_6__["default"])(".header__btn", ".get-demo-modal", "get-demo-modal--active");
  Object(_modules_menu__WEBPACK_IMPORTED_MODULE_7__["default"])(".header__burger-btn", ".header__menu", "burger-btn--active", "header__menu--active");
  Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_8__["default"])(".footer__navbar-title", ".footer__navbar-list", "footer__navbar-title--active", "footer__navbar-list--active");
  Object(_modules_form__WEBPACK_IMPORTED_MODULE_5__["default"])(".demo-form", `${_config__WEBPACK_IMPORTED_MODULE_9__["default"].SERVER_URL}/get-demo`);
  Object(_modules_form__WEBPACK_IMPORTED_MODULE_5__["default"])(".sign-up-form", `${_config__WEBPACK_IMPORTED_MODULE_9__["default"].SERVER_URL}/auth/sign-up`);
  Object(_modules_form__WEBPACK_IMPORTED_MODULE_5__["default"])(".sign-in-form", `${_config__WEBPACK_IMPORTED_MODULE_9__["default"].SERVER_URL}/auth/sign-in`);
  Object(_modules_form__WEBPACK_IMPORTED_MODULE_5__["default"])(".recover-form", `${_config__WEBPACK_IMPORTED_MODULE_9__["default"].SERVER_URL}/auth/recover`);
});

/***/ }),

/***/ "./app/assets/js/modules/accordion.js":
/*!********************************************!*\
  !*** ./app/assets/js/modules/accordion.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toggleAccordion; });
/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle */ "./app/assets/js/modules/toggle.js");

function toggleAccordion(triggerSelector, itemSelector, triggerActiveClass, itemActiveClass) {
  const triggers = document.querySelectorAll(triggerSelector);
  const items = document.querySelectorAll(itemSelector);
  if (triggers) {
    triggers.forEach((trigger, idx) => {
      trigger.addEventListener("click", () => {
        trigger.classList.toggle(triggerActiveClass);
        if (trigger.classList.contains(triggerActiveClass)) {
          items[idx].classList.add(itemActiveClass);
        } else {
          items[idx].classList.remove(itemActiveClass);
        }
      });
    });
  }
}

/***/ }),

/***/ "./app/assets/js/modules/categories.js":
/*!*********************************************!*\
  !*** ./app/assets/js/modules/categories.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return filterByCategory; });
function filterByCategory(triggerSelector, itemSelector, triggerActiveClass) {
  const triggers = document.querySelectorAll(triggerSelector);
  const items = document.querySelectorAll(itemSelector);
  let activeCategories = [];
  triggers.forEach(trigger => {
    trigger.addEventListener("click", e => {
      const target = e.target;
      const category = target.dataset.category;
      target.classList.toggle(triggerActiveClass);
      if (target.classList.contains(triggerActiveClass) && !activeCategories.includes(category)) {
        activeCategories.push(category);
      } else {
        activeCategories = activeCategories.filter(c => c !== category);
      }
      items.forEach(item => {
        if (!activeCategories.includes(item.dataset.category) && !activeCategories.includes("All") && activeCategories.length) {
          item.style.display = "none";
        } else {
          item.style.display = "flex";
        }
      });
      console.log(activeCategories);
    });
  });
}

/***/ }),

/***/ "./app/assets/js/modules/form.js":
/*!***************************************!*\
  !*** ./app/assets/js/modules/form.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sendForm; });
function sendForm(formSelector, url) {
  const form = document.querySelector(formSelector);
  const formTooltip = document.createElement("p");
  formTooltip.classList.add("subtitle--second", "form__tooltip");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      fetch(url, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
      }).then(res => res.json()).then(res => {
        if (res.message) {
          formTooltip.textContent = res.message;
          form.appendChild(formTooltip);
          setTimeout(() => {
            form.removeChild(formTooltip);
          }, 3000);
        }
        if (res.token) {
          localStorage.setItem("token", res.token);
          document.location.href = "/";
        }
      }).catch(err => console.log(err));
      form.reset();
    });
  }
}

/***/ }),

/***/ "./app/assets/js/modules/menu.js":
/*!***************************************!*\
  !*** ./app/assets/js/modules/menu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toggleMenu; });
function toggleMenu(triggerSelector, menuSelector, triggerActiveClass, menuActiveClass) {
  const trigger = document.querySelector(triggerSelector);
  const menu = document.querySelector(menuSelector);
  if (trigger) {
    trigger.addEventListener("click", () => {
      trigger.classList.toggle(triggerActiveClass);
      if (trigger.classList.contains(triggerActiveClass)) {
        menu.classList.add(menuActiveClass);
      } else {
        menu.classList.remove(menuActiveClass);
      }
    });
  }
}

/***/ }),

/***/ "./app/assets/js/modules/modal.js":
/*!****************************************!*\
  !*** ./app/assets/js/modules/modal.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toggleModal; });
function toggleModal(triggerSelector, modalSelector, activeClass) {
  const trigger = document.querySelector(triggerSelector);
  const modal = document.querySelector(modalSelector);
  const form = modal.querySelector("form");
  if (trigger) {
    trigger.addEventListener("click", e => {
      e.preventDefault();
      modal.classList.toggle(activeClass);
    });
  }
  if (form) {
    form.addEventListener("submit", () => {
      setTimeout(() => modal.classList.remove(activeClass), 3000);
    });
  }
  document.body.addEventListener("click", e => {
    if (e.target === modal && modal.classList.contains(activeClass)) {
      modal.classList.remove(activeClass);
    }
  });
}

/***/ }),

/***/ "./app/assets/js/modules/search.js":
/*!*****************************************!*\
  !*** ./app/assets/js/modules/search.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return searchArticle; });
function searchArticle(inputSelector, btnSelector, itemSelector, itemTitleSelector) {
  const input = document.querySelector(inputSelector);
  const btn = document.querySelector(btnSelector);
  const items = document.querySelectorAll(itemSelector);
  if (btn) {
    btn.addEventListener("click", () => {
      items.forEach(item => {
        const title = item.querySelector(itemTitleSelector).textContent;
        if (title.toLowerCase().includes(input.value.toLowerCase())) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  }
  if (input) {
    input.addEventListener("input", () => {
      if (!input.value.length) {
        items.forEach(item => {
          item.style.display = "flex";
        });
      }
    });
  }
}

/***/ }),

/***/ "./app/assets/js/modules/toggle.js":
/*!*****************************************!*\
  !*** ./app/assets/js/modules/toggle.js ***!
  \*****************************************/
/*! exports provided: toggleClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
function toggleClass(triggerSelector, itemSelector, itemActiveClass) {
  const triggers = document.querySelectorAll(triggerSelector);
  const item = document.querySelector(itemSelector);
  console.log(triggers, item);
  triggers.forEach(trigger => {
    trigger.addEventListener("click", e => {
      e.preventDefault();
      item.classList.toggle(itemActiveClass);
    });
  });
}

/***/ }),

/***/ "./data.json":
/*!*******************!*\
  !*** ./data.json ***!
  \*******************/
/*! exports provided: articles, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"articles\":[{\"title\":\"Cloud Platforms: One Solution for a Post Covid-19 World\",\"desc\":\"The world has changed, what about you? Get on the cloud to accelerate business transformation in these troubling times.  No one ever saw it coming.  Now, after 6 months and…\",\"imgSrc\":\"./assets/img/christina-wocintechchat-com-UTw3j_aoIKM-unsplash.png\",\"altImg\":\"christina-wocintechchat\",\"meta\":{\"tag\":\"Trend and Insight\",\"date\":\"June 11\"}},{\"title\":\"5 Platforms that Will Help You Thrive in a Disrupted World\",\"desc\":\"Tech platforms and tools to help you run your accounting and corporate secretarial business efficiently Time and tech wait for no man.  Technology has been moving so quickly that the…\",\"imgSrc\":\"./assets/img/carlos-muza-hpjSkU2UYSU-unsplash.png\",\"altImg\":\"carlos-muza\",\"meta\":{\"tag\":\"Trend and Insight\",\"date\":\"June 4\"}},{\"title\":\"5 Technology Trends That Can Transform Your Accounting Firm\",\"desc\":\"Focus on being productive, not busy. Stimulate rapid growth and greater value for your practice through the smart utilisation of technology. Technology trends have revolutionised the way business is conducted,…\",\"imgSrc\":\"./assets/img/luca-bravo-XJXWbfSo2f0-unsplash.png\",\"altImg\":\"luca-bravo\",\"meta\":{\"tag\":\"Digital future\",\"date\":\"June 8\"}},{\"title\":\"Time to Go Tech\",\"desc\":\"This is an account told through the perspective of a business owner who has dealt with inefficiency and wants to go from being mediocre to future-proof. He adopted a combination…\",\"imgSrc\":\"./assets/img/christina-wocintechchat-com-UTw3j_aoIKM-unsplash.png\",\"altImg\":\"christina-wocintechchat\",\"meta\":{\"tag\":\"Digital future\",\"date\":\"June 1\"}},{\"title\":\"What does a Future-ready accounting firm look like?\",\"desc\":\"To everyone who runs an accounting firm out there, it’s true that the industry suffers from an image problem. However, the good news is that we live in unprecedented times.…\",\"imgSrc\":\"./assets/img/carlos-muza-hpjSkU2UYSU-unsplash.png\",\"altImg\":\"carlos-muza\",\"meta\":{\"tag\":\"Digital future\",\"date\":\"June 1\"}},{\"title\":\"The role of automation in a Smart Nation\",\"desc\":\"Automation - a word we’ve been hearing a lot lately. But what does it really mean for business owners such as yourself? We walk through some examples within the context…\",\"imgSrc\":\"./assets/img/luca-bravo-XJXWbfSo2f0-unsplash.png\",\"altImg\":\"luca-bravo\",\"meta\":{\"tag\":\"Digital future\",\"date\":\"June 1\"}}]}");

/***/ })

/******/ });
//# sourceMappingURL=script.js.map