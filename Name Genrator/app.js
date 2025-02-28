// let random = Math.random();

// let first, second, third;

// // For First
// if (random < 0.33) {
//     first = "crazy";
// } else if (random > 0.66) {
//     first = "amazing";
// } else {
//     first = "fire";
// }

// // For Second
// if (random < 0.33) {
//     second = "Engine";
// } else if (random > 0.66) {
//     second = "Foods";
// } else {
//     second = "Garments";
// }

// // For Third

// if (random < 0.33) {
//     third = "Bros";
// } else if (random > 0.66) {
//     third = "Limited";
// } else {
//     third = "Hub";
// };

// console.log(`${first} ${second} ${third}`);

function generateRandomName() {
    let first, second, third;

    let random1 = Math.random();
    let random2 = Math.random();
    let random3 = Math.random();

    // For First
    if (random1 < 0.33) {
        first = "crazy";
    } else if (random1 > 0.66) {
        first = "amazing";
    } else {
        first = "fire";
    }

    // For Second
    if (random2 < 0.33) {
        second = "Engine";
    } else if (random2 > 0.66) {
        second = "Foods";
    } else {
        second = "Garments";
    }

    // For Third
    if (random3 < 0.33) {
        third = "Bros";
    } else if (random3 > 0.66) {
        third = "Limited";
    } else {
        third = "Hub";
    }

    console.log(`${first} ${second} ${third}`);
}

// Call function multiple times to get different results
generateRandomName();
generateRandomName();
generateRandomName();


