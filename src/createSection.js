import {createELem} from './createElem'

const taskBlock = document.querySelector('.taskBlock');
const addBtn  = document.querySelector('.add');
const taskBtn = [];

const createSection = (() => {
  const sectionStore = [];
  const taskListStore = [];
  const baseProjects = {}

  return function (parentElem, elem, id) {
    const currentElem = createELem(parentElem, 'div');
    const headline = createELem(currentElem, 'h2', `${elem.innerText}`);
    const classValues = setActiveClass(elem, currentElem);

    const taskContainer = createELem(currentElem, 'div', `class:tasks`);
    const btn = createELem(taskContainer, 'button', `Add task`, `data-id:${id}`, 'class:addTask');
    taskBtn.push(btn);
    //console.log(taskBtn)

    showTaskBlock(btn, taskBtn.length - 1)

    const taskList = createELem(taskContainer, 'div', `class:taskList`);
    sectionStore.push(currentElem);
    taskListStore.push(taskList);
    
    baseProjects[elem.innerText] = [];

    return {sectionStore, taskListStore, baseProjects}
  }
})()

function setActiveClass(elem, currentElem) {
  const className = elem.classList.value;
  if (className) {
    currentElem.classList.add(`section`, `${className}`);
  } else {
    currentElem.classList.add(`section`);
  } 
  return className;
}

function showTaskBlock(item, id) {
  item.addEventListener('mousedown', () => {
    taskBlock.classList.add('active');
    addBtn.setAttribute('data-id', `${id}`);
  })
}

export {createSection, setActiveClass}