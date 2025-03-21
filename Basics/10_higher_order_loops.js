//Higher Order For-Loops

//For-of Loop
const arr = [1, 2, 3, 4, 5];
for (const nums of arr) {
    // console.log(nums+1);
}

const myMap=new Map();
myMap.set('name','Vinay');
myMap.set('age',25);
myMap.set('height',185);
myMap.set('weight',75);

// for(const entries of myMap)
    // console.log(entries);

// for(const [key,value] of myMap)                          //Map Destructuring - [key,value]
    // console.log(`Key:${key}, Value:${value}`);

for(const [key,value] of myMap.entries()) {                //Also Works
    // console.log(`Key:${key}, Value:${value}`);
}

//Object
const obj = {name: 'Vinay', age: 25, height: 185, weight: 75};
// for(const key of obj) {                                                  //TypeError: obj is not iterable
//     console.log(`${key}: ${obj.key}`);
// }



////For-in Loop             -    Iterates over the keys
for (const key in arr) {
    // console.log(key);
}

for(const key in arr) {
    // console.log(arr[key]);
}

//Maps
for (const key in myMap) {
    // console.log(myMap[key]);               //Output - Nothing Runs fine but no output
}


for(const key in obj)
{
    // console.log(`${key}: ${obj[key]}`);
}

////ForEach Loop

arr.forEach(num => {
    // console.log(num+1);
});


myMap.forEach((value, key) => {
    // console.log(`Key:${key}, Value:${value}`);
});

// obj.forEach((value, key) => {                      //TypeError: obj.forEach is not a function
//     console.log(`${key}: ${value}`);
// });