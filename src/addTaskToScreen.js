import {createELem} from './createElem'
import {store} from './index'

function addTaskToScreen(parentElem, obj) {
  const taskBody = parentElem.querySelector('.taskBody');

  const taskArray = taskBody.querySelectorAll('.taskCard');
  let taskCard;
  if (!taskArray.length) {
    taskCard = createELem(taskBody, 'div', 'class:taskCard');
  } else {
    taskCard = document.createElement('div');
    taskCard.classList.add('taskCard');
    for (let i = 0; i < taskArray.length; i++) {
      const objDate = Date.parse(obj.dueDate)
      const dateString = Date.parse(taskArray[i].lastChild.textContent);

      if (dateString > objDate) {
        taskArray[i].before(taskCard);
        break;
      } else if (i == taskArray.length - 1 && objDate > dateString) {
        taskArray[i].after(taskCard);
      }
    }
  }

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

export {addTaskToScreen}