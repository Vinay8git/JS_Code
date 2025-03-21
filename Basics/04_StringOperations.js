let witch = "Geralt of Rivia";
let w1 = "Geralt Of Rivia";
let w2 = "Geralt of Rivia";


//Acces
console.log(witch[0]);
console.log(witch.charAt(0));
console.log(witch.at(1));
console.log(witch.charCodeAt(1));

//Comaprison
console.log(witch==w1);
console.log(witch==w2);

//Conversion
console.log(witch.toUpperCase());

//Concatenation
console.log(witch.concat(" is a Witcher"));
console.log(true + 4+5+4.5);//1+4+5+4.5

//Length
console.log(witch.length);

//Substring
console.log(witch.substring(7, 11, 0));

//Search
console.log(witch.search("Rivia"));
console.log(witch.search("R"));

//Replace
console.log(witch.replace("Rivia", "Vengerberg"));
console.log(witch.replace("R", "V"));

//Split
let arr = witch.split(" ");
console.log(arr);

//Trim
let sentence = "   Yeneffer Of Vengerberg   ";
console.log(sentence.trim());
