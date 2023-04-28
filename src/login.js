`use strict`;

// google login
function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      "90529198244-fbdg0tuhstssj8c69d8cflj07nef2d04.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton(document.getElementById("google-login"), {
    theme: "outline",
    size: "large",
    width: 300,
  });
  google.accounts.id.prompt();
};

// submit login form
const form = document.getElementById("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);
//   const payload = new URLSearchParams(formData);

//   fetch("http://localhost:8000/login_process", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: payload,
//   })
//     .then((res) => res.json())
//     .then((result) => {
//       if (result.message === "you are loginned") {
//         alert("You are logged in.");
//         localStorage.setItem("access-token", res.access_token);
//         // window.location = "index.html";
//       } else {
//         alert("Please check your login information.");
//       }
//     })
//     .catch((err) => console.error("error::", err));
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const payload = new URLSearchParams(formData);

  fetch("http://localhost:8000/login_process", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: payload,
  })
    //.then((res) => res.json())
    .then((result) => {
      console.log(result);
      if (result.status === 200) {
        alert("You are logged in.");
        localStorage.setItem("access-token", res.access_token);
        // window.location = "index.html";
      } else {
        alert("Please check your login information.");
      }
    })
    .catch((err) => console.error("error::", err));
});
