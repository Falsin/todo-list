//import {createELem} from './createElem'
import {CreateTask, MostImportant, Important, Usual} from './createTaskList'
import {addTaskToScreen} from './addTaskToScreen'
import {createProject} from './createProject'

const nav = document.querySelector('nav');
const menuBlock = document.querySelector('.menuBlock');
const items = [...menuBlock.querySelectorAll('li')];

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

addBtn.addEventListener('mousedown', () => {
  const taskObj = {}

  const priorityField = document.querySelector('.priority');
  const currentPriority = priorityField.querySelector('input:checked').id;
  fields.forEach(item => taskObj[item.id] = item.value);
  Object.defineProperty(taskObj, 'priority', {
    value: `${currentPriority}`,
    enumerable: false
  })

  const currentField = section[addBtn.getAttribute('data-id')];
  const requiredBlock = currentField.querySelector(`.${currentPriority}`);

  addTaskToScreen(requiredBlock, taskObj);
  taskBlock.classList.remove('active');
})

const cache = {};

window.onload = () => {
  list.forEach((item, id) => {
    const taskBlocks = new CreateTask([
      new MostImportant(item), 
      new Important(item), 
      new Usual(item),
    ])
    cache[section[id].classList[1]] = taskBlocks;

    for (let i = 0; i < taskBlocks.array.length; i++) {
      taskBlocks.addNewTask(taskBlocks.array[i])
    }
  })
}


const projectWindow = document.getElementById('projectWindow');
const addProjectButton = menuBlock.querySelector('.addBtn');

addProjectButton.onclick = () => setClasses();

const addProject = menuBlock.querySelector('.addProject');
const cancelProjectBtn = menuBlock.querySelector('.cancelProject');

addProject.onclick = () => {
  setClasses();
  createProject(menuBlock, items);
  setClasses();
}

cancelProjectBtn.onclick = () => setClasses();

function setClasses() {
  addProjectButton.classList.toggle("active");
  projectWindow.classList.toggle("active");
}
