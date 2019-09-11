const ul = document.querySelector('ul');

const url = 'https://jsonplaceholder.typicode.com/users';



document.addEventListener('DOMContentLoaded', load);

function load() {

	fetch(url)
	.then(function(res) {
		return res.json();
	})
	.then(function(data) {

		let output;

		for (var i = 0; i < data.length; i++) {
			
			let li = document.createElement('li');
			li.className = 'list-group-item con';
			
			output = `
				<ul class="list-group">
					<li class="list-group-item">${data[i].name}</li>
					<li class="list-group-item">Id: ${data[i].id}</li>
					<li class="list-group-item">User: ${data[i].username}</li>
					<li class="list-group-item">User:Email: ${data[i].email}</li>
					<li class="list-group-item">Phone: ${data[i].phone}</li>
					<li class="list-group-item">Website: ${data[i].website}</li>
				</ul>
			`

			li.innerHTML = output;
			ul.appendChild(li);
		}
	})
}

const box = document.querySelector('.box');
const input = document.createElement('input');
input.className = 'form-control';
input.setAttribute('type','text');
input.setAttribute('placeholder','Điền tên cần tìm');

box.appendChild(input);

input.addEventListener('keyup', function() {

	let x = this.value.toLowerCase();
	
	const lis = ul.querySelectorAll('.con');

	lis.forEach(function(li) {
		let l = li.firstElementChild.firstElementChild;
		if (l.innerHTML.toLowerCase().indexOf(x) == -1) {
			li.style.display = 'none';
		} else {
			li.style.display = 'block';
		}
	})
	
})

function ranColor() {
	return '#'+Math.random().toString(16).substr(-6);
}


const button = document.createElement('button');
button.className = 'btn-block btn';
button.style.backgroundImage = `linear-gradient(90deg,${ranColor()},${ranColor()},${ranColor()},${ranColor()},${ranColor()},${ranColor()},${ranColor()})`;
button.style.color = 'white';
let x = document.createTextNode('Đổi màu sang gradient');
button.appendChild(x);

box.appendChild(button);
let boo = true;


button.addEventListener('click', function() {
	const lis = ul.querySelectorAll('.con');

	if (boo) {
		this.innerHTML = 'Đổi màu sang màu Đen';
		boo = false;
		this.style.background = '';
		this.setAttribute('class','btn btn-dark btn-block');

		
		for (var i = 0; i < lis.length; i++) {

			let co = ranColor();
			lis[i].style.backgroundImage = `linear-gradient(90deg,${co},${ranColor()},${ranColor()},${ranColor()},${ranColor()},${ranColor()},${co})`;
			
		}
	} else {

		this.innerHTML = 'Đổi màu sang gradient';
		boo = true;
		this.setAttribute('class','btn btn-block');
		this.style.backgroundImage = `linear-gradient(90deg,${ranColor()},${ranColor()},${ranColor()},${ranColor()},${ranColor()},${ranColor()},${ranColor()})`;

		for (var i = 0; i < lis.length; i++) {
			lis[i].style.backgroundImage = '';
		}
	}
})