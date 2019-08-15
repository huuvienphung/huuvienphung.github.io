// ajax
var xhr = new XMLHttpRequest();

xhr.open('GET', 'css_js/fours.json', true);
xhr.onload = function() {
	if(this.status == 200) {
		var card = JSON.parse(this.responseText);

		var output = '';

		for (var i = 0; i < card.length; i++) {
			output += `
			<div class="card">
			<h5 class="card-header">${card[i].td}</h5>
			<div class="card-body">
			<p class="card-text">${card[i].nd}</p>
			</div>
			</div>
			`;
		}
		document.getElementById('fours').innerHTML = output;

	}
}
xhr.send();
