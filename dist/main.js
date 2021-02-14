/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createElem.js":
/*!***************************!*\
  !*** ./src/createElem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createELem\": () => (/* binding */ createELem),\n/* harmony export */   \"createBlock\": () => (/* binding */ createBlock)\n/* harmony export */ });\nfunction createELem(parentElem, currentElem, ...arrayAttr) {\n  let elem = document.createElement(currentElem);\t\n  parentElem.appendChild(elem);\t\n  arrayAttr = arrayAttr.map(item => item.split(':'))\n  arrayAttr.forEach(item => {\n    if (item.length == 1) {\n      elem.textContent = `${item}`\n    } else {\n      elem.setAttribute(`${item[0]}`, `${item[1]}`);\n    }\n  })\n  return elem;\n}\n\nfunction createBlock(parentElem, className, textContent) {\n  const block = createELem(parentElem, 'div', `class:${className}`);\n  createELem(block, 'h3', textContent)\n  return block;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/createElem.js?");

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateTask\": () => (/* binding */ CreateTask)\n/* harmony export */ });\nclass CreateTask {\n  constructor(string) {}\n\n  iterateArray(array, currentArr) {\n    array.forEach(item => this[item.id] = item.value);\n    currentArr.push(this)\n  }\n  \n  iterateObj(obj) {\n    for (const key in obj) {\n      this[key] = obj[key];\n    }\n  }\n\n  setPriority(elem) {\n    const priority = elem.querySelector('.priority');\n    const requiredElem = priority.querySelector('input:checked');\n    Object.defineProperty(this, 'priority', {\n      value: `${requiredElem.id}`,\n      enumerable: false\n    })\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/createTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElem */ \"./src/createElem.js\");\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ \"./src/createTask.js\");\n\n\n\nconst nav = document.querySelector('nav');\nconst menuBlock = document.querySelector('.menuBlock');\nconst items = menuBlock.querySelectorAll('li');\n\nnav.onclick = () => {\n  nav.classList.toggle('active');\n  menuBlock.classList.toggle('active');\n}\n\nconst section = document.querySelectorAll('.section');\nconst taskBtn = document.querySelectorAll('.addTask');\nconst taskBlock = document.querySelector('.taskBlock');\nconst cancelBtn = document.querySelector('.cancel');\nconst addBtn  = document.querySelector('.add');\nconst fields = document.querySelectorAll('.field');\n\nitems.forEach((item, id) => {\n  item.addEventListener('mousedown', () => {\n    for (let i = 0; i < items.length; i++) {\n      items[i].classList.remove('active');\n      section[i].classList.remove('active');\n    }\n    item.classList.add('active');\n    section[id].classList.add('active');\n  })\n})\n\ntaskBtn.forEach((item, id) => {\n  item.addEventListener('mousedown', () => {\n    taskBlock.classList.add('active');\n    addBtn.setAttribute('data-id', `${id}`)\n  })\n});\n\ncancelBtn.addEventListener('mousedown', () => {\n  taskBlock.classList.remove('active');\n})\n\nlet array = [];\n\naddBtn.addEventListener('mousedown', () => {\n  let obj = new _createTask__WEBPACK_IMPORTED_MODULE_1__.CreateTask();\n  obj.iterateArray(fields, array); \n  obj.setPriority(taskBlock);\n\n  taskBlock.classList.remove('active');\n  const priority = taskBlock.querySelector('.priority');\n  const inputs = priority.querySelectorAll('.checkbox');\n  \n  fields.forEach(item => {\n    item.value = '';\n    inputs[1].checked = true;\n  })\n\n  const id = addBtn.getAttribute('data-id');\n  const field = section[id].querySelector('.taskList');\n\n  addTaskToScreen(field, obj);\n\n})\n\nfunction addTaskToScreen(parentElem, obj) {\n  const branch = parentElem.querySelector(`.${obj.priority}`);\n  const elem = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(branch, 'div', 'class:bodyTask');\n\n  for (const key in obj) {\n    const item = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(elem, 'div', `class:${key}`, `${obj[key]}`);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;