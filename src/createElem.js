function createELem(parentElem, currentElem, ...arrayAttr) {
  let elem = document.createElement(currentElem);	
  parentElem.appendChild(elem);	
  arrayAttr = arrayAttr.map(item => item.split(':'))
  arrayAttr.forEach(item => {
    if (item.length == 1) {
      elem.textContent = `${item}`
    } else {
      elem.setAttribute(`${item[0]}`, `${item[1]}`);
    }
  })
  return elem;
}

function createBlock(parentElem, className, textContent) {
  const block = createELem(parentElem, 'div', `class:${className}`);
  createELem(block, 'h3', textContent)
  return block;
}

export {createELem, createBlock};