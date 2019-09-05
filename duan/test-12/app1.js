const answerArray = ['It will work', 'Maybe maybe not', 'Probably Not', 'Highly Likely', "I don't know"];

button.addEventListener('click', function() {
	if (input.value.length > 10) {
		let ran = ranNum();
		output.innerText = input.value+'. '+answerArray[ran];
		input.value = '';
	} else {
		output.innerText = 'Câu hỏi quá ngắn!';
		input.value = '';
	}
})

function ranNum() {
	return Math.floor(Math.random() * answerArray.length);
}