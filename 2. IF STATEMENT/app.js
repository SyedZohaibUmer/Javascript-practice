// /* TOPIC = 10 /*
// var x = prompt("enter your pin")
// if (x === "123"){
//     alert("correct pin");
// }
// else{
//     alert("incorrect pin");
// }

// var a = prompt("enter your name", "")

// if (a == zohaib) {
//     alert("correct");
// }
// else {
//     alert("incorrect");
// }
// var b = prompt("enter your age", "")
// if (b == 20) {
//     alert("correct");
// }
// else {
//     alert("incorrect");
// }
// var c = prompt("enter your pin", "")
// if (c == 1234) {
//     alert("correct");
// }
// else {
//     alert("incorrect");
// }

// TOPIC = 11 {Comparison operators}
// let age = 18;
// if (age != 18){
//     console.log("you are eligible");
//     alert ("you are eligible");
// }
// else{
//     console.log("you are not eligible");
//     alert ("you are not eligible");
// }

// let yourTicketNumber = prompt("Enter your ticket number:");
// if (yourTicketNumber == 487208) {
//     alert("Congratulations! You won the lottery.");
// }
// else {
//          alert("Better luck next time.");
//      }
     
// TOPIC = 12 if...else and else if statements

// var age = prompt("Enter your age!")
// if( age > 18){
//     console.log("You're 18 plus");
// }
// else if( age < 18){
//     console.log("you're under 18");
// }
// else{
//     alert("you're 0");
// }
// var correctAnswer = "pakistan";
// var correctAnswer1 = "asian";
// var heading = document.getElementById("myHeading");
// var x = prompt("What is your nationality?");
// if (x == "pakistan") {
// alert("Correct you win the ticket!");
// console.log("Correct you win the ticket!");
// console.log(heading.);
// }
// else if (x == "india" ) {
//     alert("you're close");
//     console.log("you're close!");
//     console.log(heading.textContent);
    
// }
// else {
// alert("Incorrect");
// }
var heading = document.getElementById("myHeading");
        var x = prompt("What is your nationality?");
        if (x.toLowerCase() === "pakistan") {
            alert("Correct, you win the ticket!");
            heading.textContent = "Your answer is: Pakistan"; // Show the result on the heading
        } else if (x.toLowerCase() === "india") {
            alert("You're close!");
            heading.textContent = "Your answer is: India"; // Show the result on the heading
        } else {
            alert("Incorrect");
            heading.textContent = "Your answer is incorrect"; // Show 'incorrect' message on the heading
        }