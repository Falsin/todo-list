/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const nav = document.querySelector('nav');\nconst menuBlock = document.querySelector('.menuBlock');\nconst items = menuBlock.querySelectorAll('li');\n\nnav.onclick = () => {\n  nav.classList.toggle('active');\n  menuBlock.classList.toggle('active');\n}\n\nconst section = document.querySelectorAll('.section');\nconst taskBtn = document.querySelectorAll('.addTask');\nconst taskBlock = document.querySelector('.taskBlock');\nconst cancelBtn = document.querySelector('.cancel');\n\nitems.forEach((item, id) => {\n  item.addEventListener('mousedown', () => {\n    for (let i = 0; i < items.length; i++) {\n      items[i].classList.remove('active');\n      section[i].classList.remove('active');\n    }\n    item.classList.add('active');\n    section[id].classList.add('active');\n  })\n})\n\ntaskBtn.forEach(item => {\n  item.addEventListener('mousedown', () => {\n    taskBlock.classList.add('active');\n  })\n});\n\ncancelBtn.addEventListener('mousedown', () => {\n  taskBlock.classList.remove('active');\n})\n\n/* class Task {\n  constructor() {\n\n  }\n} */\n\n//# sourceURL=webpack://todo-list/./src/index.js?");
/******/ })()
;