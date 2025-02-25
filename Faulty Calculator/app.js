/* Create a Faulty Calculator by using javascript

This Faulty Calculator does the following
1. It takes two number as input from the user.
2. It perform wrong operations as follows;

+ --> -
* --> +
- --> /
*/

// Faulty Calculator Implementation



function faultyCalculator() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers!";
    } else {
        switch (operation) {
            case "+":
                result = num1 - num2; // Faulty: Addition is replaced with subtraction
                break;
            case "-":
                result = num1 + num2; // Faulty: Subtraction is replaced with addition
                break;
            case "*":
                result = num1 / num2; // Faulty: Multiplication is replaced with division
                break;
            case "/":
                if (num2 !== 0) {
                    result = num1 * num2; // Faulty: Division is replaced with multiplication
                } else {
                    result = "Cannot divide by zero!";
                }
                break;
            default:
                result = "Invalid operation!";
        }
    }

    // Displaying the result in the HTML
    document.getElementById("result").innerHTML = `The faulty result is: ${result}`;
    console.log(`The faulty result is: ${result}`);
}

// Call the function only when a button is clicked
document.getElementById("calculate").addEventListener("click", faultyCalculator);



