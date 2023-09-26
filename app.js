'use strict'
const GI = {
	createElement (tag, atributes) {
		let element = document
		return document.createElement(tag)
	}
}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]

const todoListContainer = document.querySelector('.js-cont-todo');
const ul = GI.createElement('ul');
todoListContainer.appendChild(ul);

to_do.forEach((itemText) => {
    const li = GI.createElement('li');
    const checbox = GI.createElement('input', {
        type: 'checkbox',
        onchange: function() {
            if (this.checbox) {
                li.style.textDecoration = 'line-through';
                li.style.color = 'gray';
            } else {
                li.style.textDecoration = 'none';
                li.style.color = 'initial';
            }
        }
    });

    const label = GI.createElement('label', { htmlFor: itemText });
    label.textContent = itemText;

    li.appendChild(checbox);
    li.appendChild(label);
    ul.appendChild(li);
})
