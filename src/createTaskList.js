import {createELem} from './createElem'

class CreateTask {
  constructor(array) {
    this.array = array
  }

  addNewTask(objWithTask) {
    createTaskSceleton(objWithTask);
  }
}

class MostImportant {
  constructor(parentElem) {
    this.section = createELem(parentElem, 'div', `class:mostImportant`);
  }
}
MostImportant.prototype.headlineText = 'Most important deals';

class Important {
  constructor(parentElem) {
    this.section = createELem(parentElem, 'div', `class:important`);
  }
}
Important.prototype.headlineText = 'Important deals';

class Usual {
  constructor(parentElem) {
    this.section = createELem(parentElem, 'div', `class:usual`);
  }
}
Usual.prototype.headlineText = 'Usual deals';

function createTaskSceleton(objWithTask) {
  const headline = createELem(objWithTask.section, 'div', 'class:headline');
  createELem(headline, 'h3', `${objWithTask.headlineText}`);
  const taskBody = createELem(objWithTask.section, 'div', 'class:taskBody');

  headline.onclick = () => {
    headline.classList.toggle('active');
    taskBody.classList.toggle('active');
  }
}

export  {CreateTask, MostImportant, Important, Usual}