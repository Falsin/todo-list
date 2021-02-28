import {createELem} from './createElem'
import {createSection} from './createSection'
import {addObjIntoBaseProjects, showSection} from './index'


function createProject(parentElem, items, title) {
  const list = parentElem.querySelector('.projectsList');
  let projectTitle = parentElem.querySelector('input').value;

  if (!projectTitle) {
    projectTitle = title;
  }

  const position = createELem(list, 'li', `${projectTitle}`);
  items.push(position);

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
}

export {createProject}