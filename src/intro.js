//Degisken tanimlama yontemi

//var, let, const, dogrudan degisken adi ile

// firstName = "Cenk";
// console.log(firstName);

// var lastName = "Kaynak";
// console.log(lastName);

//modern olarak kullanilan yontemler const ve let
// const PI; /* hata verir, const degisken yaratilirken deger atamak zorunludur */
const PI = 3.14;
// PI = 3.15; /* hata verir */
console.log(PI);

//degiken yaratma      = deger atama
let instructorName = "Orkun Durmaz 25";
instructorName = "Cenk Kaynak";
console.log(instructorName);

//string
console.log("Bu bir metindir");

//number
console.log(2024);

//boolean
console.log(true, false);

//undefined
let age;
console.log(age); //undefined

//null
let email = null;
console.log(email); //null

//typeof
console.log(typeof instructorName);


//cases
//kebab-case: lorem-ipsun-dolor-sit-amet
//camelCase: loremIpsumDolorSitAmet
//PascalCase: LoremIpsumDolorSitAmet
//snake_case: lorem_ipsum_dolor_sit_amet