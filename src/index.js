const nav = document.querySelector('nav');
const menuBlock = document.querySelector('.menuBlock');
const items = menuBlock.querySelectorAll('li');

nav.onclick = () => {
  nav.classList.toggle('active');
  menuBlock.classList.toggle('active');
}

const section = document.querySelectorAll('.section');
const taskBtn = document.querySelectorAll('.addTask');
const taskBlock = document.querySelector('.taskBlock');
const cancelBtn = document.querySelector('.cancel');
const addBtn  = document.querySelector('.add');
const fields = document.querySelectorAll('.field');

items.forEach((item, id) => {
  item.addEventListener('mousedown', () => {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
      section[i].classList.remove('active');
    }
    item.classList.add('active');
    section[id].classList.add('active');
  })
})

taskBtn.forEach(item => {
  item.addEventListener('mousedown', () => {
    taskBlock.classList.add('active');
  })
});

cancelBtn.addEventListener('mousedown', () => {
  taskBlock.classList.remove('active');
})

let array = [];

addBtn.addEventListener('mousedown', () => {
  let obj = new Task();
  obj.iterateArray(fields);

  array.push(obj);

  obj = JSON.stringify(array[array.length - 1]);
  localStorage.setItem('first', obj);
})


class Task {
  constructor() {}
  iterateArray(array) {
    array.forEach(item => this[item.id] = item.value);
  }
  iterateObj(obj) {
    for (const key in obj) {
      this[key] = obj[key];
    }
  }
} 

function getObj() {
  let obj = JSON.parse(localStorage.getItem('first'));
  let newTask = new Task();
  newTask.iterateObj(obj);
  return newTask;
}


/* addBtn.addEventListener('mousedown', () => {
  array.push(new Task(fields));
})

class Task {
  constructor(array) {
    array.forEach(item => this[item.id] = item.value);
  }
} */
