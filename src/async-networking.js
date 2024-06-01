//async example
// console.log(1);
// console.log(2);
// setTimeout(() => console.log(3), 1000);
// console.log(4);
// console.log(5);

//XHR
// const request = new XMLHttpRequest(); //readyState: 0

// request.addEventListener("readystatechange", () => {
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.responseText);
//   } else if (request.readyState === 4) {
//     console.warn(
//       `An error occurred: ${request.status} - ${request.statusText}`
//     );
//   }
// });

// request.open("GET", "https://jsonplaceholder.typicode.com/todos/1"); //readyState: 1
// request.send(); //readyState: 2

const jspURI = "https://jsonplaceholder.typicode.com";

const getRequest = async (endpoint, callbackFn) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callbackFn(null, data);
    } else if (request.readyState === 4) {
      callbackFn(
        `An error occurred: ${request.status} - ${request.statusText}`,
        null
      );
    }
  });
  request.open("GET", endpoint);
  request.send();
};

// Kullanıcılar sırayla işlenecek
const processNextUser = async (users) => {
  for (const user of users) {
    const userEndpoint = `${jspURI}/users/${user.id}`;
    await getRequest(userEndpoint, (error, userData) => {
      if (error) {
        console.error(error);
      } else {
        console.table(userData);
      }
    });
  }
};

const getUsers = async () => {
  const usersEndpoint = `${jspURI}/users`;
  getRequest(usersEndpoint, (err, users) => {
    if (err) {
      console.error(err);
      return;
    }

    processNextUser(users);
  });
};

getUsers();

// // Kullanıcılar sırayla işlenecek
// const processNextUser = (index,users) => {
//   if (index >= users.length) {
//     // Tüm kullanıcılar işlendikten sonra işlemi bitir
//     return;
//   }
//   const user = users[index];
//   console.log(`Fetching data for user: ${user.name}`);
//   const userEndpoint = `${jspURI}/users/${user.id}`;
//   getRequest(userEndpoint, (error, userData) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.table(userData);
//     }
//     // Bir sonraki kullanıcıyı işle
//     processNextUser(index + 1,users);
//   });
// };

// const getUsers = () => {
//   const usersEndpoint = `${jspURI}/users`;
//   getRequest(usersEndpoint, (err, users) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     // İlk kullanıcı işleme başla
//     processNextUser(0,users);
//   });
// };

// getRequest(`${jspURI}/users/4`, (err, res) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.table(res);
//   }
// });

// Callback Hell
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
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });

// const getRequestWithPromise = (endpoint) => {
//   return new Promise((result, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         result(data);
//       } else if (request.readyState === 4) {
//         reject(`An error occurred: ${request.status} - ${request.statusText}`);
//       }
//     });
//     request.open("GET", endpoint);
//     request.send();
//   });
// };

// getRequestWithPromise(`${jspURI}/users/1`)
//   .then((data) => {
//     console.table(data);
//     return getRequestWithPromise(`${jspURI}/users/2`);
//   })
//   .then((data) => {
//     console.table(data);
//     return getRequestWithPromise(`${jspURI}/users/3`);
//   })
//   .then((data) => {
//     console.table(data);
//     return getRequestWithPromise(`${jspURI}/users/4`);
//   })
//   .then((data) => console.table(data))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("All request is done"));

// //Fetch GET
// fetch(`${jspURI}/todos/1`)
//   .then((response) => {
//     if (response.ok && response.status === 200) {
//       return response.json();
//     }
//   })
//   .then((response) => console.log(response));

// //Fetch POST
// const data = {
//   userId: 2,
//   title: "Mert kod çalış!",
//   completed: false,
// };
// fetch(`${jspURI}/todos`, {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => {
//     if (response.ok && response.status === 201) {
//       return response.json();
//     }
//   })
//   .then((response) => console.log(response));

// //Fetch PUT
// fetch(`${jspURI}/todos/1`, {
//   method: "PUT",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => {
//     if (response.ok && response.status === 200) {
//       return response.json();
//     }
//   })
//   .then((response) => console.log(response));

// //Fetch DELETE
// fetch(`${jspURI}/todos/4`, {
//   method: "DELETE",
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
