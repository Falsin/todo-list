import {createELem} from './createElem'

function createSection(parentElem, elem) {
  const currentElem = createELem(parentElem, 'div');
  const class1 = elem.classList[0];
  currentElem.classList.add('section', `${class1}`);
  
  console.log(class1)
}

export {createSection}