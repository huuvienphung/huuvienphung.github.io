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
				<button id="button" class="btn btn-success btn-lg">Get Name</button>
			</div>
			<div class="col-12 col-lg-6 offset-lg-3">
				<h1 class="text-center">get form</h1>
				<form method="GET" action="<?php echo base_url(); ?>ajax/getview">
				  <div class="form-group">
				    <label for="inputName">tên của bạn</label>
				    <input name="name" type="text" class="form-control" placeholder="Nhập tên của bạn">
				  </div>
				  <div class="text-center">	
				  	<button type="submit" class="btn btn-primary btn-lg">Gửi</button>
				  </div>
				</form>
			</div>
			<div class="col-12 col-lg-6 offset-lg-3">
				<h1 class="text-center">ajax form</h1>
				<form id="getForm">
				  <div class="form-group">
				    <label for="inputName">tên của bạn</label>
				    <input name="name" type="text" class="form-control" id="inputName" placeholder="Nhập tên của bạn">
				  </div>
				  <div class="text-center">	
				  	<button type="submit" class="btn btn-primary btn-lg">Gửi</button>
				  </div>
				</form>
			</div>
			<div class="col-12 col-lg-6 offset-lg-3">
				<h1 class="text-center">post form</h1>
				<form method="POST" action="<?php echo base_url(); ?>ajax/getview">
				  <div class="form-group">
				    <label for="inputName">tên của bạn</label>
				    <input name="name" type="text" class="form-control" placeholder="Nhập tên của bạn">
				  </div>
				  <div class="text-center">	
				  	<button type="submit" class="btn btn-primary btn-lg">Gửi</button>
				  </div>
				</form>
			</div>
			<div class="col-12 col-lg-6 offset-lg-3">
				<h1 class="text-center">ajax post form</h1>
				<form id="postform">
				  <div class="form-group">
				    <label for="inputName">tên của bạn</label>
				    <input name="name" type="text" class="form-control" placeholder="Nhập tên của bạn" id="inputName2">
				  </div>
				  <div class="text-center">	
				  	<button type="submit" class="btn btn-primary btn-lg">Gửi</button>
				  </div>
				</form>
			</div>
			
		</div>
	</div>
	<script>
		// document.getElementById('button').addEventListener('click', getName);
		document.getElementById('getForm').addEventListener('submit', getName);
		document.getElementById('postform').addEventListener('submit', postName);
		function getName(e) {
			e.preventDefault();

			var xhr = new XMLHttpRequest(); /*tạo object XHR*/

			var name = document.getElementById('inputName').value;

			xhr.open('GET', '<?php echo base_url(); ?>ajax/getview?name='+name, true);

			xhr.onload = function() {
				console.log(this.responseText);
			}

			xhr.send();
		}


		function postName(e) {
			e.preventDefault();

			var xhr = new XMLHttpRequest(); /*tạo object XHR*/

			var name = document.getElementById('inputName2').value;
			var params = "name="+name;

			xhr.open('POST', '<?php echo base_url(); ?>ajax/getview', true);
			xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

			xhr.onload = function() {
				console.log(this.responseText);
			}

			xhr.send(params);
		}


		
	</script>
</body>
</html>