import {createELem} from './createElem'
//import {CreateTask} from './createTask'
import {createTask} from './createTaskList'

const nav = document.querySelector('nav');
const menuBlock = document.querySelector('.menuBlock');
const items = menuBlock.querySelectorAll('li');

nav.onclick = () => {
  nav.classList.toggle('active');
  menuBlock.classList.toggle('active');
}

const section = document.querySelectorAll('.section');
const taskBtn = document.querySelectorAll('.addTask');
const taskBlock = document.querySelector('.taskBlock');
const cancelBtn = document.querySelector('.cancel');
const addBtn  = document.querySelector('.add');
const fields = document.querySelectorAll('.field');
const list = document.querySelectorAll('.taskList');

items.forEach((item, id) => {
  item.addEventListener('mousedown', () => {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
      section[i].classList.remove('active');
    }
    item.classList.add('active');
    section[id].classList.add('active');
  })
})

taskBtn.forEach((item, id) => {
  item.addEventListener('mousedown', () => {
    taskBlock.classList.add('active');
    addBtn.setAttribute('data-id', `${id}`)
  })
});

cancelBtn.addEventListener('mousedown', () => {
  taskBlock.classList.remove('active');
})
/*
let array = [];

addBtn.addEventListener('mousedown', () => {
  let obj = new CreateTask();
  obj.iterateArray(fields, array); 
  obj.setPriority(taskBlock);

  taskBlock.classList.remove('active');
  const priority = taskBlock.querySelector('.priority');
  const inputs = priority.querySelectorAll('input');
  
  fields.forEach(item => {
    item.value = '';
    inputs[0].checked = true;
  })

  const id = addBtn.getAttribute('data-id');
  const field = section[id].querySelector('.taskList');

  addTaskToScreen(field, obj);
})

function addTaskToScreen(parentElem, obj) {
  const branch = parentElem.querySelector(`.${obj.priority}`);
  const elem = createELem(branch, 'div', 'class:bodyTask');

  for (const key in obj) {
    const item = createELem(elem, 'div', `class:${key}`, `${obj[key]}`);
  }
}*/

/* addBtn.addEventListener('mousedown', () => {

})
 */
const headline = document.querySelectorAll('.headline');

headline.forEach((item, id) => {
  item.addEventListener('mousedown', () => {
    const parentElem = item.parentNode;
    const tasks = parentElem.querySelectorAll('.bodyTask');

    if (tasks.length) {
      tasks.forEach(item => item.classList.toggle('active'));
      item.classList.toggle('active');
    }
  })
})

window.onload = () => {
  createTask(list);
}