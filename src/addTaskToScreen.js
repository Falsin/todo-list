import {createELem} from './createElem'

function addTaskToScreen(parentElem, obj) {
  const taskBody = parentElem.querySelector('.taskBody');
  const taskCard = createELem(taskBody, 'div');

  for (const key in obj) {
    if (key != 'priority') {
      createELem(taskCard, 'div', `class:${key}`, `${obj[key]}`);
    }
  }
}

export {addTaskToScreen}