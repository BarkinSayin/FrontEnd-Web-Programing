const students = [
  {
    fullName: "Berkay Turna",
    age: 25,
    isDeleted: false,
    score: 90,
    isActive: true,
    courses: ["JavaScript", "React", "Node.js"],
    instructors: [
      { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
      { fullName: "Hicran Ertugral", topics: ["TypeScript", "Angular"] },
    ],
  },
  {
    fullName: "Cenk Grid Kaynak",
    age: 32,
    isDeleted: false,
    score: 85,
    isActive: true,
    courses: ["JavaScript", "React Native", ".Net Core"],
    instructors: [
      { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
      { fullName: "Korhan Kosece", topics: [".Net Core"] },
    ],
  },
  {
    fullName: "Ali Riza Taskiran",
    age: 24,
    isDeleted: false,
    score: 92,
    isActive: true,
    courses: ["Java", "Golang"],
    instructors: [
      { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
      { fullName: "Buse Seker", topics: ["Problem Solving"] },
    ],
  },
  {
    fullName: "Hakan Berke Temur",
    age: 24,
    isDeleted: false,
    score: 92,
    isActive: true,
    courses: ["Java", "Golang"],
    instructors: [
      { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
      { fullName: "Buse Seker", topics: ["Problem Solving"] },
    ],
  },
  {
    fullName: "Barkin Sayin",
    age: 22,
    isDeleted: false,
    score: 92,
    isActive: true,
    courses: ["Java", "Golang"],
    instructors: [
      { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
      { fullName: "Buse Seker", topics: ["Problem Solving"] },
    ],
  },
  {
    fullName: "Mert Kirant",
    age: 23,
    isDeleted: false,
    score: 88,
    isActive: true,
    courses: ["Expressjs", "Node.js"],
    instructors: [
      { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
      { fullName: "Onder Tarım", topics: ["React Native"] },
    ],
  },
  {
    fullName: "Onur Ege Erkek",
    age: 23,
    isDeleted: false,
    score: 88,
    isActive: true,
    courses: ["Expressjs", "Node.js"],
    instructors: [
      { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
      { fullName: "Onder Tarım", topics: ["React Native"] },
    ],
  },
  {
    fullName: "Firat Can Tas",
    age: 24,
    isDeleted: false,
    score: 60,
    isActive: false,
    courses: ["Expressjs", "Node.js", ".Net Core"],
    instructors: [
      { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
      { fullName: "Onder Tarım", topics: ["React Native"] },
    ],
  },
  {
    fullName: "Ceren Dincer",
    age: 27,
    isDeleted: false,
    score: 75,
    isActive: true,
    courses: ["JavaScript", "HTNL"],
    instructors: [
      { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
      { fullName: "Onder Tarım", topics: ["React Native"] },
    ],
  },
  {
    fullName: "Baris Peker",
    age: 38,
    isDeleted: true,
    score: 75,
    isActive: false,
    courses: ["JavaScript", "HTNL"],
    instructors: [
      { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
      { fullName: "Onder Tarım", topics: ["React Native"] },
    ],
  },
];

//forEach
// const result = students.forEach((student, index) => console.log(`index${index}:${student.fullName}`)
// );

//map

// const result = students.map((student) => {
//   return student.fullName;
// });
// console.log(result)

//some

//  const hasGreaterThan82=students.some((student)=>{
//   return student.score>82
//  })

// const hasGreaterThan95=students.some((student)=>{
//   return student.score>95
//  })

//  console.log(hasGreaterThan82);
//  console.log(hasGreaterThan95);

//every

// const isAllActive = students.every((student) => student.isActive);
// console.log(isAllActive);

//find

// const findMe=students.find((student)=>student.fullName==="Barkin Sayin");

// console.log(findMe);

// //findIndex

// const findBarkin=students.findIndex((student)=>student.fullName==="Barkin Sayin")

// console.log(findBarkin);

//sort
//default olarak unicode

// const fruits=["a","b","c",[1,2,3],{},["a","b"],1,3,32,23,-3,null,undefined,true];
// fruits.sort();
// console.log(fruits);

// const sortByScore = students.sort(
//   (score1, score2) => score1.score - score2.score
// );

// console.log(sortByScore);

// const sortByName = students.sort((name1, name2) => {
//   if (name1.fullName.toUpperCase() < name2.fullName.toUpperCase()) {
//     return -1;
//   } else if (name1.fullName.toUpperCase() > name2.fullName.toUpperCase()) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// console.log(sortByName);

//mini ödev

// const numbers = [3, 9, 7, 6, 8, 10, 20, 23, 89, 97];

// const filteredNumbers = numbers.filter((num) => !(num % 2));

// const reducedDoubleNumbers = filteredNumbers.reduce((acc, num) => acc + num*5, 0);

// console.log(reducedDoubleNumbers);

//deneme

const findTeacher = students.findIndex(
  (student) =>
    student.instructors.some(
      (instructor) => instructor.fullName === "Hicran Ertugral"
    )
);
console.log(findTeacher);
