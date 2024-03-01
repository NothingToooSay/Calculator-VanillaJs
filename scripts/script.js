// Declare all variables
const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')

buttons.forEach(button => {
	button.addEventListener('click', calculate)
})

// Function for processing button clicks
function calculate(event) {
	const clickedButtonValue = event.target.value

	// If the "=" button is pressed, we try to evaluate the expression
	if (clickedButtonValue === '=') {
		if (display.value !== '') {
			display.value = evaluateExpression(display.value)
		}
	} else if (clickedButtonValue === 'c') {
		display.value = ''
	} else {
		display.value += clickedButtonValue
	}
}

// Function to safely evaluate an arithmetic expression
function evaluateExpression(expression) {
	try {
		return eval(expression)
	} catch (error) {
		// Handling calculation errors
		console.error('Error evaluating expression:', error)
		return 'Error'
	}
}
