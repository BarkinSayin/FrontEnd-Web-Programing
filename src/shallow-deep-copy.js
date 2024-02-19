// const table1 = [1, 2, 3];
// const table2 = [4, 5, 6];

// const mergedTable = [...table1, ...table2];
// console.log(mergedTable);

// const persons=["Barkın","Ali","Mert","Ege"];
// const newPersons=persons;
// const newNewPersons=newPersons;

// newPersons.pop();
// newPersons[1]="Berkay";

// console.log(persons);
// console.log(newPersons);
// console.log(newNewPersons);

// const newPersons=[...persons]

// persons.pop();
// persons[0]="mahmut"
// console.log(newPersons);
// console.log(persons);

// const person={
//     name:"Barkın",
//     lastName:"Sayın",
//     age:24,
//     courses:["JavaScript","react","node.js"]
// }

// const newPerson=person;
// const newPerson2={...person};
// console.log(newPerson2);
// const newPerson1=JSON.parse(JSON.stringify(person));

// newPerson.courses.pop();
// person.phone="01240290570923";

// console.log(person);
// console.log(newPerson);
// console.log(newPerson1);

const students=["barkın","ege",["mert","ceren"],"ali"];

const newStudents = [...students];
const newStudents1=JSON.parse(JSON.stringify(students));

students[2][0]="berkay";
students[0]="hakan"

console.log(newStudents);
console.log(newStudents1);