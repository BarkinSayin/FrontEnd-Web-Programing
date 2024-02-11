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

