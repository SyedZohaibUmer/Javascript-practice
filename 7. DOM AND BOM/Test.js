let parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children);
console.log(parent.children[0].innerHTML);


 let weekdays = parent.children[0];
 weekdays.style.backgroundColor = "red";
 weekdays.style.color = "white";
 console.log(weekdays);

 let weekdays1 = parent.children[1];
 weekdays1.style.backgroundColor = "blue";
 weekdays1.style.color = "white";
console.log(weekdays1);

let weekday2 = parent.children[2];
weekday2.style.backgroundColor = "green";   
weekday2.style.color = "white";
console.log(weekday2);

let weekday3 = parent.children[3];
weekday3.style.backgroundColor = "yellow";  
console.log(weekday3);

let weekday4 = parent.children[4];
weekday4.style.backgroundColor = "pink";    
weekday4.style.color = "white";
console.log(weekday4);