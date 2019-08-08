<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="<?php echo base_url(); ?>file/css/bootstrap.min.css"><!--file css boottrap 4.3 -->
	<link rel="stylesheet" href="<?php echo base_url(); ?>file/icon/css/all.min.css">
	<link rel="stylesheet" href="<?php echo base_url(); ?>file/css/style.css">
	<style>
		.user{
			padding: 15px;
			box-shadow: -1rem 0 3rem rgba(0,0,0,.4);
			margin-bottom: 30px;
			border-radius: 20px;
		}
		img{
			border-radius: 50%;
		}
		li{
			list-style: none;
			text-align: center;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-12 text-center">
				<button id="button" class="btn btn-success btn-lg">load github user</button>
				<br><br>
				
			</div>
			<div class="col-12">
				<h1>Github user</h1>
				<div id="users" class="row"></div>
			</div>
		</div>
	</div>
	<script>
		document.getElementById('button').addEventListener('click', loadUsers);
		function loadUsers(e) {
			e.preventDefault();

			var xhr = new XMLHttpRequest(); /*tạo object XHR*/

			xhr.open('GET', '', true);

			xhr.onload = function() {
				if (this.status == 200) {
					var users = JSON.parse(this.responseText);

					// console.log(users);

					var output = '';

					for (var i = 0; i < users.length; i++) {
						output +=
						'<div class="col-3">'+
						'<div class="user">'+
						'<img src="'+users[i].avatar_url+'" style="width: 100%;">'+
						'<ul>'+
						'<li>ID: '+users[i].id+'</li>'+
						'<li>Login: '+users[i].login+'</li>'+
						'<li>'+users[i].node_id+'</li>'+
						'</ul>'+
						'</div>'+
						'</div>';
						
					}
					document.getElementById('users').innerHTML = output;

				}

			}

			xhr.send();
		}
	</script>
</body>
</html>