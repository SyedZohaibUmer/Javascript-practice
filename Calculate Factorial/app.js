const num = parseInt(prompt('Enter a number: ')); // Convert input to a number
let result = 1; // Initialize result

for (let i = 1; i <= num; i++) { // Start from 2 since multiplying by 1 has no effect
    result *= i;
}

console.log(`Factorial of ${num} is: ${result}`);

// Function Way
const num1 = parseInt(prompt('Enter a number: '));
function fac() {
    let value = 1
    for (let index = 2; index <= num1; index++) {
        value *= index
    }
    return value
}
console.log(`Factorial of ${num1} is : ${fac(num1)}`);
fac(num1)
