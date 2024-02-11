//indexOf
let text2 = "Sayın Barkın Sayın";
console.log(text.indexOf("Ders"));
console.log(text2.indexOf("Sayın", text2.indexOf("Sayın") + 1));

//trim
let bosluklu = "      JavaScript     dersleri     ";
console.log(bosluklu.trim());

//concat
console.log(text.concat(" Orkun Durmaz"));
console.log(text + " Orkun Durmaz");

//toUpperCase,toLowerCase
console.log(text.toLowerCase());
console.log(text.toUpperCase());

//slice
console.log(text.slice(0, 4));
console.log(text.slice(4, -1));
console.log(text.slice(text.length - 1));

//substring
//-li değerleri 0 kabul eder.
//küçük olan tarafı başlangıç olarak kabul eder.
console.log(text.substring(10, 4));
console.log(text.substring(10, -3));

//replace,replaceAll
console.log(text2.replace("Sayın", "Mahmut"));
console.log(text2.replace(" ", " Mahmut "));
console.log(text2.replaceAll("Sayın", "Barkın"));

//includes
console.log(text.includes("Ders"));

//search
console.log(text.search("Dersi"));

//Template Literals
const firstName = "Barkın";
const lastName = "Sayın";
const number = "170218009";
const grade = "C2";

console.log(
  `${number} Numaralı öğrencimiz ${firstName} ${lastName},${grade} seviyesine geçme hakkı sağlamıştır`
);

//sadece ikinci kelimeyi veya üçüncü kelimeyi replace yapmak
const text3 = "Sayın Barkın Sayın Barkın Sayın Barkın";
const replacedString = "Sayın";
const newString = "Mahmut";
let konum = text3.indexOf(
  replacedString,
  text3.indexOf(replacedString, text3.indexOf(replacedString) + 1) + 1
);
let newText =
  text3.slice(0, konum) +
  newString +
  text3.slice(konum + replacedString.length);

console.log(newText);
//veya
newText =
  text3.substring(0, konum) +
  newString +
  text3.substring(konum + replacedString.length);
console.log(newText);

//split
//Arraylerde işe yarıyor.
//Dizi haline çeviriyor.
console.log(text3.split(" "));
