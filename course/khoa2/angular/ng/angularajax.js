const datax = document.getElementById('data');

var xhr = new XMLHttpRequest();

xhr.open('GET', 'angular/ng/angulardata.json', true);
xhr.onload = function() {
	if(this.status == 200) {
		
		var data = JSON.parse(this.responseText);

		var output = '';

		for (var i = 0; i < data.length; i++) {
			output += `
				<tr>
					<th scope="row">${i+1}</th>
					<td>${data[i].tda}</td>
					<td>${data[i].nd}</td>
					<td><button data-index="${i}" class="btn btn-dark nut"><i class="fab fa-angular"></i></button></td>
				</tr>
			`;
		}
		datax.innerHTML = output;

	}
}

xhr.send();


data.addEventListener('click', e => {

	if (e.target.classList.contains('nut')) {
		var index = e.target.getAttribute('data-index');
		loadData(index);

	} else if (e.target.classList.contains('fab')) {
		var index = e.target.parentElement.getAttribute('data-index');
		loadData(index);
	}
})

function loadData(index) {
	var xhr = new XMLHttpRequest();

		xhr.open('GET', 'angular/ng/angulardata.json', true);

		xhr.onload = function() {
			if(this.status == 200) {

				var data = JSON.parse(this.responseText);

				var output = `
					<div class="noidung xuathien">
						<div class="container khung2">
							<div class="card khoi2">
								<div class="card-body app">
									<h5 class="card-title">${data[index].tda}</h5>
									<ul class="choosen">
				`;
				output+=`<li><a class="abc active" data-vt="0" href="#">${data[index].nut[0]}</a></li>`;
				for (var i = 1; i < data[index].nut.length; i++) {
					output+= `
						<li><a class="abc" data-vt="${i}" href="#">${data[index].nut[i]}</a></li>
					`;
				}

				output += `</ul><div class="appear">`;

				for (var i = 0; i < data[index].noidung.length; i++) {
					output +=`<div class="chon">`;
					for (var j = 0; j < data[index].noidung[i].noidun.length; j++) {
						output += `
							<figure class="text"><h5>${data[index].noidung[i].noidun[j].td}</h5></figure>
							<div class="card-text"><img src="angular/${data[index].noidung[i].noidun[j].anh}" alt="ảnh minh họa"></div>
						
					`
					}
					output+=`</div>`;
				}

				output+=`</div></div></div></div>`;
				
				document.getElementById('nd').innerHTML = output;
				}


				
			}
			xhr.send();
		document.body.style.overflow = 'hidden';
		
}
