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
				<button id="button1" class="btn btn-success btn-lg">lấy user</button>
				<button id="button2" class="btn btn-success btn-lg">lấy users</button>
				<br><br>
				<h1>user</h1>
				<div id="user"></div>
				<h1>users</h1>
				<div id="users"></div>
			</div>
		</div>
	</div>
	<script>
		document.getElementById('button1').addEventListener('click', loaduser);
		function loaduser(e) {
			e.preventDefault();

			var xhr = new XMLHttpRequest(); /*tạo object XHR*/

			xhr.open('GET', '<?php echo base_url(); ?>file/user.json', true);

			xhr.onload = function() {
				if (this.status == 200) {
					// console.log(this.responseText);
					var user = JSON.parse(this.responseText);
					
					var output = '';

					output += '<ul>'+
						'<li>ID: '+ user.id +'</li>'+
						'<li>Name: '+ user.name +'</li>'+
						'<li>Email: '+ user.email +'</li>'+
						'</ul>';
					document.getElementById('user').innerHTML = output;
				}
			}

			xhr.send();

		}
		document.getElementById('button2').addEventListener('click', loadusers);
		function loadusers(e) {
			e.preventDefault();

			var xhr = new XMLHttpRequest(); /*tạo object XHR*/

			xhr.open('GET', '<?php echo base_url(); ?>file/users.json', true);

			xhr.onload = function() {
				if (this.status == 200) {
					// console.log(this.responseText);
					var user = JSON.parse(this.responseText);
					
					var output = '';

					for (var i = 0; i < user.length; i++) {
						output += '<ul>'+
						'<li>ID: '+ user[i].id +'</li>'+
						'<li>Name: '+ user[i].name +'</li>'+
						'<li>Email: '+ user[i].email +'</li>'+
						'</ul>';
					}

					
					document.getElementById('users').innerHTML = output;
				}
			}

			xhr.send();

		}
		
	</script>
</body>
</html>