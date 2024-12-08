let lastAnswer = 0; // Variable to store the last answer

// Function to append value to the display
function appendValue(value) {
  const result = document.getElementById('result');
  result.value += value;
}

// Function to clear the display
function clearDisplay() {
  document.getElementById('result').value = '';
}

// Function to delete the last character from the display
function deleteLast() {
  const result = document.getElementById('result');
  result.value = result.value.slice(0, -1);
}

// Function to evaluate the expression
function results() {
  const result = document.getElementById('result');
  try {
    lastAnswer = eval(result.value); // Calculate and store the last answer
    result.value = lastAnswer;
  } catch (e) {
    result.value = 'Error'; // Handle invalid expressions
  }
}

// Function to calculate the square root
function calculateSquareRoot() {
  const result = document.getElementById('result');
  try {
    const value = parseFloat(result.value); // Convert the input to a number
    if (isNaN(value)) {
      result.value = 'Error'; // Handle invalid input
    } else {
      result.value = Math.sqrt(value); // Calculate the square root
    }
  } catch (e) {
    result.value = 'Error'; // Handle unexpected errors
  }
}

// Function to calculate the square (x²)
function calculateSquare() {
  const result = document.getElementById('result');
  try {
    const value = parseFloat(result.value); // Convert the input to a number
    if (isNaN(value)) {
      result.value = 'Error'; // Handle invalid input
    } else {
      result.value = value * value; // Calculate the square
    }
  } catch (e) {
    result.value = 'Error'; // Handle unexpected errors
  }
}

// Function to use the last answer (Ans)
function LastAnswer() {
  const result = document.getElementById('result');
  result.value += lastAnswer; // Append the last answer to the current input
}
