import {createELem} from './createElem'
import {store} from './index'

function addTaskToScreen(parentElem, obj) {
  const taskBody = parentElem.querySelector('.taskBody');

  const taskArray = taskBody.querySelectorAll('.taskCard');
  let taskCard = sortTasks(taskArray, obj, taskBody);

  taskCard.addEventListener('mousedown', () => {
    const taskCardsArray = parentElem.querySelectorAll('.taskCard');
    taskCardsArray.forEach(elem => {
      elem.classList.remove('active');
    });
    taskCard.classList.add('active');
  })

  const deleteCardBtn = createELem(taskCard, 'img', 'class:deleteCardBtn');
  deleteCardBtn.src = './images/cancelBtn.svg';
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

function sortTasks(array, obj, parentElem) {
  let elem;
  if (!array.length) {
    return createELem(parentElem, 'div', 'class:taskCard');
  } else {
    elem = document.createElement('div');
    elem.classList.add('taskCard');
    for (let i = 0; i < array.length; i++) {
      const objDate = Date.parse(obj.dueDate)
      const dateString = Date.parse(array[i].lastChild.textContent);

      if (dateString > objDate) {
        array[i].before(elem);
        return elem;
      } else if (i == array.length - 1 && objDate > dateString) {
        array[i].after(elem);
        return elem;
      }
    }
  }
}

export {addTaskToScreen}