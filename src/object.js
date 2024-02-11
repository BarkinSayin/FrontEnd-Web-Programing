const character = {
  firstName: "Retro",
  class: "Paladin",
  level: 70,
  subClasses: [
    { subClassName: "Holy", weapon: "mace", offHand: "Shield" },
    { subClassName: "Protection", weapon: "mace", offHand: "Shield" },
    { subClassName: "Retribution", weapon: "Two-hand" },
  ],
  inGameAdress: {
    server: "europe",
    realm: { mainRealm: "TwistingNether", lastRealm: "SilverMoon" },
  },
};

const person = {
  firstName: "Barkın",
  lastName: "Sayın",
  age: 24,
  favoriteMovies: [
    {
      movieName: "Prens",
      languages: {
        mainLanguage: "Turkish",
        subLanguage1: "English",
        subLanguage2: "German",
      },
    },
    {
      movieName: "İnception",
      languages: {
        mainLanguage: "English",
        subLanguage1: "Turkish",
        subLanguage2: "German",
      },
    },
    {
      movieName: "Reacher",
      languages: {
        mainLanguage: "English",
        subLanguage1: "Turkish",
        subLanguage2: "German",
      },
    },
  ],
  contact: {
    phone: "530-416-81-68",
    adress: {
      city: "İstanbul",
      side: "Anadolu",
      district: "Bostancı",
    },
    eMail: "barkinsayin@hotmail.com",
  },
};

const lesson = {
  lessonName: "Frontend Web Geliştirme",
  courses: ["HTML", "Css", "JavaScript", "React", "Node.js"],
  studentNumber: 9,
  students: [
    {
      fullName: "Barkın Sayın",
      age: 24,
      eMail: "barkinsayin@hotmail.com",
    },
    {
      fullName: "Ali Rıza Taşkıran",
      age: 27,
      eMail: "alirızataskıran@hotmail.com",
    },
    {
      fullName: "Berkay Turna",
      age: 41,
      eMail: "berkayturna@hotmail.com",
    },
    {
      fullName: "Çağatay çevik",
      age: 32,
      eMail: "cagataycvk@hotmail.com",
    },
    {
      fullName: "Cenk Kaynak",
      age: 34,
      eMail: "cenkkynk@hotmail.com",
    },
    {
      fullName: "Ceren Dinçer",
      age: 31,
      eMail: "cerendnçer@outlook.com",
    },
    {
      fullName: "Onur Ege",
      age: 22,
      eMail: "onurege@hotmail.com",
    },
    {
      fullName: "Hakan Berke Temur",
      age: 22,
      eMail: "hakantemur@hotmail.com",
    },
    {
      fullName: "Mert Kırant",
      age: 24,
      eMail: "mertkırant@hotmail.com",
    },
  ],
  instructors: {
    mainInstructor: "Orkun Durmaz",
    subInstructors: [
      { oldSubInstructor: "Buse Uğraş" },
      {
        currentSubInstructor: "Hicran Ertugral",
      },
      {
        currentSubInstructor: "Önder Tarım",
      },
    ],
  },
};

//Read with Bracket Notation
console.log(character["subClasses"][1]["subClassName"]);
console.log(person["favoriteMovies"][2]["languages"]["mainLanguage"]);
console.log(lesson["instructors"]["subInstructors"][0]["oldSubInstructor"]);

//Read with Dot Notation
console.log(character.subClasses[1].subClassName);
console.log(person.favoriteMovies[2].languages.mainLanguage);
console.log(lesson.instructors.subInstructors[0].oldSubInstructor);

//Creat with Bracket Notation
character["isDeleted"] = true;
person["sign"] = "Crab";
lesson["lessonProcess"] = "Online";

//Creat with Dot Notation
character.isRaider = false;
person.contact.neighbourhood = "Altıntepe";
lesson.isActive = true;

//Update with Bracket Notation
character["level"] = 80;
person["age"] = 25;
lesson["isActive"] = false;

//Update with Dot Notation
character.isRaider = true;
person.favoriteMovies[2].movieName = "Onepiece";
lesson.instructors[0] = "Mahmut Tuncer";

//Delete with Bracket Notation
delete character["level"];
delete person["age"];
delete lesson["students"];

//Delete with Dot Notation
delete character.isRaider;
delete person.contact.eMail;
delete lesson.isActive;

console.log(character);
console.log(person);
console.log(lesson);



console.log(character.hasOwnProperty("level"));

console.log(Object.entries(character));
console.log(Object.entries(person));
console.log(Object.keys(character));
console.log(Object.keys(lesson));
console.log(Object.values(character));
console.log(Object.values(person));

for (const key in person) {
  console.log(key);
  console.log(person[key]);
}
