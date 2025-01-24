// 1. FUNCTIONS//

function data(name) {
    console.log("hey " + name + " you're good");
    console.log("hey " + name + " you're amazing");
    console.log("hey " + name + " you look nice");
    console.log("hey " + name + " you're so beautiful");

}
// data("zohaib")

function tellTime() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();

    console.log("Current time: " + theHr + ":" + theMin + now);

}
data("zohaib")
tellTime();

function sum(a, b) {
    return a + b; // Return the sum of a and b
}
result = sum(8, 6);
console.log(result); // Output: 14

function sum(a, b) {
    return a + b; // Return the sum of a and b
}
result1 = sum(8, 2);
result2 = sum(8, 4);
result3 = sum(8, 8);

console.log("The sum of these number is:", result1);
console.log("The sum of these number is:", result2);
console.log("The sum of these number is:", result3);

// /* Another Example*/

function sum(a, b, c = 5) {
    return a + b + c; // Return the sum of a and b
    return a + b - c; //  The first return statement (return a + b + c;) immediately exits the function, so the second return statement (return a + b - c;) is never executed.

}
result = sum(8, 2);
console.log("The sum of these number is:", result);

/*Arrow Function*/

const function1 = (a, b) => {
    let c = a + b;
    return c;
};

const result = function1(10, 9);
console.log(result);



const fun1 = (x) => {
    console.log("I'm a arrown function", x)
}
    fun1(25);
    fun1(65);
    fun1(55);