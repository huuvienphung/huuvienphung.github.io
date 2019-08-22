// ajax
var xhr = new XMLHttpRequest();

xhr.open('GET', 'css_js/angulardata.json', true);
xhr.onload = function() {
	if(this.status == 200) {
		
		var data = JSON.parse(this.responseText);

		var output = '';

		for (var i = 0; i < data[0].phan.length; i++) {
			output += `
				<tr>
					<th scope="row">${i+1}</th>
					<td>${data[0].phan[i].td}</td>
					<td>${data[0].phan[i].nd}</td>
					<td><button class="btn btn-dark nut"><i class="fab fa-angular"></i></button></td>
				</tr>
			`;
		}
		document.getElementById('data').innerHTML = output;

	}
}
xhr.send();


// tạo các nút chọn

const luachons = document.querySelectorAll('.choosen a');

luachons.forEach(function (luachon, ind) {
	luachon.addEventListener('click', e => {

		for (var i = 0; i < luachons.length; i++) {
			luachons[i].classList.remove('active');
		}
		e.target.classList.add('active');

		var xhr = new XMLHttpRequest();

			xhr.open('GET', 'css_js/angulardata.json', true);
			xhr.onload = function() {
				if(this.status == 200) {

					var data = JSON.parse(this.responseText);

					var output = '';
					console.log(data[1].phan[ind].noidung.length);
					for (var i = 0; i < data[1].phan[ind].noidung.length; i++) {
						output += `
							<div class="chon">
								<figure class="text">${data[1].phan[ind].noidung[i].td}</figure>
								<div class="card-text"><img src="angular/${data[1].phan[ind].noidung[i].anh}" alt="ảnh minh họa"></div>
							</div>
						`;	
					};

					e.target.parentElement.parentElement.nextElementSibling.innerHTML = output;

				}
			}
			xhr.send();
		e.preventDefault();
	})
})

