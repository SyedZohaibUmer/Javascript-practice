// LOOPING THROUGH ARRAYS //

// 1.Topic: For Each Loop//

let a = [1,25,29,50,55,60]

/*Classical Forloop*/

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
// }

// 1.For Each Loop//

a.forEach((value, index, arr)=>{
    console.log(value, index , arr );
});

// 2. For in Loop//

let obj = {
    a: 1,
    b: 2,
    c: 3,
};
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element);
        
    }
}

// 2. For of Loop//
for (const element of a) {
    console.log(element);
}

// 3. Map()

let arr = [1,3,5,7,9,11]

// // First way and also called loop way
let newarr1 = []
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newarr1.push(element*2)
}

// Map way and smart way
let newarr = arr.map((e )=> {
    return e*2
})

console.log(newarr)
// 4. Filter()
const graterthan5 = (e) =>{
    if(e>5){
        return true
    }
    return false
}
console.log(arr.filter(graterthan5));

// 5. Reduce

let arr2 = [1,2,3,4,5,6]
const red =(a,b)=>{
    return a+b
}
console.log(arr2.reduce(red))

// 6.Array.from()

Array.from("zohiab")
console.log(Array.from("zohiab"))