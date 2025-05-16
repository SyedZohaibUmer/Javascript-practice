// let myid = document.getElementById("class1");

// myid.innerText = "Say Hello";
// console.log(myid.innerText);

// let myclass2 = document.querySelector("p");
// myclass2.innerHTML = "<b>pakistan zindabad</b>";
// // myclass2.innerHTML = "<h1>Hello world</h1>";
// myclass2.style.backgroundColor = "#000";
// myclass2.style.color = "white"

// console.log(myclass2.innerHTML);

let myanimation = document.querySelector("#class3");
myanimation.innerHTML = "<b>Hello Animation</b>";
myanimation.style.backgroundColor = "#000";
myanimation.style.color = "white"
setInterval(function () {
    let colour = myanimation.style.backgroundColor;
    if (colour === "rgb(0, 0, 0)") {
        myanimation.style.backgroundColor = "green"
    } else if (colour === "green") {
        myanimation.style.backgroundColor = "blue"

    }
    else {
        myanimation.style.backgroundColor = "#000";
    }
}, 100);

//  console.log(colour);

//COLOUR CHANGER EXAMPLE //

let clourchanger = document.getElementById("class4");
clourchanger.innerHTML = "<h1>Colour Animation</h1>";
console.log(clourchanger);
clourchanger.style.backgroundColor = "black";
clourchanger.style.color = "White";

setInterval(function () {
    let colour1 = Math.round(Math.random() * 1000000);
    let colour2 = Math.round(Math.random() * 1000);
    // console.log(colour1, colour2);

    clourchanger.style.background = "#" + colour1;
    clourchanger.style.color = "#" + colour2

}, 500);

//Increase persontage Example. And use Query selector

let persontage = document.querySelector("#class5");
persontage.innerHTML = "<h1>Percentage</h1>";
persontage.style.backgroundColor = "black";
persontage.style.color = "white";
persontage.style.width = "100%";

setInterval(function () {
    let width = persontage.style.width;
    if (width === "100%") {
        persontage.style.width = "10%";
    } else {
        
        width = + width.replace("%", "");
        persontage.style.width = width+ 10 + "%";
    }


}, 500);

