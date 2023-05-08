`use strict`;

let email = "";
let username = "";

// // logout
// function deleteToken() {
//   fetch("http://localhost:8000/logout");
//   // if (res.ok) {
//   //   alert("Please log in.");
//   //   window.location = "login";
//   // }
// }

const getUserInfo = async function () {
  const res = await fetch("http://localhost:8000/member");
  // console.log("userinfo res", res);
};

const getAuth = async function (accessToken) {
  const res = await fetch("http://localhost:8000/auth/token", {
    method: "GET",
    headers: { Authorization: accessToken },
  });

  if (res.ok) {
    getUserInfo();
    alert("You are logged in.");
    window.location = "index";
  }
};

// google login
function handleCredentialResponse(response) {
  const responsePayload = parseJwt(response.credential);
  console.log("ID: " + responsePayload.sub);
  console.log("Full Name: " + responsePayload.name);
  console.log("Given Name: " + responsePayload.given_name);
  console.log("Family Name: " + responsePayload.family_name);
  console.log("Image URL: " + responsePayload.picture);
  console.log("Email: " + responsePayload.email);
  email = responsePayload.email;
  username = responsePayload.name;

  fetch("http://localhost:8000/glogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      username: username,
    }),
  })
    .then((res) => {
      res.json();
    })
    .then((result) => {
      if (result.code === 200) {
        // 토큰 검증
        getAuth(result.accessToken);
      }
    })
    .catch((err) => console.error("error::", err));
}
function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const payload = new URLSearchParams(formData);
  console.log(payload);
  fetch("http://localhost:8000/login_process", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: payload,
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      if (result.code === 200) {
        // 토큰 검증
        getAuth(result.accessToken);
      } else {
        alert("Please check your login information.");
      }
    })
    .catch((err) => console.error("error::", err));
});
