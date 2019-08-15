<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="<?php echo base_url(); ?>file/css/bootstrap.min.css"><!--file css boottrap 4.3 -->
	<link rel="stylesheet" href="<?php echo base_url(); ?>file/icon/css/all.min.css">
	<link rel="stylesheet" href="<?php echo base_url(); ?>file/css/style.css">
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-12 text-center">
				<button id="button" class="btn btn-success btn-lg">lấy text</button>
				<br><br>
				<div id="text"></div>
			</div>
		</div>
	</div>
	<script>
		document.getElementById('button').addEventListener('click', load);
		function load(e) {
			e.preventDefault();

			var xhr = new XMLHttpRequest(); /*tạo object XHR*/

			xhr.open('GET', '<?php echo base_url(); ?>file/abc.txt', true);
			// optional used for loads
			// console.log('readyState: ', xhr.readyState); // 1
			

			xhr.onprogress = function() {
				// console.log('readyState: ', xhr.readyState); // 3
			}


			xhr.onload = function() {
			console.log('readyState: ', xhr.readyState); // 4
				if (this.status == 200) {
					// console.log(this.responseText);
					document.getElementById('text').innerHTML = this.responseText;
				} else if (this.status == 404) {
					document.getElementById('text').innerHTML = 'not found';
				}
			}

			xhr.onerror = function() {
				console.log('request error');
			}

			// xhr.onreadystatechange = function() {
			// console.log('readyState: ', xhr.readyState); // 1
			// 	if (this.readyState == 4 && this.status == 200) {
			// 		console.log(this.responseText);
			// 	}
			// }

			// đề nghị gửi
			xhr.send();
		}
	</script>
</body>
</html>