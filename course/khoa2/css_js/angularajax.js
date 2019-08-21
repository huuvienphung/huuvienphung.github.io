// ajax
var xhr = new XMLHttpRequest();

xhr.open('GET', 'css_js/angulardata.json', true);
xhr.onload = function() {
	if(this.status == 200) {
		
		var data = JSON.parse(this.responseText);

		var output = '';
		for (var i = 0; i < data.length; i++) {
			output += `
				<tr>
					<th scope="row">${i+1}</th>
					<td>${data[i].tieude}</td>
					<td>${data[i].noidung}</td>
					<td><button class="btn btn-dark nut"><i class="fab fa-angular"></i></button></td>
				</tr>
			`;
		}
		document.getElementById('data').innerHTML = output;

	}
}
xhr.send();