let num = 0;
const sentence = "Mert erken yat, programlama calis!";

//while
// while (num < 10) {
//   //do something
//   console.log("Mert erken yat, programlama calis!");
//   num++;
// }

// console.log(sentence[0]);
// console.log(sentence[1]);
// console.log(sentence[2]);
// console.log(sentence[3]);
// console.log(sentence[sentence.length - 1]);

let index = 0;

// while (index < sentence.length) {
//     if (sentence[index] === " " || sentence[index] === ",") {
//         index++;
//         // break;
//         continue
//     }
//     console.log(sentence[index]);
//     index++;
// }

//do while
// do {
//     console.log("do while");
// } while (false)

//for, index tanimla, kosul koy, index'i degistir
for (let i = 0; i < sentence.length; i++) {
    if(sentence[i] === " " || sentence[i] === ",") {
        continue;
    }
    console.log(sentence[i]);
}
// i = "Ahmet";
let i = "5";
console.log(i);

//Örnekler

// let num = 0;
// let text = "Mert erken yat.Ders çalış";

// while (num < text.length) {
//   if (text[num] === " " || text[num] === ".") {
//     num++;
//   }
//   console.log(text[num]);
//   num++;

// }

// let text = "Mert erken yat.Ders çalış";
// let num = text.length-1;

// while (num>=0) {
//   if (text[num] === " " || text[num] === ".") {
//        num--;
//    }
//   console.log(text[num]);
//   num--;
// }

// for(let i=num;i>=0;i--){
//   if (text[i] === " " || text[i] === ".") {
//            i--;
//        }
//   console.log(text[i]);
// }

// let num=5;

// while(num<text.length){
//   console.log(text[num]);
//   num=num+5;
// }

// for(let i=5;i<text.length;i=i+5){
//   console.log(text[i]);
// }

// let num = 0;

// while(num<text.length){
//    console.log(`ìndex ${num}`);
//    console.log(text[num]);
//    num+=2;
// }

// for(let i=0;i<text.length;i+=2){
//   console.log(`index ${i}`);
//   console.log(text[i]);
// }