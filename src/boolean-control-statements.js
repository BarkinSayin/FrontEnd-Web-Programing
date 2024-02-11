//true, false

let isDeleted = false;
let isUpdated = true;
let isOnStock = true;
let isAvailable = false;
let isHealthy = true;

// console.log(typeof isDeleted);
// console.log(isDeleted);

//--Karşılaştırma Operatörleri--

//Eşittir("==")
console.log(5 == "5");

//Tam Eşittir("===")
console.log(5 === "5");

//Eşit Değildir("!=")
console.log(5 != "5");

//Tam Eşit Değildir("!==")
console.log(5 !== "5");

//Büyüktür(">")
console.log(10 > 5);

//Küçüktür("<")
console.log(5 < 10);

//Büyük Eşittir(">=")
console.log(10 >= 10);

//Küçük Eşittir("<=")
console.log(5 <= 10);

// truthy, falsy values
console.log(Boolean(5234));
console.log(Boolean(12));
console.log(Boolean(-112345351));
console.log(Boolean(-1));
console.log(Boolean("Ali Veli"));
console.log(Boolean("0"));
console.log(Boolean(" "));
console.log(Boolean("false"));

//falsy
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean());

//logical expression
// && and, || or , ! not
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

//ternary operator
// age > 18 ? console.log("adult") : console.log("underaged"); //expression
// if (age > 18) { console.log("adult"); } else { console.log("underaged"); } //statement

// let ageBar = if (age > 18) { return "adult" } else { return "underaged" };
// let ageBar = age > 18 ? "adult" : "underaged";

// console.log(age > 18 ? "adult" : "underaged");

// yas > 15 && console.log("Yaş 15den büyük.");
// !(yas > 15) || console.log("Yaş 15den büyük.");

// If-else ifadesi
if (x > 0) {
  console.log("x pozitif.");
} else if (x < 0) {
  console.log("x negatif.");
} else {
  console.log("x sıfır.");
}

//Switch ifadeleri
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Pazartesi");
    break;
  case "Tuesday":
    console.log("Salı");
    break;
  default:
    console.log("Diğer günler");
}

//Örnekler

let age = 66;

if (age < 18) {
  console.log("underaged");
} else if (age >= 65) {
  console.log("senior");
} else if (age >= 18) {
  console.log("young adult");
} else {
  console.log("can not pass");
}

if (age < 18) {
  console.log("underaged");
} else if (age >= 18 && age < 65) {
  console.log("young adult");
} else if (age === 65 || age > 65) {
  console.log("senior");
} else {
  console.log("can not pass");
}

