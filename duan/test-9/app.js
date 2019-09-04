
const box = document.querySelector('.box-pro');
const animals = ['bark', 'cougar', 'lion'];
const color = ['btn-dark','btn-danger','btn-primary'];

document.addEventListener('DOMContentLoaded',init);

function init() {
	for (var i = 0; i < animals.length; i++) {

		let button = document.createElement('button');
		button.className = 'btn '+animals[i]+' '+color[i];
		button.innerHTML = animals[i].toUpperCase();
		box.appendChild(button);
		button.addEventListener('click', function(e) {
			addStyle(e.target.innerHTML.toLowerCase())
		})
		
	}
}
function addStyle(name) {
	let elName = document.querySelector('.'+name);
	let sound = new Audio(name+'.mp3');
	sound.play();
	elName.classList.add('btn-lg');
	setTimeout(function() {
		elName.classList.remove('btn-lg');
	},500)
}