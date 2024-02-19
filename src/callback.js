// const students = ["Berkay", "Cenk", "Mert", "Orkun", "Hicran", "Buse", "Onder"];

// const ourOwnForEach = (arr, callbackFn) => {
//   for (let index = 0; index < arr.length; index++) {
//     callbackFn(arr[index], index);
//   }
// };

// ourOwnForEach(
//   ["Ahmet", "Mehmet", "Furkan"], 
//   (student, index) =>console.log(`index ${index}: ${student}`)
// );
// ourOwnForEach(students,
//   logElementWithIndex
//   );

// const logElementWithIndex = (element, index) => {
//   console.log(`index ${index}: ${element}`);
// };

// ourOwnForEach(students, (student) => console.warn(student));

let input1=prompt("Bir sayı giriniz.");
let getNumber1=parseFloat(input1);
let input2=prompt("Bir sayı giriniz.");
let getNumber2=parseFloat(input2);

const manipulateNumber=(num1,num2,callbackFunction)=>{
  return callbackFunction(num1,num2)
}

const add=(num1,num2)=>(num1+num2);
const minus=(num1,num2)=>(num1-num2);
const multiply=(num1,num2)=>(num1*num2);
const divide=(num1,num2)=>(num1/num2);

console.log(manipulateNumber(getNumber1,getNumber2,add));
console.log(manipulateNumber(getNumber1,getNumber2,minus));
console.log(manipulateNumber(getNumber1,getNumber2,multiply));
console.log(manipulateNumber(getNumber1,getNumber2,divide));