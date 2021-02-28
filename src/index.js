import {CreateTask, MostImportant, Important, Usual} from './createTaskList'
import {addTaskToScreen} from './addTaskToScreen'
import {createProject} from './createProject'
import {createSection} from './createSection'
import {format} from 'date-fns'
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
  fields.forEach(item => {
    if (item.id == 'dueDate') {
      taskObj[item.id] = format(new Date(item.value), 'd MMM Y');
    } else {
      taskObj[item.id] = item.value;
    }
  })
  taskObj.priority = `${currentPriority}`;

  const currentField = store.sectionStore[addBtn.getAttribute('data-id')];
  const requiredBlock = currentField.querySelector(`.${currentPriority}`);

  addTaskToScreen(requiredBlock, taskObj);
  taskBlock.classList.remove('active');

  addObjIntoStorage(taskObj)
})

function addObjIntoStorage(obj) {
  const desiredSection = store.baseProjects[items[addBtn.getAttribute('data-id')].textContent];
  for (const iterator of desiredSection) {
    if(iterator[obj.priority]) {
      iterator[obj.priority].push(obj);
      iterator[obj.priority][iterator[obj.priority].length - 1].priority = `${obj.priority}`;
    }
  }
  //console.log(store)
  localStorage.setItem('baseProjects', JSON.stringify(store.baseProjects));
  //console.log(localStorage.getItem('baseProjects'))
}

let store;

items.forEach((value, id) => {
  store = createSection(content, value, id);
})

store.taskListStore.forEach((elem, id) => addObjIntoBaseProjects(elem, id));

function addObjIntoBaseProjects(elem, id) {
  const taskBlocks = new CreateTask([
    new MostImportant(elem), 
    new Important(elem), 
    new Usual(elem),
  ])

  const nameSection = items[id].textContent;
  store.baseProjects[nameSection] = [];

  for (const iterator of taskBlocks.array) {
    elem.appendChild(iterator.section);	
    taskBlocks.addNewTask(iterator);
    const taskPriority = iterator.section.className;
    store.baseProjects[nameSection].push({[taskPriority]: []})
  }
}

items.forEach((item, id) => showSection(item, id))

function showSection(item, id) {
  item.addEventListener('mousedown', () => {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
      store.sectionStore[i].classList.remove('active');
    }
    item.classList.add('active');
    store.sectionStore[id].classList.add('active');
  })
}

const projectWindow = document.getElementById('projectWindow');
const addProjectButton = menuBlock.querySelector('.addProject');

addProjectButton.onclick = () => setClasses();

const addProject = menuBlock.querySelector('.addBtn');
const cancelProjectBtn = menuBlock.querySelector('.cancelProject');

addProject.onclick = () => {
  setClasses();
  createProject(content, items);
 
  const newSection = store.sectionStore[store.sectionStore.length - 1];

  showSection(items[items.length - 1], items.length - 1)

  const newBtn = newSection.querySelector('.addTask');
  newBtn.onclick = () => {
    taskBlock.classList.add('active');
    addBtn.setAttribute('data-id', `${id}`);
  }

  localStorage.setItem('baseProjects', JSON.stringify(store.baseProjects));
}

cancelProjectBtn.onclick = () => setClasses();

function setClasses() {
  addProjectButton.classList.toggle("active");
  projectWindow.classList.toggle("active");
}

window.onload = () => {
  const sections = document.querySelectorAll('.section');
  const obj = JSON.parse(localStorage.getItem('baseProjects'));

  for (const key in obj) {
    const elem = document.querySelector(`[data-name="${key}"]`);
    if (elem) {
      findObj(elem, obj[key]);
    } else { 
      createProject(content, items, key);
      findObj(items[items.length - 1], obj[key]);
  }
}

function findObj(elem, value) {
  if (Array.isArray(value)) {
    for (const iterator of value) {
      findObj(elem, iterator);
    }
  } else if (typeof value === 'object') {
    let elements;
    for (const key in value) {
      elements = findObj(elem, value[key]);
    }
    if (elements === null) addObj(elem, value);
  } else {
    return null;
  }
}

function addObj(elem, value) {
    const id = items.indexOf(elem);
    const desiredSection = store.sectionStore[id];

    const desiredPriority = desiredSection.querySelector(`.${value.priority}`);
    addTaskToScreen(desiredPriority, value);

    const sectionArray = store.baseProjects[elem.textContent];
    for (const iterator of sectionArray) {
      if (iterator[value.priority]) {
        iterator[value.priority].push(value);
      }
    }
}

export {store, addObjIntoStorage, addObjIntoBaseProjects, showSection/* , showTaskBlock, taskBtn */}