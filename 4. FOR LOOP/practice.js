/* Write a program to print to the marks of a student in an object using for loop 
 obj ={ ahmed:80, rohan:70, zohaib:85, usman:30 }*/

// For Loop

// const marks = { ahmed: 80, rohan: 70, zohaib: 85, usman: 30 };

// for (let student in marks) {
// console.log(`${student}: ${marks[student]}`);
// if (marks[student] < 60) {
//         alert(`${student} You 're Fail.`);
//         console.log(`${student} has failed.`);
//     }
// };

// var marks = {
//     ahmed: 80, rohan: 70, zohaib: 85, usman: 30
// };


// for (const key in marks) {
//     if (Object.prototype.hasOwnProperty.call(marks, key)) {
//         const element = marks[key];
//         console.log(`${key}:   $ {marks[elemnt]} `);
//         // console.log(`${student}: ${element]}`);
//         if (marks[key] < 60) {
//                      alert(`${key} You 're Fail.`);
//                      console.log(`${key} has failed.`);
//                  }
//     }
// };

// For-in Loop 

var marks = {
    ahmed: 80, rohan: 70, zohaib: 85, usman: 30
};

for (const key in marks) {
    const element = marks[key];  // Get the mark of the student

    console.log(`${key}: ${element}`);  // Corrected console log

    // if (element < 60) {  // Check if marks are below 60
    //     alert(`${key} You're Fail.`);
    //     console.log(`${key} has failed.`);
    // }
}

//  write a program to print "try again" until the user enter the correct number

let correctNumber = 7; // The correct number
let userInput;

while (userInput != correctNumber) {
    userInput = prompt("Enter the correct number:");

    if (userInput == correctNumber) {
        alert("🎉 Correct! You guessed the right number.");
    } else {
        alert("❌ Wrong! Try again.");
    }
}

// Q: write a function to mean 5 numbers

function calculatemean(5, 10, 15, 20, 25) { 
    let sum = 5+10+15+20+25;
    let mean = sum/5;
    return mean;
}
let result = calculatemean(5, 10, 15, 20, 25);
console.log("mean, result")