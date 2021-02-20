import {CreateTask, MostImportant, Important, Usual} from './createTaskList'
import {addTaskToScreen} from './addTaskToScreen'
import {createProject} from './createProject'
import {createSection, setActiveClass} from './createSection'
import { createELem } from './createElem';

const nav = document.querySelector('nav');
const menuBlock = document.querySelector('.menuBlock');
const items = [...menuBlock.querySelectorAll('li')];

nav.onclick = () => {
  nav.classList.toggle('active');
  menuBlock.classList.toggle('active');
}

const content = document.querySelector('.content');
const taskBlock = document.querySelector('.taskBlock');
const cancelBtn = document.querySelector('.cancel');
const addBtn  = document.querySelector('.add');
const fields = document.querySelectorAll('.field');

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

let store;
const cache = {};

items.forEach((value, id) => {
  store = createSection(content, value, id);
})

store.taskListStore.forEach((elem, id) => {
  const taskBlocks = new CreateTask([
    new MostImportant(elem), 
    new Important(elem), 
    new Usual(elem),
  ])

  for (const iterator of taskBlocks.array) {
    elem.appendChild(iterator.section);	
    taskBlocks.addNewTask(iterator)
  }
});

items.forEach((item, id) => {
  item.addEventListener('mousedown', () => {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
      store.sectionStore[i].classList.remove('active');
    }
    item.classList.add('active');
    store.sectionStore[id].classList.add('active');
  })
})

const taskBtn = document.querySelectorAll('.addTask');

taskBtn.forEach((item, id) => {
  item.addEventListener('mousedown', () => {
    taskBlock.classList.add('active');
    addBtn.setAttribute('data-id', `${id}`)
  })
});

const projectWindow = document.getElementById('projectWindow');
const addProjectButton = menuBlock.querySelector('.addBtn');

addProjectButton.onclick = () => setClasses();

const addProject = menuBlock.querySelector('.addProject');
const cancelProjectBtn = menuBlock.querySelector('.cancelProject');

addProject.onclick = () => {
  setClasses();
  createProject(content, items);
  setClasses();
}

cancelProjectBtn.onclick = () => setClasses();

function setClasses() {
  addProjectButton.classList.toggle("active");
  projectWindow.classList.toggle("active");
}
