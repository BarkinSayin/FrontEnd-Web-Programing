// Quiz1 1.soru

// const numbers = [2, 4, 6, 8, 10, 1, 2, 3, 5, 6, 7, 8, 9, 8];
// const newArr = [];
// for (let i = 0; i < numbers.length; i++) {
//   for (let x = i + 1; x < numbers.length; x++) {
//     if (numbers[i] === numbers[x] && !newArr.includes(numbers[i])) {
//       newArr.push(numbers[i]);
//     }
//   }
// }
// console.log(newArr);

// Quiz1 2.soru

const maxNumber = 20;
const primes = [];

for (let num = 2; num <= maxNumber; num++) {
  let isPrime = true;
  for (let divisor = 2; divisor < num; divisor++) {
    if (num % divisor) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primes.push(num);
  }
}

console.log(primes);

// Quiz1 3.soru

const numbers = [4, 10, 8, 6, 10, 9, 2, 10, 4, 6];

let count1 = 1;
let mostRepeatingNumber = 0;
for (let i = 0; i < numbers.length; i++) {
  let count2 = 1;
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] === numbers[j]) {
      count2++;
    }
  }
  if (count2 > count1) {
    count1 = count2;
    mostRepeatingNumber = i;
  }
}
console.log(numbers[mostRepeatingNumber]);

// const numbers = [4, 10, 8, 6, 10, 9, 2, 10, 4, 6,12,12,12];
// const newArr=[];
// let count1 = 0;
// let a = 0;
// for (let i = 0; i < numbers.length; i++) {
//   let count2 = 1;
//   for (let j = i+1; j < numbers.length; j++) {
//     if (numbers[i] === numbers[j]) {
//       count2++;
//     }
//   }
//   if (count2 > count1) {
//     count1 = count2;
//     a=i;
//   }
//   if(count2=count1){
//     newArr.push(numbers[a]);
//   }
//   console.log(count2);
// }
// console.log(newArr);

//Orkun hocanın sorusu
// const arr=[9,6,1,2,8,0,12,14,25,27,4,17,3,5];
// const hedefToplam = 40;
// console.log(arr.length);
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] === hedefToplam) {
//             console.log(`(${arr[i]}, ${arr[j]})`);
//         }
//     }
// }