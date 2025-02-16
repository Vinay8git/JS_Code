//Stack

let age = 25;
let height = age;

console.log(age);
console.log(height);

height = 76;
console.log(age);
console.log(height);

//Heap

let person = {
  name: "John Doe",
  age: 30
};

let anotherPerson = person;

console.log(person);
console.log(anotherPerson);

anotherPerson.age = 105;
console.log(person);
console.log(anotherPerson);