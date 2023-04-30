let input = '';
let display = document.getElementById('result');

function addInput(value) {
	input += value;
	display.value = input;
}

function clearDisplay() {
	input = '';
	display.value = '';
}

function backspace() {
	input = input.slice(0, -1);
	display.value = input;
}

function calculate() {
	try {
		input = eval(input);
		display.value = input;
	} catch (error) {
		display.value = 'Error';
	}
}
