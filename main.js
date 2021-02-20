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

/***/ "./src/addTaskToScreen.js":
/*!********************************!*\
  !*** ./src/addTaskToScreen.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTaskToScreen\": () => (/* binding */ addTaskToScreen)\n/* harmony export */ });\n/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElem */ \"./src/createElem.js\");\n\n\nfunction addTaskToScreen(parentElem, obj) {\n  const taskBody = parentElem.querySelector('.taskBody');\n  const taskCard = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(taskBody, 'div');\n\n  for (const key in obj) {\n    (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(taskCard, 'div', `class:${key}`, `${obj[key]}`);\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/addTaskToScreen.js?");

/***/ }),

/***/ "./src/createElem.js":
/*!***************************!*\
  !*** ./src/createElem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createELem\": () => (/* binding */ createELem),\n/* harmony export */   \"createBlock\": () => (/* binding */ createBlock)\n/* harmony export */ });\nfunction createELem(parentElem, currentElem, ...arrayAttr) {\n  let elem = document.createElement(currentElem);\t\n  parentElem.appendChild(elem);\t\n  arrayAttr = arrayAttr.map(item => item.split(':'))\n  arrayAttr.forEach(item => {\n    if (item.length == 1) {\n      elem.textContent = `${item}`\n    } else {\n      elem.setAttribute(`${item[0]}`, `${item[1]}`);\n    }\n  })\n  return elem;\n}\n\nfunction createBlock(parentElem, className, textContent) {\n  const block = createELem(parentElem, 'div', `class:${className}`);\n  createELem(block, 'h3', textContent)\n  return block;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/createElem.js?");

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElem */ \"./src/createElem.js\");\n\n\nfunction createProject(parentElem, items) {\n  const list = parentElem.querySelector('.projectsList');\n  const projectTitle = parentElem.querySelector('input').value;\n  const position = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(list, 'li', `${projectTitle}`);\n  items.push(position);\n\n  items.forEach((item, id) => {\n    item.addEventListener('mousedown', () => {\n      for (let i = 0; i < items.length; i++) {\n        items[i].classList.remove('active');\n      }\n      item.classList.add('active');\n    })\n  })\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/createProject.js?");

/***/ }),

/***/ "./src/createSection.js":
/*!******************************!*\
  !*** ./src/createSection.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSection\": () => (/* binding */ createSection),\n/* harmony export */   \"setActiveClass\": () => (/* binding */ setActiveClass)\n/* harmony export */ });\n/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElem */ \"./src/createElem.js\");\n\n\nconst createSection = (() => {\n  const sectionStore = [];\n  const taskListStore = [];\n\n  return function (parentElem, elem, id) {\n    const currentElem = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(parentElem, 'div');\n    const headline = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(currentElem, 'h2', `${elem.innerText}`);\n    const classValues = setActiveClass(elem, currentElem);\n\n    const taskContainer = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(currentElem, 'div', `class:tasks`);\n    const btn = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(taskContainer, 'button', `Add task`, `data-id:${id}`, 'class:addTask');\n    const taskList = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(taskContainer, 'div', `class:taskList`);\n    sectionStore.push(currentElem);\n    taskListStore.push(taskList);\n\n    return {sectionStore, taskListStore}\n  }\n})()\n\n\nfunction setActiveClass(elem, currentElem) {\n  const className = elem.classList.value;\n  if (className) {\n    currentElem.classList.add(`section`, `${className}`);\n  } else {\n    currentElem.classList.add(`section`);\n  } \n  return className;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/createSection.js?");

/***/ }),

/***/ "./src/createTaskList.js":
/*!*******************************!*\
  !*** ./src/createTaskList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateTask\": () => (/* binding */ CreateTask),\n/* harmony export */   \"MostImportant\": () => (/* binding */ MostImportant),\n/* harmony export */   \"Important\": () => (/* binding */ Important),\n/* harmony export */   \"Usual\": () => (/* binding */ Usual)\n/* harmony export */ });\n/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElem */ \"./src/createElem.js\");\n\n\nclass CreateTask {\n  constructor(array) {\n    this.array = array\n  }\n\n  addNewTask(objWithTask) {\n    createTaskSceleton(objWithTask);\n  }\n}\n\nclass MostImportant {\n  constructor(parentElem) {\n    this.section = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(parentElem, 'div', `class:mostImportant`);\n  }\n}\nMostImportant.prototype.headlineText = 'Most important deals';\n\nclass Important {\n  constructor(parentElem) {\n    this.section = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(parentElem, 'div', `class:important`);\n  }\n}\nImportant.prototype.headlineText = 'Important deals';\n\nclass Usual {\n  constructor(parentElem) {\n    this.section = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(parentElem, 'div', `class:usual`);\n  }\n}\nUsual.prototype.headlineText = 'Usual deals';\n\nfunction createTaskSceleton(objWithTask) {\n  const headline = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(objWithTask.section, 'div', 'class:headline');\n  (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(headline, 'h3', `${objWithTask.headlineText}`);\n  const taskBody = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createELem)(objWithTask.section, 'div', 'class:taskBody');\n\n  headline.onclick = () => {\n    headline.classList.toggle('active');\n    taskBody.classList.toggle('active');\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/createTaskList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createTaskList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskList */ \"./src/createTaskList.js\");\n/* harmony import */ var _addTaskToScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTaskToScreen */ \"./src/addTaskToScreen.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _createSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createSection */ \"./src/createSection.js\");\n/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createElem */ \"./src/createElem.js\");\n\n\n\n\n\n\nconst nav = document.querySelector('nav');\nconst menuBlock = document.querySelector('.menuBlock');\nconst items = [...menuBlock.querySelectorAll('li')];\n\nnav.onclick = () => {\n  nav.classList.toggle('active');\n  menuBlock.classList.toggle('active');\n}\n\nconst content = document.querySelector('.content');\nconst taskBlock = document.querySelector('.taskBlock');\nconst cancelBtn = document.querySelector('.cancel');\nconst addBtn  = document.querySelector('.add');\nconst fields = document.querySelectorAll('.field');\n\ncancelBtn.addEventListener('mousedown', () => {\n  taskBlock.classList.remove('active');\n})\n\naddBtn.addEventListener('mousedown', () => {\n  const taskObj = {}\n  const priorityField = document.querySelector('.priority');\n  const currentPriority = priorityField.querySelector('input:checked').id;\n  fields.forEach(item => taskObj[item.id] = item.value);\n  Object.defineProperty(taskObj, 'priority', {\n    value: `${currentPriority}`,\n    enumerable: false\n  })\n\n  const currentField = section[addBtn.getAttribute('data-id')];\n  const requiredBlock = currentField.querySelector(`.${currentPriority}`);\n\n  (0,_addTaskToScreen__WEBPACK_IMPORTED_MODULE_1__.addTaskToScreen)(requiredBlock, taskObj);\n  taskBlock.classList.remove('active');\n})\n\nlet store;\nconst cache = {};\n\nitems.forEach((value, id) => {\n  store = (0,_createSection__WEBPACK_IMPORTED_MODULE_3__.createSection)(content, value, id);\n})\n\nstore.taskListStore.forEach((elem, id) => {\n  const taskBlocks = new _createTaskList__WEBPACK_IMPORTED_MODULE_0__.CreateTask([\n    new _createTaskList__WEBPACK_IMPORTED_MODULE_0__.MostImportant(elem), \n    new _createTaskList__WEBPACK_IMPORTED_MODULE_0__.Important(elem), \n    new _createTaskList__WEBPACK_IMPORTED_MODULE_0__.Usual(elem),\n  ])\n\n  for (const iterator of taskBlocks.array) {\n    elem.appendChild(iterator.section);\t\n    taskBlocks.addNewTask(iterator)\n  }\n});\n\nitems.forEach((item, id) => {\n  item.addEventListener('mousedown', () => {\n    for (let i = 0; i < items.length; i++) {\n      items[i].classList.remove('active');\n      store.sectionStore[i].classList.remove('active');\n    }\n    item.classList.add('active');\n    store.sectionStore[id].classList.add('active');\n  })\n})\n\nconst taskBtn = document.querySelectorAll('.addTask');\n\ntaskBtn.forEach((item, id) => {\n  item.addEventListener('mousedown', () => {\n    taskBlock.classList.add('active');\n    addBtn.setAttribute('data-id', `${id}`)\n  })\n});\n\nconst projectWindow = document.getElementById('projectWindow');\nconst addProjectButton = menuBlock.querySelector('.addBtn');\n\naddProjectButton.onclick = () => setClasses();\n\nconst addProject = menuBlock.querySelector('.addProject');\nconst cancelProjectBtn = menuBlock.querySelector('.cancelProject');\n\naddProject.onclick = () => {\n  setClasses();\n  (0,_createProject__WEBPACK_IMPORTED_MODULE_2__.createProject)(content, items);\n  setClasses();\n}\n\ncancelProjectBtn.onclick = () => setClasses();\n\nfunction setClasses() {\n  addProjectButton.classList.toggle(\"active\");\n  projectWindow.classList.toggle(\"active\");\n}\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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