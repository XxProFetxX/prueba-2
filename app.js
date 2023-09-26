'use strict';

const GI = {
  createElement(tag, attributes) {
    let element = document.createElement(tag);
    if (attributes) {
      for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
      }
    }
    return element;
  }
}

const to_do = [
  'Alimentar al perro',
  'Estudiar para prueba escrita',
  'Pagar taxes',
  'Pasear a perro',
  'Comprar entradas para el cine',
];

const todoListContainer = document.querySelector('.js-cont-todo');
const ul = GI.createElement('ul');
todoListContainer.appendChild(ul);

to_do.forEach((itemText) => {
  const li = GI.createElement('li');
  const checkbox = GI.createElement('input', {
    type: 'checkbox',
  });
  const label = GI.createElement('label');
  label.textContent = itemText;

  li.appendChild(checkbox);
  li.appendChild(label);
  ul.appendChild(li);

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      label.style.textDecoration = 'line-through';
      label.style.color = 'gray';
    } else {
      label.style.textDecoration = 'none';
      label.style.color = 'initial';
    }
  });
});
