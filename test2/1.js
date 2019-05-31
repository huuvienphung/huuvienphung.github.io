// get input element
let filter = document.getElementById('filterInput');
var x = document.getElementById('names');
//add event
x.style.display = 'none';
filter.addEventListener('keyup', filterName);
filter.addEventListener('focus', filterAppear);
filter.addEventListener('blur', filterHidden);

function filterHidden() {
	x.style.display = 'none';
}
function filterAppear() {
	x.style.display = 'block';
}
function filterName() {
	// get value of input
	let filterValue = document.getElementById('filterInput').value.toUpperCase();

	// get name ul
	let ul = document.getElementById('names');
	// get lis from ul
	let li = ul.querySelectorAll('li.collection-item');

	//loop through collection-item lis
	for (let i = 0; i < li.length; i++) {
		let a = li[i].getElementsByTagName('a')[0];
		// if matched
		if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
			li[i].style.display = '';
		} else {
			li[i].style.display = 'none';
		}
	}
}