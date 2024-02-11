const fruits = ["Banana", "Orange", "Apple", "Mango"];

//farkli tipler tutabilir
const arr = ["John", 1, true, null, undefined, [1, 2, 3, [11, 22, 33, [111, 222, 333]]]];

//bracket notation
console.log(fruits[4]);
fruits[2] = "Kiwi";
fruits[fruits.length] = "Cherry";
fruits[9] = "Cherry"; /* empty yani bos elemanlar yaratilir */
console.log(fruits);

//Array length
console.log(fruits.length);

//Array toString()
console.log(fruits.toString());

//Array at()
console.log(fruits.at(2));
console.log(fruits[2]);//tercih edilen**

//Array join()
console.log(fruits.join("--"));

//Array pop()
console.log(fruits.pop());
console.log(fruits);

//Array push()
fruits.push("Kiwi");
console.log(fruits);

//Array shift()
fruits.shift();
console.log(fruits);

//Array unshift()
fruits.unshift("Lemon");
console.log(fruits);

//Array delete
//sildiği yer undefined değer olur.
delete fruits[0];
console.log(fruits);

//copyWithin()
console.log(fruits.copyWithin(2,0));

//splice()
fruits.splice(2, 1,"lemon","kiwi");//orijinali bozuyor**
console.log(fruits.splice(2, 1,"lemon","kiwi"));
console.log(fruits);

//toSpliced()
const months = ["Jan", ["Feb", ["Mar",[ "Apr"]]]];
const spliced = months.toSpliced(0, 1,"apple");//orijinali bozmuyor**
console.log(spliced);

//String.split
const fullName = "Hakan Berke Temur";
// console.log(fullName.split(" "));
// console.log("Buse,Onder,Cagatay".split(","));
// console.log(fullName.split(""));

//includes
console.log(fruits.includes("Saab"));
console.log(fruits.includes("Mert"));


//Örnekler

const videoGames=[
  "God of War:Ragnarök",2000,true,
  "Last of Us",1000,true,
  "Hitman",500,true,
  "Red dead Redemption 2",2000,true,
  "GTA6",5000,true,
  "Uncharted",1500,true,
  "Assassin Creed:Valhalla",2000,true,
  "Crysis",1000,true
];

// //eklemeye 4 adet örnek
videoGames.splice(videoGames.length*3,0*3,"Splinter Cell",600,true);
// videoGames.splice(4*3,0*3,"HearthStone",200,true,"Counter Strike",500,true);
// videoGames.splice(6*3,0*3,"League of Legends",100,true);
// videoGames.splice(8*3,0*3,"World of Warcraft",400,true);

// //çıkartmaya 4 adet örnek
videoGames.splice(2*3,1*3);
// videoGames.splice(3*3,2*3);
// videoGames.splice(5*3,3*3);
// videoGames.splice(7*3,4*3);

// //güncellemeye 4 adet örnek
videoGames.splice(0*3,1*3,"God of War:Ragnarok",2000,false,);
// videoGames.splice(2*3,1*3,"Hitman",800,true,);
// videoGames.splice(3*3,2*3,"Red dead Redemption 2",2200,true,"GTA6",5000,false,);
// videoGames.splice(7*3,1*3,"Crysis",600,true);

// //hepsini kapsayan örnekler
videoGames.splice(0*3,2*3,"Lies of P",2000,false,"God of War:Ragnarök",2000,false,"GTA6",5000,false);
// let price=videoGames.splice(videoGames.indexOf("God of War:Ragnarök")+1,1)
// let onStock=videoGames.splice(videoGames.indexOf("God of War:Ragnarök")+2,1)
console.log(price);
console.log(onStock);
console.log(videoGames);


// const students = [
//   "hakan",
//   "çağatay",
//   "barkın",
//   "mert",
//   "ege",
//   "ceren",
//   "berkay",
//   "ali",
// ];
// let search = "AMEHMET".trim().toLocaleLowerCase();

// //Benim yaptığım
// for (let i = 0; i < students.length; i++) {
//   if (search === students[i].toLocaleLowerCase()) {
//     console.log(search);
//     break;
//   } else if (
//     i === students.length - 1 &&
//     students[i].toLocaleLowerCase() !== search
//   ) {
//     console.log("Bulunamadı");
//   }
// }

// //Orkun hocanın yaptığı
// let result = null;
// for (let i = 0; i < students.length; i++) {
//   if (search === students[i].toLocaleLowerCase()) {
//     result = students[i].toLocaleLowerCase();
//     break;
//   }
// }
// if (result !== null) {
//   console.log(result);
// } else {
//   console.log("Bulunamadı");
// }

