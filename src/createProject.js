import {createELem} from './createElem'

function createProject(parentElem, items) {
  const list = parentElem.querySelector('.projectsList');
  const projectTitle = parentElem.querySelector('input').value;
  const position = createELem(list, 'li', `${projectTitle}`);
  items.push(position);

  items.forEach((item, id) => {
    item.addEventListener('mousedown', () => {
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
      }
      item.classList.add('active');
    })
  })
}

export {createProject}