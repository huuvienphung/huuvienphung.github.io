
document.getElementById('output').style.visibility = 'hidden';

document.getElementById('ibs').addEventListener('input', (e) => {
	document.getElementById('output').style.visibility = 'visible';
	let nhapvao = e.target.value;
	document.getElementById('grOutput').innerHTML = nhapvao/0.0022046;
	document.getElementById('kgOutput').innerHTML = nhapvao/2.2046;
	document.getElementById('ozOutput').innerHTML = nhapvao*16;
});
