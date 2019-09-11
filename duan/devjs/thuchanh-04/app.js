const box = document.querySelector('.box');

function createDiv(div, lass, text) {
	let create = document.createElement(div);
	create.className = lass;
	let t = document.createTextNode(text);
	create.appendChild(t);
	return create;
}

const div = createDiv('div', '', 'Câu hỏi của bạn');
box.appendChild(div);

const div1 = createDiv('div', 'form-row', '');
const div2 = createDiv('div', 'form-group col-9', '');
const div3 = createDiv('div', 'form-group col-3', '');
const output = createDiv('div', 'ouput', '')

const input = createDiv('input', 'form-control', '');
input.setAttribute('placeholder','câu hỏi của bạn');

const button = createDiv('button', 'btn btn-dark btn-block', 'Hỏi ngay');

div2.appendChild(input);
div3.appendChild(button);

div1.appendChild(div2);
div1.appendChild(div3);

box.appendChild(div1);
box.appendChild(output);

