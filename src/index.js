import {CreateTask, MostImportant, Important, Usual} from './createTaskList'
import {addTaskToScreen} from './addTaskToScreen'
import {createProject} from './createProject'
import {createSection} from './createSection'
import {format} from 'date-fns'
//import { createELem } from './createElem';

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
  Object.defineProperty(taskObj, 'priority', {
    value: `${currentPriority}`,
    enumerable: false
  })

  const currentField = store.sectionStore[addBtn.getAttribute('data-id')];
  const requiredBlock = currentField.querySelector(`.${currentPriority}`);

  addTaskToScreen(requiredBlock, taskObj);
  taskBlock.classList.remove('active');

  console.log(store)
})

let store;
const cache = {};

items.forEach((value, id) => {
  store = createSection(content, value, id);
})

store.taskListStore.forEach((elem) => {
  const taskBlocks = new CreateTask([
    new MostImportant(elem), 
    new Important(elem), 
    new Usual(elem),
  ])
  const nameSection = taskBlocks.array[0].section.parentNode.parentNode.previousSibling.textContent;
  let array = [];

  //console.log(store.baseProjects)
  //console.log(store.baseProjects[nameSection] = store.baseProjects[nameSection].push('1'))
  //console.log(taskBlocks.array)

  //console.log(store.baseProjects[nameSection])

  //console.log(store.baseProjects[nameSection] = store.baseProjects[nameSection].push('1'))

/*   for (const value of taskBlocks.array) {
    console.log(value.section.classList[0])
  } */

  //console.log(store.baseProjects[nameSection])
//console.log(taskBlocks)
  for (const iterator of taskBlocks.array) {
    elem.appendChild(iterator.section);	
    taskBlocks.addNewTask(iterator);
    array.push(iterator.section.classList[0])
    //console.log(store.baseProjects[nameSection] = store.baseProjects[nameSection].push('1'))
    //console.log(store.baseProjects[nameSection] = store.baseProjects[nameSection].push('1'))
  }
  store.baseProjects[nameSection] = array;
  //console.log(array)
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
const addProjectButton = menuBlock.querySelector('.addProject');

addProjectButton.onclick = () => setClasses();

const addProject = menuBlock.querySelector('.addBtn');
const cancelProjectBtn = menuBlock.querySelector('.cancelProject');

addProject.onclick = () => {
  setClasses();
  createProject(content, items);
 
  const newSection = store.sectionStore[store.sectionStore.length - 1];
  items[items.length - 1].onclick = () => {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
      store.sectionStore[i].classList.remove('active');
    }
    items[items.length - 1].classList.add('active');
    newSection.classList.add('active');
  }

  const newBtn = newSection.querySelector('.addTask');
  newBtn.onclick = () => {
    taskBlock.classList.add('active');
    addBtn.setAttribute('data-id', `${id}`);
  }
}

cancelProjectBtn.onclick = () => setClasses();

function setClasses() {
  addProjectButton.classList.toggle("active");
  projectWindow.classList.toggle("active");
}

console.log(store.baseProjects)