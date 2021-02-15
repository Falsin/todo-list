import {createELem} from './createElem'

const list = document.querySelectorAll('taskList')

class CreateSection {
  constructor(parentElem, className) {
    this.elem = createELem(parentElem, 'div', `class:${className}`);
  }
}

const important = new CreateSection(list[0], 'important');

const usual = new CreateSection(list[0], 'usual');

const mostImportant = new CreateSection(list[0], 'mostImportant')

const createTaskList = ((parentElem) => {
  const array = [important, usual, mostImportant];

  function addTaskListSections(parentElem, className) {
    array.push(new CreateSection(parentElem, `$class:${className}`))
  }

  return {array, addTaskListSections}
})()

const task = createTaskList;

/* const list = document.querySelectorAll('.tasks')

const createTaskList = ((parentElem) => {
  const array = [important, usual, mostImportant];

  function addTaskListSections(parentElem, className) {
    array.push(new CreateSection(parentElem, `$class:${className}`))
  }

  return {array, addTaskListSections}
})()

class CreateSection {
  constructor(parentElem, className) {
    this.elem = createELem(parentElem, 'div', `class:${className}`);
  }
}

const important = new CreateSection(list[0], 'important');

const usual = new CreateSection(list[0], 'usual');

const mostImportant = new CreateSection(list[0], 'mostImportant')

const task = createTaskList;

console.log(task) */