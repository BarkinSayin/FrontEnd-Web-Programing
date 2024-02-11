let month = 12;

if (month === 0) {
  console.log("invalid number");
} else if (Math.abs(month) % 12 === 1) {
  console.log("Ocak");
} else if (Math.abs(month) % 12 === 2) {
  console.log("Şubat");
} else if (Math.abs(month) % 12 === 3) {
  console.log("Mart");
} else if (Math.abs(month) % 12 === 4) {
  console.log("Nisan");
} else if (Math.abs(month) % 12 === 5) {
  console.log("Mayıs");
} else if (Math.abs(month) % 12 === 6) {
  console.log("Haziran");
} else if (Math.abs(month) % 12 === 7) {
  console.log("Temmuz");
} else if (Math.abs(month) % 12 === 8) {
  console.log("Ağustos");
} else if (Math.abs(month) % 12 === 9) {
  console.log("Eylül");
} else if (Math.abs(month) % 12 === 10) {
  console.log("Ekim");
} else if (Math.abs(month) % 12 === 11) {
  console.log("Kasım");
} else {
  console.log("Aralık");
}

let x = 0;
let months = ((Math.abs(x) - 1) % 12) + 1;
switch (months) {
  case 1:
    console.log("Ocak");
    break;
  case 2:
    console.log("Şubat");
    break;
  case 3:
    console.log("Mart");
    break;
  case 4:
    console.log("Nisan");
    break;
  case 5:
    console.log("Mayıs");
    break;
  case 6:
    console.log("Haziran");
    break;
  case 7:
    console.log("Temmuz");
    break;
  case 8:
    console.log("Ağustos");
    break;
  case 9:
    console.log("Eylül");
    break;
  case 10:
    console.log("Ekim");
    break;
  case 11:
    console.log("Kasım");
    break;
  case 12:
    console.log("Aralık");
    break;
  default:
    console.log("invalid number");
    break;
}

let week = 10;

if (week > 7) {
  mod = week % 7;
} else {
  mod = week;
}
if (mod === 1) {
  console.log("Pazartesi");
} else if (mod === 2) {
  console.log("Salı");
} else if (mod === 3) {
  console.log("Çarşamba");
} else if (mod === 4) {
  console.log("Perşembe");
} else if (mod === 5) {
  console.log("Cuma");
} else if (mod === 6) {
  console.log("Cumartesi");
} else if (mod === 7) {
  console.log("Pazar");
} else {
  console.log("invalid number");
}

let weeks = 7;
let mod = weeks % 7;

if (weeks < 1) {
  console.log("invalid number");
} else if (mod === 1) {
  console.log("Pazartesi");
} else if (mod === 2) {
  console.log("Salı");
} else if (mod === 3) {
  console.log("Çarşamba");
} else if (mod === 4) {
  console.log("Perşembe");
} else if (mod === 5) {
  console.log("Cuma");
} else if (mod === 6) {
  console.log("Cumartesi");
} else if (mod === 0) {
  console.log("Pazar");
} else {
  console.log("invalid number");
}

switch (mod) {
  case 1:
    console.log("Pazartesi");
    break;
  case 2:
    console.log("Salı");
    break;
  case 3:
    console.log("Çarşamba");
    break;
  case 4:
    console.log("Perşembe");
    break;
  case 5:
    console.log("Cuma");
    break;
  case 6:
    console.log("Cumartesi");
    break;
  case 0:
    console.log("Pazar");
    break;
  default:
    console.log("invalid number");
    break;
}
