// 1.For Loop

let a = 1;
// for (let i = 0; i < 100; i++) {
    //     console.log(a +i);
    //     alert(a+i);
    
    // }
    for (let index = 1; index < 100; index++) {
        const element = a + index;
        console.log(element);
    
    if(element == 100){
        alert("hello");
    }    
}

// 2.For in Loop
var abc ={
    name: "zohaib",
    age:"21",
    nationality:"pakistani",
    company:"abc"
}
for (const key in abc) {
    if (Object.prototype.hasOwnProperty.call(abc, key)) {
        const element = abc[key];
        console.log(key,element);
        // alert(element)
    }
}
// 3.For of loop
let b = [1,2,3,4,5,6,7,8,9];
for (const element of b) {
    console.log(element);
    
    
}
// 4.While loop
let i = 1;
while (i < 10) {
    console.log(i)
    i++;
}

// 5.Do While loop
let i = 1;
do {
    console.log(i)
    i++;
} while (i<6)