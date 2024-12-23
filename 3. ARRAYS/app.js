let arr = [1,2,3,4,5,6]

arr [2] = 
// 1. toString()
arr.toString();

// 2. join()
console.log(arr.join(" and "))

// 3. pop()
arr.pop();

// 4. push()
arr.push(10);

// 5. Shift()
arr.shift()

// 6. Unshift()
arr.unshift("zohaib");

// 7. Delete []
delete arr[5]


console.log(arr); 
console.log(arr.length)

// 8. Concat()
let a = [1,2,3,4];
let b = [5,6,7,8];
let c = [9,10,11,12];

let result = a.concat(b,c);
console.log(result);

// 9. shot()
let sort = [2,5,3,6,4,5,1]
sort.sort();
    console.log(sort);
    // EX:2
    let sort1 = ['g','f','b','e','c','a','d']
    sort1.sort();
    console.log(sort1);

//10. Splice
let  abc1 = [1,2,3,4,5,6,7,8];
abc1.splice(1,2);
console.log(abc1);
let  abc2 = [1,2,3,4,5,6,7,8];
abc2.splice(1,2, 33,'Hello');
console.log(abc2);

// 11. Slice 
let array = [1,2,3,4,5,6,7,8];
let slicearray = array.slice(1,5);
console.log(array); 
console.log(slicearray); 


// var city0 = "Atlanta";
// var city1 = "Baltimore";
// var city2 = "Chicago";
// var city3 = "Denver";
// var city4 = "Los Angeles";
// var city5 = "Seattle";
// console.log("Welcome to " + city3);

// var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
// cities ["0"] = "pakistan";
// console.log(cities[0]); 
// console.log(cities[1])
// console.log(cities[2])
// console.log(cities[3])
// console.log(cities.toString())