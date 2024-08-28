/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const forms = data => {
  const inpt = document.querySelectorAll('.popup_calc_content input.form-control');
  inpt.forEach(item => {
    item.onkeydown = event => {
      if (isNaN(event.key) && event.key !== 'Backspace') {
        event.preventDefault();
      }
    };
  });
  const width = document.querySelectorAll('#width'),
    height = document.querySelectorAll('#height'),
    viewType = document.querySelectorAll('#view_type'),
    balconImg = document.querySelectorAll('.balcon_icons_img'),
    checkbox = document.querySelectorAll('.checkbox');
  function bindActions(event, element, key) {
    element.forEach((elem, i) => {
      elem.addEventListener(event, () => {
        switch (elem.nodeName) {
          case 'SELECT':
            data[key] = elem.value;
            break;
          case 'SPAN':
            data[key] = 'Тип_' + i;
            break;
          case 'INPUT':
            if (elem.getAttribute('type') === 'checkbox') {
              i === 0 ? data[key] = 'Холодное' : data[key] = 'Теплое';
              element.forEach((chk, x) => {
                chk.checked = false;
                if (i == x) {
                  chk.checked = true;
                }
              });
            } else {
              data[key] = elem.value;
            }
            break;
        }
        console.log(data);
      });
    });
  }
  bindActions('change', viewType, 'view-type');
  bindActions('input', width, 'width');
  bindActions('input', height, 'height');
  bindActions('click', balconImg, 'type');
  bindActions('change', checkbox, 'checkbox');

  // console.log(data)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./src/js/modules/images.js":
/*!**********************************!*\
  !*** ./src/js/modules/images.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const image = () => {
  const works = document.querySelector('.works');
  const imgPopup = document.createElement('div');
  const imgCr = document.createElement('img');
  imgPopup.classList.add('popup');
  imgPopup.style.display = 'none';
  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.appendChild(imgCr);
  works.appendChild(imgPopup);
  works.addEventListener('click', e => {
    e.preventDefault();
    let target = e.target;
    if (target.classList.contains('preview')) {
      const path = target.parentNode.getAttribute('href');
      imgPopup.style.display = 'flex';
      imgCr.setAttribute('src', path);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (image);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modals = () => {
  function bindModal(btnSelector, modalSelector, closeSelector, isCloseOverlay = true) {
    const btn = document.querySelectorAll(btnSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    btn.forEach(item => {
      item.addEventListener('click', () => {
        modal.style.display = 'block';
      });
    });
    close.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    if (isCloseOverlay) {
      modal.addEventListener('click', e => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    }
  }
  function showAfterOneMinute() {
    setTimeout(() => {
      document.querySelector('.popup_engineer').style.display = 'block';
    }, 10000);
  }
  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false);
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
  // showAfterOneMinute();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);
  function hideContnet() {
    content.forEach(item => {
      item.style.display = 'none';
    });
    tab.forEach(item => {
      item.classList.remove(activeClass);
    });
  }
  function showContent(i = 0) {
    tab[i].classList.add(activeClass);
    content[i].style.display = 'block';
  }
  header.addEventListener('click', event => {
    if (event.target.classList.contains(tabSelector.replace(/\./, '')) || event.target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
      tab.forEach((item, index) => {
        if (item == event.target || item == event.target.parentNode) {
          hideContnet();
          showContent(index);
        }
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const timer = deadline => {
  function getTimeRemaining(endtime) {
    const time = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(time / 1000 / 60 / 60 / 24),
      hours = Math.floor(time / 1000 / 60 / 60 % 24),
      minutes = Math.floor(time / 1000 / 60 % 60),
      seconds = Math.floor(time / 1000 % 60);
    return {
      'total': time,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  ;
  function setClock(endtime) {
    const days = document.querySelector('#days'),
      hours = document.querySelector('#hours'),
      minutes = document.querySelector('#minutes'),
      seconds = document.querySelector('#seconds');
    function updateClock() {
      const time = getTimeRemaining(endtime);
      days.innerHTML = addZero(time.days);
      hours.innerHTML = addZero(time.hours);
      minutes.innerHTML = addZero(time.minutes);
      seconds.textContent = addZero(time.seconds);
      if (time.total <= 0) {
        days.innerHTML = '00';
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.textContent = '00';
        clearInterval(updateClock);
      }
    }
    updateClock();
    setInterval(updateClock, 1000);
  }
  function addZero(d) {
    if (d <= 9) {
      return '0' + d;
    } else {
      return d;
    }
  }
  setClock(deadline);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/images */ "./src/js/modules/images.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");





let deadline = '2024-08-29';
const data = {};
(0,_modules_images__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])(deadline);
(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_2__["default"])('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_2__["default"])('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after-click');
(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_2__["default"])('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more');
(0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])(data);
/******/ })()
;
//# sourceMappingURL=script.js.map