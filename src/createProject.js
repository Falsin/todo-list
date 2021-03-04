import { set } from 'date-fns';
import {createELem} from './createElem'
import {createSection} from './createSection'
import {addObjIntoBaseProjects, showSection, store} from './index'


function createProject(parentElem, items, title) {
  const list = parentElem.querySelector('.projectsList');
  let projectTitle = parentElem.querySelector('input').value;

  if (!projectTitle) {
    projectTitle = title;
  }

  const position = createELem(list, 'li');
  createELem(position, 'div', 'class:icon');
  createELem(position, 'span', `${projectTitle}`);
  items.push(position);

  const deleteProjectBtn = createELem(position, 'div', `class:deleteProjectBtn`);
  const img = createELem(deleteProjectBtn, 'img');
  img.src = './images/cancelBtn.svg'

  items.forEach((item) => {
    item.addEventListener('mousedown', () => {
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
      }
      item.classList.add('active');
    })
  })

  const objWithTasks = createSection(parentElem, position, items.length - 1);
  const newTaskList = objWithTasks.taskListStore[objWithTasks.taskListStore.length - 1];
  
  addObjIntoBaseProjects(newTaskList, items.length - 1);

  showSection(position, items.length - 1)

  deleteProjectBtn.onclick = () => deleteProject(position, objWithTasks, items);
}

function deleteProject(elem, obj, items) {
  const index = items.indexOf(elem);

  elem.remove();  
  obj.sectionStore[index].remove();
  obj.sectionStore.splice(index, 1);
  obj.taskListStore.splice(index, 1)

  items.splice(index, 1);
  delete obj.baseProjects[elem.textContent];

  obj.sectionStore.forEach((item, id) => {
    const addTasksBtn = item.querySelector('.addTask');
    addTasksBtn.dataset.id = `${id}`;
  })
  localStorage.setItem('baseProjects', JSON.stringify(obj.baseProjects));
}

export {createProject}