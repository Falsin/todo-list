class CreateTask {
  constructor(string) {}

  iterateArray(array, currentArr) {
    array.forEach(item => this[item.id] = item.value);
    currentArr.push(this)
  }
  
  iterateObj(obj) {
    for (const key in obj) {
      this[key] = obj[key];
    }
  }

  setPriority(elem) {
    const priority = elem.querySelector('.priority');
    const requiredElem = priority.querySelector('input:checked');
    Object.defineProperty(this, 'priority', {
      value: `${requiredElem.id}`,
      enumerable: false
    })
  }
}

export {CreateTask}