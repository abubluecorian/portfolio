// js for calculator
var h1 = document.createElement('h1');
h1.innerText = "Type into the inputs to perform calculations";

var input1 = document.createElement('input');
input1.setAttribute('type', 'text');

var input2 = document.createElement('input');
input2.setAttribute('type', 'text');

var selectOperation = document.createElement('select');
var options = ["Addition (+)", "Subtraction (-)", "Multiplication (×)", "Division (÷)"];

options.forEach(function(optionText, index) {
	var option = document.createElement('option');
	option.value = index;
	option.text = optionText;
	selectOperation.appendChild(option);
});

var resultInput = document.createElement('input');
resultInput.setAttribute('type', 'text');
resultInput.setAttribute('readonly', true);

var submitButton = document.createElement('button');
submitButton.innerText = "Calculate";

// document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input1);
document.body.appendChild(selectOperation);
document.body.appendChild(input2);
document.body.appendChild(submitButton);
document.body.appendChild(resultInput);

submitButton.addEventListener('click', function() {
	var operation = parseInt(selectOperation.value);
	var result;
	
	switch (operation) {
		case 0:
			result = parseInt(input1.value) + parseInt(input2.value);
			break;
		case 1:
			result = parseInt(input1.value) - parseInt(input2.value);
			break;
		case 2:
			result = parseInt(input1.value) * parseInt(input2.value);
			break;
		case 3:
			result = parseInt(input1.value) / parseInt(input2.value);
			break;
		default:
			result = "Invalid Operation";
	}
	
	resultInput.value = result;
});
