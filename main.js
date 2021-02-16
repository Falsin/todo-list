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

/***/ "./src/createTaskList.js":
/*!*******************************!*\
  !*** ./src/createTaskList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTask\": () => (/* binding */ createTask)\n/* harmony export */ });\n/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElem */ \"./src/createElem.js\");\n\n\nfunction createTask(parentElem) {\n  const array = []\n\n  parentElem.forEach(item => {\n    createTaskSceleton(item, [new MostImportant(item), new Important(item), new Usual(item)])\n  })\n}\n\nclass MostImportant {\n  constructor(parentElem) {\n    this.section = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(parentElem, 'div', `class:mostImportant`);\n  }\n}\nMostImportant.prototype.headlineText = 'Most important deals';\n\nclass Important {\n  constructor(parentElem) {\n    this.section = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(parentElem, 'div', `class:important`);\n  }\n}\nImportant.prototype.headlineText = 'Important deals';\n\nclass Usual {\n  constructor(parentElem) {\n    this.section = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(parentElem, 'div', `class:usual`);\n  }\n}\nUsual.prototype.headlineText = 'Usual deals';\n\nfunction createTaskSceleton(parentElem, array) {\n  const taskBlocks = [...parentElem.children];\n\n  taskBlocks.forEach((elem, id) => {\n    const headline = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(elem, 'div', 'class:headline');\n    (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(headline, 'h3', `${array[id].headlineText}`);\n    const taskBody = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(elem, 'div', 'class:taskBody');\n  });\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/createTaskList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElem */ \"./src/createElem.js\");\n/* harmony import */ var _createTaskList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTaskList */ \"./src/createTaskList.js\");\n\n//import {CreateTask} from './createTask'\n\n\nconst nav = document.querySelector('nav');\nconst menuBlock = document.querySelector('.menuBlock');\nconst items = menuBlock.querySelectorAll('li');\n\nnav.onclick = () => {\n  nav.classList.toggle('active');\n  menuBlock.classList.toggle('active');\n}\n\nconst section = document.querySelectorAll('.section');\nconst taskBtn = document.querySelectorAll('.addTask');\nconst taskBlock = document.querySelector('.taskBlock');\nconst cancelBtn = document.querySelector('.cancel');\nconst addBtn  = document.querySelector('.add');\nconst fields = document.querySelectorAll('.field');\nconst list = document.querySelectorAll('.taskList');\n\nitems.forEach((item, id) => {\n  item.addEventListener('mousedown', () => {\n    for (let i = 0; i < items.length; i++) {\n      items[i].classList.remove('active');\n      section[i].classList.remove('active');\n    }\n    item.classList.add('active');\n    section[id].classList.add('active');\n  })\n})\n\ntaskBtn.forEach((item, id) => {\n  item.addEventListener('mousedown', () => {\n    taskBlock.classList.add('active');\n    addBtn.setAttribute('data-id', `${id}`)\n  })\n});\n\ncancelBtn.addEventListener('mousedown', () => {\n  taskBlock.classList.remove('active');\n})\n/*\nlet array = [];\n\naddBtn.addEventListener('mousedown', () => {\n  let obj = new CreateTask();\n  obj.iterateArray(fields, array); \n  obj.setPriority(taskBlock);\n\n  taskBlock.classList.remove('active');\n  const priority = taskBlock.querySelector('.priority');\n  const inputs = priority.querySelectorAll('input');\n  \n  fields.forEach(item => {\n    item.value = '';\n    inputs[0].checked = true;\n  })\n\n  const id = addBtn.getAttribute('data-id');\n  const field = section[id].querySelector('.taskList');\n\n  addTaskToScreen(field, obj);\n})\n\nfunction addTaskToScreen(parentElem, obj) {\n  const branch = parentElem.querySelector(`.${obj.priority}`);\n  const elem = createELem(branch, 'div', 'class:bodyTask');\n\n  for (const key in obj) {\n    const item = createELem(elem, 'div', `class:${key}`, `${obj[key]}`);\n  }\n}*/\n\naddBtn.addEventListener('mousedown', () => {\n  const taskObj = {}\n\n  const priorityField = document.querySelector('.priority');\n  const currentPriority = priorityField.querySelector('input:checked').id;\n  fields.forEach(item => taskObj[item.id] = item.value);\n  taskObj.priority = currentPriority;\n\n\n  const currentField = section[addBtn.getAttribute('data-id')];\n  const requiredBlock = currentField.querySelector(`.${currentPriority}`);\n\n  //addTaskToScreen(requiredBlock, taskObj)\n})\n\n/* function addTaskToScreen(parentElem, obj) {\n  for (const key in obj) {\n\n  }\n}\n */\n/* headline.forEach((item, id) => {\n  item.addEventListener('mousedown', () => {\n    const parentElem = item.parentNode;\n    const tasks = parentElem.querySelectorAll('.bodyTask');\n\n    if (tasks.length) {\n      tasks.forEach(item => item.classList.toggle('active'));\n      item.classList.toggle('active');\n    }\n  })\n}) */\n\nwindow.onload = () => {\n  ;(0,_createTaskList__WEBPACK_IMPORTED_MODULE_1__.createTask)(list);\n}\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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