//Declaration

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArrays = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// let anotherArray = Array(1, "Hi", 0.012, 'r', undefined, null);
// console.log(arr);
// console.log(newArrays);
// console.log(anotherArray);
// console.log(typeof arr);

//Accessing elements
// console.log(arr[0]);
// console.log(arr.at(0));
// console.log(arr.length);
// console.log(arr[arr.length - 1]);

//Dynamic
// arr.length = 5;
// console.log(arr);
// arr.push(16);
// console.log(arr);

//Methods
// console.log(arr.concat(newArrays));
// console.log(arr);
// console.log(newArrays);

// console.log(arr.includes(5));
// console.log(arr.indexOf(5));
// console.log(arr.lastIndexOf(5));
// console.log(arr.reverse());
// console.log(arr);

// let num=[1,2,3,4,5];
// num.fill = (-1);
// console.log(num);


// let arrslc=arr.slice(0, 5);
// console.log(arrslc);
// console.log(arr);

// let arr2 = arr.splice(5, 10);
// console.log(arr2);
// console.log(arr);


// let d3=[1,2,[3,4,[5,6,[7,8]]]];
// let arr7=d3.flat(Infinity);
// console.log(arr7);

// console.log(arr.join(''));
// console.log(typeof arr.join(''));





// Iterative Methods
// console.log(arr.find(5)); //TypeError: number 5 is not a function -- Expects a function
// let arr1=arr.filter((a) => a%2==0);
// console.log(arr1);

// let arr2=arr.map((a) => a*2);
// console.log(arr2);

// let arr3=arr.find((a) => a%2==0);
// console.log(arr3); //2

// let arr4=arr.some((a) => a%3==0);
// console.log(arr4);  //Boolean: true

//forEach

// function check(a){
//     if(a%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let forNum=arr.forEach(function(a){
//     if(a%2==0){
//         console.log(a);
//     }
// });

//Done
// Declaration

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArrays = [...arr]; // Using spread operator for cloning
let anotherArray = [1, "Hi", 0.012, 'r', undefined, null]; // Using array literal for consistency

// Accessing elements
console.log(arr[0]);
console.log(arr.at(0));
console.log(arr.length);
console.log(arr[arr.length - 1]);

// Dynamic
arr.length = 5;
console.log(arr);
arr.push(16);
console.log(arr);

// Methods
console.log([...arr, ...newArrays]); // Using spread operator for concatenation
console.log(arr);
console.log(newArrays);

console.log(arr.includes(5));
console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(5));
console.log(arr.reverse());
console.log(arr);

let num = [1, 2, 3, 4, 5];
num.fill(-1); // Using fill method correctly
console.log(num);

let arrslc = arr.slice(0, 5);
console.log(arrslc);
console.log(arr);

let arr8 = arr.splice(5, 10);
console.log(arr8);
console.log(arr);

let d3 = [1, 2, [3, 4, [5, 6, [7, 8]]]];
let arr7 = d3.flat(Infinity);
console.log(arr7);

console.log(arr.join(''));
console.log(typeof arr.join(''));

// Iterative Methods
let arr1 = arr.filter(a => a % 2 === 0); // Using arrow function for simplicity
console.log(arr1);

let arr2 = arr.map(a => a * 2); // Using arrow function for simplicity
console.log(arr2);

let arr3 = arr.find(a => a % 2 === 0); // Using arrow function for simplicity
console.log(arr3); // 2

let arr4 = arr.some(a => a % 3 === 0); // Using arrow function for simplicity
console.log(arr4); // Boolean: true

// forEach
arr.forEach(a => {
    if (a % 2 === 0) {
        console.log(a);
    }
});




