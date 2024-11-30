// Get the display element
const display = document.getElementById("display");

// Function to append a character to the display
function appendCharacter(character) {
    if (display.innerText === "0" && !isNaN(character)) {
        // Replace initial zero with the first number
        display.innerText = character;
    } else {
        // Append character to the current display content
        display.innerText += character;
    }
}

// Function to clear the display
function clearDisplay() {
    display.innerText = "0";
}

// Function to calculate the result
function calculateResult() {
    try {
        // Evaluate the expression in the display
        let result = eval(display.innerText);

        // Check for invalid results (e.g., division by zero)
        if (!isFinite(result)) {
            result = "Error";
        }

        // Display the result
        display.innerText = result;
    } catch (error) {
        // Display error for invalid inputs
        display.innerText = "Error";
    }
}
