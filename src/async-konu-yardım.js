//AJAX: Asynchronous JavaScript and XML
//Bu bir teknik veya yöntemdir. Asenkron veri alışverişini ifade eder.

//XHR: XMLHttpRequest
//Ajax çağrılarının temelini oluşturan bir javascript nesnesidir

//XML: Extensible Markup Language
//Veri alışverişi için kullanılır fakat ajax çağrılarında JSON sık tercih edilir. Sebebiyse veri alışverişi için daha basit ve kolay işlenebilir olmasıdır.
//JSON: JavaScript Object Notation

//HTTP: Hypertext Transfer Protocol
//Veri alışverişi için temel iletişim protokolüdür.

//API: Application Programming Interface
//RESTFUL API: Representational State Transfer

// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(() => {
//   console.log(4);
// }, 1000);
// console.log(5);
// console.log(6);

const request = new XMLHttpRequest(); //readyState: 0

request.open("GET", "https://jsonplaceholder.typicode.com/users/1"); //readyState: 1

request.addEventListener("readystatechange", () => {
  if (request.readyState === 2) {
    console.log("Headers received");
  }
}); //readyState: 2

request.send(); //readyState: 3

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4) {
    console.log("Done!");
    console.log(request);
  }
}); //readyState: 4

const jspURI = "https://jsonplaceholder.typicode.com";

// const getRequest = (endpoint, callbackFunc) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       const data = JSON.parse(request.responseText);
//       callbackFunc(null, data);
//     } else if (request.readyState === 4) {
//       callbackFunc(`Error : ${request.status}`, null);
//     }
//   });
//   request.open("GET", endpoint);
//   request.send();
// };

// console.log(1);
// console.log(2);
// getRequest(`${jspURI}/users/1`, (err, res) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.table(res);
//   }
// });
// console.log(3);
// console.log(4);

//CALLBACK HELL
// getRequest(`${jspURI}/users/1`, (err, res) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.table(res);
//     getRequest(`${jspURI}/users/2`, (err, res) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.table(res);
//         getRequest(`${jspURI}/users/3`, (err, res) => {
//           if (err) {
//             console.error(err);
//           } else {
//             console.table(res);
//             getRequest(`${jspURI}/users/4`, (err, res) => {
//               if (err) {
//                 console.error(err);
//               } else {
//                 console.table(res);
//                 getRequest(`${jspURI}/users/5`, (err, res) => {
//                   if (err) {
//                     console.error(err);
//                   } else {
//                     console.table(res);
//                     getRequest(`${jspURI}/users/6`, (err, res) => {
//                       if (err) {
//                         console.error(err);
//                       } else {
//                         console.table(res);
//                       }
//                     });
//                   }
//                 });
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });

// const getRequestWithPromise = (endpoint) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         //olumlu sonuc
//         resolve(data);
//       } else if (request.readyState === 4) {
//         //olumsuz sonuc
//         reject(`Error : ${request.status}`);
//       }
//     });

//     request.open("GET", endpoint);
//     request.send();
//   });
// };

// console.log(1);
// console.log(2);
// getRequestWithPromise(`${jspURI}/users/1`)
//   .then((response) => {
//     console.log(response);
//     //returnler önemli !!!!
//     return getRequestWithPromise(`${jspURI}/users/2`);
//   })
//   .then((response) => {
//     console.log(response);
//     //returnler önemli !!!!
//     return getRequestWithPromise(`${jspURI}/users/3`);
//   })
//   .then((response) => {
//     console.log(response);
//     //returnler önemli !!!!
//     return getRequestWithPromise(`${jspURI}/users/4`);
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => console.error(error))
//   .finally(() => console.log("All requests done!"));
// console.log(3);
// console.log(4);

// fetch(`${jspURI}/comments/1`)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

fetch(`${jspURI}/comments/2`)
  .then((response) => {
    if (response.ok && response.status === 200) {
      return response.json(); //return Promise
    } else {
      throw new Error(`Error : ${response.status}`);
    }
  })
  .then((data) => console.log(data)) //catching the previous promise
  .catch((err) => console.error(err)) //catching the error
  .finally(() => console.log("All requests are completed!")); //finally

//const newPost = {
//     postId: 2,
//     name: "Barkin",
//     email: "barkininthecage@upod.com",
//     body: "Ama hocam..."
// }

// fetch(
//     `${jspURI}/comments/`,
//     {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(newPost)
//     }
// )
// .then(response => {
//     if (response.ok && response.status === 201) {
//         return response.json();
//     }
//     else {
//         throw new Error(`An error occurred: ${response.status} - ${response.statusText}`);
//     }
// })
// .then(data => console.log(data))

//async-await
const response = fetch(`${jspURI}/comments/1`);
console.log(response); //Promise pending
