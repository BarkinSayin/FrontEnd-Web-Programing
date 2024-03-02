// //"?" Kısaltılmış koşul operatörü
// let sonuc = x >= 0 ? "x pozitif." : "x negatif.";
// console.log(sonuc);

// //Expressions

// let firsName = "barkın";

// let v = 2 * 4 + 1;
// console.log(v); //Statement

// let mr = Math.sqrt(16);
// console.log(mr); //Statement

// let num3 = 34;
// let num4 = 45;
// let num7 = num3 > 20 && num4 > 30;
// num7 = 3; //beyan
// console.log((num7 = 5)); // BUNU SOR *****
// console.log(num7 + 1);
// console.log(num3 > num4); //Statement
// console.log(num3 > 20 && num4 > 30); //Statement

// Math.sqrt(25);

// console.log(Math.sqrt(25));

// //Statements

// let heigth = 201;

// if (heigth > 200) {
//   console.log("sırık");
// } else if (heigth >= 170) {
//   console.log("ortalama uzunluk");
// } else {
//   console.log("minyon");
// }

// for (let i = 0; i < 3; i = i + 1) {
//   console.log(i);
// }
// let bölünen = 25;
// let bölen;
// console.log(age > 45 ? "adult" : "underaged");
// console.log(bölen ? 25 / bölen : 0);
// let yas = 18;
// yas > 15 && console.log("Yaş 15den büyük.");
// !(yas > 15) || console.log("Yaş 15den büyük.");

// console.log(yas > 15 ? "underaged" : "adult");
// yas > 15 ? console.log("underaged") : console.log("adult");
// atanan değerler expressiondır.

// let customers = [
//   { name: "John", age: 30, city: "New York" }, //typeof object
//   { name: "Alice", age: 25, city: "London" },
// ];
// console.log(customers[0]);

// let studentData = [
//   { name: "John", grades: [90, 85, 88] },
//   { name: "Alice", grades: [78, 92, 87] },
// ];
// console.log(typeof studentData[0]);

// let customers = [
//   { name: "hakan", age: 22 },
//   { name: "barkın", age: 24 },
// ];
// console.log(customers[0]);

// function toCelsius(x) {//fonksiyon oluştururken kullanılan parantez parametre kısmıdır
//   let i=9;
//   return (5/i) * (x-32);//returnde tanımlanan değeri döndürür
// }
// console.log(toCelsius(21));//fonksiyonu kullanırken kullanılan parantez argümandır

// function power(a, b) {
//   let d = a;
//   for (let c = 1; c < b; c++) {
//     d = d * a;
//   }
//   return d;
// }
// console.log(power(4, 3));

// function greet(name) {
//   return "Merhaba,"+name;
// }
// console.log(greet("Ahmet"));

// let sum=(function(n){
//   console.log(n*n);
// })(10)
// console.log(sum);

// (function (x) {
//   console.log(x + x);
// })(5);

// function faktoriyel(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * faktoriyel(n - 1);
//   }
// }

// console.log(faktoriyel(5));

//5*faktöriyel(4)
//4*faktöriyel(3)
//3*faktöriyel(2)
//2*faktöriyel(1)

// function power (a,b){
//     let d=a;
//     for(let c=1;c<b;c++){
//         d=d*a;
//     }
//     return d;
// }
// console.log(power(4,3));

// console.log(Math.pow(3,4));

// const num = (firstNumber, secondNumber) => {
//   let newNumber = firstNumber;
//   for (let i = 1; i < secondNumber; i++) {
//     newNumber = newNumber * firstNumber;
//   }
//   return newNumber;
// };
// console.log(num(3, 4));

//Function Expression
// const sumNumbers=function(num1,num2){
//     const sum=num1+num2;
//     console.log(this);
//     return sum;
// }
// console.log(sumNumbers(4,5));

// //Arrow Function
// const multiplyNumber=(firstNumber,secondNumber)=>firstNumber*secondNumber;
// const greet=()=>console.log("Hello");
// const greetPerson=(name)=>console.log("Hello"+ name);

// console.log(multiplyNumber(2,4));
// console.log(greet());
// console.log(greetPerson("Barkın"));

// const divideNumber=(num3,num1=1,num2=1)=>{
//     const divide=num3/num2/num1;
//     return divide;
// }
// console.log(divideNumber(6,2));

// function reverse(array) {
//   const reverseNames = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     reverseNames[reverseNames.length] = array[i];
//   }
//   return reverseNames;
// }

// const reverse = (array) => {
//   const reverseValues = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     reverseValues[reverseValues.length] = array[i];
//   }
//   return reverseValues;
// };

// console.log(reverse(["Barkın", "Mert", "Ali", "Ege"]));
// console.log(reverse([0, 2, 4, 1]));
// console.log(reverse([9, 2, 4, 6, 7]));
// console.log(reverse([9, "barkın", true, -1]));
// console.log(reverse(["cağatay", 30, false, 1203]));

// function myDisplayer(some) {
//   console.log(some);
// }

// function myCalculator(myCallback,num1, num2) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(myDisplayer,5, 5);

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "black",
//   start: function() {
//       console.log("Engine started!");
//   }
// };

// car.price = 25000;
// delete car.color;
// car.start();
// console.log(car.start());

// let personProto = {
//   "name":"name",
//   greet: function() {
//       return "Hello!";
//   }
// };

// let person = Object.create(personProto);
// // person.name = "John";

// console.log(person["greet"]);

// const person = {
//   name: 'John',
//   age: 30
// };

// Object.seal(person);

// person.name = 'Jane';
// person.job = 'Developer';
// delete person.age;

// console.log(person);

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };

// const entriesArray = Object.entries(person);

// console.log(entriesArray);

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };
// console.log(person.hasOwnProperty("name"));
// const keysArray = Object.keys(person);

// console.log(keysArray);

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };

// const valuesArray = Object.values(person);

// console.log(valuesArray);

// const person={
//   fullName:"Ceren Dinçer",
//   age:24,
//   city:"İstanbul",
//   "email-adress":"cerendnçer@outlook.com"
// };

// console.log(person["fullName"]);

// person.isAdmin=true;
// console.log(person.isAdmin);

// person["isAdmin"]=false;
// console.log(person["isAdmin"]);

// const personAge="age";
// console.log(person[personAge]);
// const students = ["Berkay", "Cenk", "Mert", "Orkun", "Hicran", "Buse", "Onder"];

// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// const ourOwnFilter = (arr, callbackFn) => {
//   const newArr = [];
//   for (let index = 0; index < arr.length; index++) {
//     const callbackResult = callbackFn(arr[index], index);
//     if (callbackResult === undefined) {
//     } else if (!(callbackResult % 2)) {
//       newArr.push(callbackResult);
//     }
//   }
//   return newArr;
// };

// const doubleNumbers = (num1, index) => {
//   if (index % 2 === 0) {
//     console.log(`${index}: ${num1}`);
//     return num1;
//   }
// };
// console.log(ourOwnFilter(students, doubleNumbers));

// const ourOwnFilter =(arr,callback)=>{
//     const newArr=[];
//     for (let index = 0; index < arr.length; index++) {
//         if (callback(arr[index],index)) {
//             newArr.push(arr[index])
//         };

//     }
//     return newArr;
// }

// const ourOwnFilterStudents=(student,index)=>index%2===0

// console.log(ourOwnFilter(students,ourOwnFilterStudents));
"use strict";

// function Character(nickName,characterClass,level,subClass){
//     this.nickName=nickName;
//     this.characterClass=characterClass;
//     this.level=level;
//     this.subClass=subClass

//     Object.seal(this)
// }

// const newCharacter=new Character("DeepFreeze","Mage",80,"Frost Mage");
// // delete newCharacter.nickName;
// console.log(newCharacter);

// const newArr=[]
// function add(obj){
//     if (obj instanceof Character) {
//         newArr.push(obj);
//     }
//     else{
//         throw "Bu Character nesnesine ait değil"
//     }
// }
// add(newCharacter)
// // add("Mürsel")
// console.log(newArr);

// Character.prototype.msg="Bu film vizyonda değil"

// Character.prototype.fn= ()=>{
//     console.log(this.nickName);
// }
// console.log(newCharacter.msg);

// function Person(firstName,lastName,age,favoriteMovie,phone){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.age=age;
//     this.favoriteMovie=favoriteMovie;
//     this.phone=phone;
// }

// const newPerson= new Person("Barkın","Sayın",24,"Harry Potter","05246946789")
// console.log(newPerson);

// const newPerson2= new Person("Orkun","Durmaz",34,"Friends","02564325678")
// console.log(newPerson2);

class Person {
  #firstName;
  #lastName;
  #password = "1234";
  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.age = age;
    this.fullName = () => `${this.#firstName} ${this.#lastName}`;
  }
  get getfullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }
  set setPassword(password) {
    this.#password = password;
  }
}

const newPerson = new Person("Barkın", "Sayın", 24);
console.log(newPerson.fullName());
newPerson.setPassword = "4567";
console.log(newPerson);
// console.log(newPerson.firstName);
// console.log(newPerson.age);
// console.log(newPerson.getfullName);

// const log=function(num){
//     console.log(num);
// }
// const add=function(num1,num2){
//     return num1+num2
// }
// const divide=function(num1,num2){
//     return num1/num2
// }
// const calculate=function(num1,num2,calculateCallback,logCallback){
//     let result=calculateCallback(num1,num2);
//     logCallback(result);
// }
// calculate(30,15,divide,log)

const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(total);

// const fruits=[5,43,37777,17,85];
// fruits.sort();
// console.log(fruits);
