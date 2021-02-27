import {createELem} from './createElem'
import {store} from './index'

function addTaskToScreen(parentElem, obj) {
  const taskBody = parentElem.querySelector('.taskBody');
  const taskCard = createELem(taskBody, 'div');
  const deleteCardBtn = createELem(taskCard, 'div', 'class:deleteCardBtn');

  for (const key in obj) {
    if (key != 'priority') {
      createELem(taskCard, 'div', `class:${key}`, `${obj[key]}`);
    }
  }

  deleteCardBtn.onclick = () => deleteCard(deleteCardBtn, obj, taskCard)
  
}

function deleteCard(btn, obj, taskCard) {
  const section = btn.closest('.section');
  const sectionName = section.querySelector('h2').textContent;

  const priority = obj.priority;
  const arrayWithPriorityNames = store.baseProjects[sectionName];

  for (const iterator of arrayWithPriorityNames) {
    if (iterator[priority]) {
      const id = iterator[priority].indexOf(obj);
      iterator[priority].splice(id, 1);
    }
  }

  taskCard.remove();
  localStorage.setItem('baseProjects', JSON.stringify(store.baseProjects));
}

export {addTaskToScreen}