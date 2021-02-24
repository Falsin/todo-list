import {createELem} from './createElem'

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

export {createSection, setActiveClass}