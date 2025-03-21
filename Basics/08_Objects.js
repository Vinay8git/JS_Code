//Javascript Objects

//1. Creation
let dog={
    name: "Coco",                   //Properties
    age : 5,
    breed: "Golden Retriever"
}

//Constructor Method
// Object.create(cat);
// cat.name = "Pussy";
// cat.sound='Meow';

//Literal Method-Nesting
const bufalo={
    name: "Shashikant",
    age: 10,
    breed: "kaala Bhainsa",
    owner: {
        name: "Mr. Manav & Mrs. Satyarth Pandit",
        age: 25
    }
}
//Function As Attribute
// const bufalo={
//     name: "Shashikant",
//     age: 10,
//     breed: "kaala Bhainsa",
//     owner: function(){
//         return "Mr. Manav & Mrs. Satyarth Pandit";
//     }
// }

//Using Symbol As Attribute

// console.log(typeof dog);
// console.log(dog);
// console.log(cat);
// console.log(bufalo);

// Accessing properties
// console.log(dog.name);
// console.log(dog['age']);
// console.log(object[breed]);  //Error
// console.log(dog.breed);

