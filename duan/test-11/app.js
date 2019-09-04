const box = document.querySelector('.box-pro');
const funlist = [];
let myBlock, myButton;
document.addEventListener('DOMContentLoaded', function() {
	myBlock = document.createElement('div');
	myBlock.textContent = 'Hello world';
	myBlock.setAttribute('style','width: 100px;height:100px;background-color:red;color:white;line-height:100px;text-align:center;position:absolute;');
	myBlock.style.top = '100px';
	myBlock.style.left = '150px';
	myButton = document.createElement('div');
	myButton.setAttribute('style','display:flex;flex-wrap:wrap');
	document.body.appendChild(myBlock);
	box.appendChild(myButton);
})
document.addEventListener('keydown', function(e) {
	e.preventDefault();
	let el = e.keyCode;
	switch (el) {
		case 37: addFun('left'); break;
		case 38: addFun('top'); break;
		case 39: addFun('right'); break;
		case 40: addFun('down'); break;
		case 67: myBlock.style.backgroundColor = randomColor(); break;
		default: break;
	}
	if (el === 13 || el === 32) {
		mover();
	}
})
function mover() {
	if (funlist.length > 0) {
		let cur = myBlock.getBoundingClientRect();
		let el = funlist.shift();
		let item = el.textContent.replace('+','');
		myButton.removeChild(myButton.childNodes[0]);
		myBlock.textContent = 'Move: '+item;

		console.log(item);
		console.log(cur.left,cur.width);
		switch (item) {
			case 'left':
				myBlock.style.left = cur.left-cur.width+"px";
				break;
			case 'right':
				myBlock.style.left = cur.left+cur.width+"px";
				break;
			case 'top':
				myBlock.style.top = (cur.top-cur.height)+"px";
				break;

			case 'down':
				myBlock.style.top = (cur.top+cur.height)+"px";
				break;
		}
		setTimeout(mover, 1000);
	}
}
function addFun(val) {
	let span = document.createElement('span');
	span.textContent = "+"+val;
	span.style.padding = '10px';
	span.style.border = '1px solid black';
	span.addEventListener('mouseover', function() {
		this.style.backgroundColor = randomColor();
		this.style.color = randomColor();
	})
	span.addEventListener('mouseout', function() {
		this.style.backgroundColor = 'white';
		this.style.color = 'black';
	})
	myButton.appendChild(span);
	funlist.push(span);
	console.log(funlist);

}
function randomColor() {
	return "#"+Math.random().toString(16).substr(-6);
}
function goLeft() {
	let temp = myBlock.offsetLeft;
	temp -= 50;
	myBlock.style.left = temp+'px';
}
function goRight() {
	let temp = myBlock.offsetLeft;
	temp += 50;
	myBlock.style.left = temp+'px';
}
function goTop() {
	let temp = myBlock.offsetTop;
	temp -= 50;
	myBlock.style.top = temp+'px';
}
function goDown() {
	let temp = myBlock.offsetTop;
	temp += 50;
	myBlock.style.top = temp+'px';
}