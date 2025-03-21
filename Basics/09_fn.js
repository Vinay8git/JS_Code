//Functions In JS

//Declaration
// function add(a, b) {                //Function Signature
    // return a + b;
// }
// console.log(add(2, 3));

// console.log(add(2, 3, 4));         //Extra Argument - Extra Args are Trimmed by default
// console.log(add(2));               //Missing Argument - No Error but Output- NaN
// console.log(add());               //No Argument - NaN


//Expression
//Function Expression
let add1 = function (a, b) {                //Function Signature
    return a + b;
}
// console.log(add1(2, 3));
// console.log(add1(2, 3, 4));         //Extra Argument - Extra Args are Trimmed by default

//Arrow Function
let merge = () => {
    return "Hello World!";           //Explicit Return
}
// console.log(merge());
// console.log(typeof merge); //Function

let mergeAgain = () => "Hello World!"; //Implicit Return
// console.log(mergeAgain());

//Anonymous Function
// let add2 = function (a, b) {                //Function Signature
//     return a + b;
// }    
// console.log(add2(2, 3));

let greet = (a,b) => a+b;
// console.log(greet);
// console.log(greet(2,5));

// console.log(typeof(typeof(10)));

// console.log(parseInt('Vinay'));
// console.log(parseInt('Vinay10'));
// console.log(parseInt('10Vinay'));


//Immediately Invoked Function Expression (IIFE)
(function merge3(x, y) {
    console.log(x+y); 
})('Vinay', 'Pandit');
 //IIFE - No Output
// console.log(('Vinay', 'Pandit')); //No error

// (function merge3(x, y) {
//     return x.concat(y); //IIFE - No Output
// })('Vinay', 'Pandit');
// console.log(merge3());

console.log((function merge4(x, y) {
    return x + y;
})('Vinay', 'Pandit')
);



//Null Coalescing Operator

let a = null;
let b = 10;

console.log(a ?? b); //a is null, so b is returned
console.log(b ?? a); //b is not null, so b is returned
console.log(a ?? b ?? 20); //a is null, b is not null, so b is returned

let c = undefined;
console.log(c ?? a ?? 20); //c is undefined, b is not null, so b is returned

let d = 0;
console.log(d ?? b ?? 20); //d is 0, b is not null, so b is returned

let e = '';
console.log(e ?? b ?? 20); //e is '', b is not null, so b is returned
