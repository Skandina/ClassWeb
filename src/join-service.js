`use strict`;

// GET
fetch("http://localhost:8000").then((response) => console.log(response));

// POST
fetch("http://localhost:8000", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Test",
    body: "I am testing!",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// PUT
fetch("http://localhost:8000/signup", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Test",
    body: "I am testing!",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// DELETE
fetch("http://localhost:8000/signup", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// ==>>
// async function post(host, path, body, headers = {}) {
//   const url = `https://${host}/${path}`;
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       ...headers,
//     },
//     body: JSON.stringify(body),
//   };
//   const res = await fetch(url, options);
//   const data = await res.json();
//   if (res.ok) {
//     return data;
//   } else {
//     throw Error(data);
//   }
// }

// post("localhost:8000", "signup", {
//   title: "Test",
//   body: "I am testing~",
//   userId: 1,
// })
//   .then((data) => console.log(data))
//   .then((error) => console.log(error));
