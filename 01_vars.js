//Declare Variables
const accNum=123456  //contant
let cusName="Chai"   //New Approach
var email="code@gmail.com"  //Old Practice Due To Scope Defiance Issue
accBalance = 1234700    // No Keyword Variable

//Update
// accNum=234576 //TypeError: Assignment to constant variable.
cusName="Hit"
email= "codeco@google.in"
accBalance= 5000000000

console.log(cusName);
console.table([accNum, cusName, email, accBalance]);