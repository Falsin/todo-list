import {createELem} from './createElem'
import {createSection} from './createSection'
import {CreateTask, MostImportant, Important, Usual} from './createTaskList'


function createProject(parentElem, items) {
  const list = parentElem.querySelector('.projectsList');
  const projectTitle = parentElem.querySelector('input').value;
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
  
  const taskBlocks = new CreateTask([
    new MostImportant(newTaskList),
    new Important(newTaskList),
    new Usual(newTaskList), 
  ])

  for (let i = 0; i < taskBlocks.array.length; i++) {
    taskBlocks.addNewTask(taskBlocks.array[i])
  }
}

export {createProject}