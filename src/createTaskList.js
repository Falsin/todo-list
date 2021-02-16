import {createELem} from './createElem'

function createTask(parentElem) {
  const array = []

  parentElem.forEach(item => {
    createTaskSceleton(item, [new MostImportant(item), new Important(item), new Usual(item)])
  })
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

function createTaskSceleton(parentElem, array) {
  const taskBlocks = [...parentElem.children];

  taskBlocks.forEach((elem, id) => {
    const headline = createELem(elem, 'div', 'class:headline');
    createELem(headline, 'h3', `${array[id].headlineText}`);
  });
}

export {createTask}