`use strict`;

const username = document.querySelector("#signup-name");
const usernameInput = username.querySelector("#signup-name input");
const email = document.querySelector("#signup-id");
const emailInput = email.querySelector("#signup-id input");
const pw = document.querySelector("#signup-pw");
const pwInput = pw.querySelector("#signup-pw input");
const rePw = document.querySelector("#confirm-pw");
const rePwInput = rePw.querySelector("#confirm-pw input");
let signUpBtn = document.querySelector(".submit input");
const form = document.getElementById("form");

// validate name
function validateName() {
  const error = document.createElement("p");
  const errorElement = username.querySelector(".error");
  const nameReg = new RegExp("[^a-zA-Z]");

  // remove error
  function removeError(child) {
    if (child.contains(errorElement)) {
      child.removeChild(errorElement);
    }
  }
  // set class error
  function setClassError() {
    error.setAttribute("class", "error");
  }

  if (usernameInput.value === "" || usernameInput.value.length === 0) {
    removeError(username);
    setClassError();
    error.innerText = "Name can't be blank.";
    username.appendChild(error);
  } else if (usernameInput.value !== "" && nameReg.test(usernameInput.value)) {
    removeError(username);
    setClassError();
    error.innerText = "Please enter your name in English.";
    username.appendChild(error);
  } else {
    removeError(username);
    return true;
  }
}

// validate e-mail
function validateEmail() {
  const error = document.createElement("p");
  const errorElement = email.querySelector(".error");
  const emailReg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  // remove error
  function removeError(child) {
    if (child.contains(errorElement)) {
      child.removeChild(errorElement);
    }
  }
  // set class error
  function setClassError() {
    error.setAttribute("class", "error");
  }

  if (emailInput.value === "" || emailInput.value.length === 0) {
    removeError(email);
    setClassError();
    error.innerText = "E-mail can't be blank.";
    email.appendChild(error);
  } else if (emailInput.value !== "" && !emailReg.test(emailInput.value)) {
    removeError(email);
    setClassError();
    error.innerText = "Please enter your email correctly.";
    email.appendChild(error);
  } else {
    removeError(email);
    return true;
  }
}

// validate password
function validatePassword() {
  const error = document.createElement("p");
  const errorElement = pw.querySelector(".error");
  const pwReg = new RegExp("^(?=.*[0-9])(?=.*[a-zA-z]).{8,15}$");

  // remove error
  function removeError(child) {
    if (child.contains(errorElement)) {
      child.removeChild(errorElement);
    }
  }
  // set class error
  function setClassError() {
    error.setAttribute("class", "error");
  }

  if (pwInput.value === "" || pwInput.value.length === 0) {
    removeError(pw);
    setClassError();
    error.innerText = "Password can't be blank.";
    pw.appendChild(error);
  } else if (pwInput.value !== "" && !pwReg.test(pwInput.value)) {
    removeError(pw);
    setClassError();
    error.innerText =
      "Please enter the password in 8-15 digits in English and combination of numbers.";
    pw.appendChild(error);
  } else {
    removeError(pw);
    return true;
  }
}

function confirmPassword() {
  const error = document.createElement("p");
  const errorElement = rePw.querySelector(".error");

  // remove error
  function removeError(child) {
    if (child.contains(errorElement)) {
      child.removeChild(errorElement);
    }
  }
  // set class error
  function setClassError() {
    error.setAttribute("class", "error");
  }

  if (pwInput.value !== rePwInput.value) {
    removeError(rePw);
    setClassError();
    error.innerText = "Password don't match.";
    rePw.appendChild(error);
  } else {
    removeError(rePw);
    return true;
  }
}

function activeSignupBtn() {
  if (
    validateName() === true &&
    validateEmail() === true &&
    validatePassword() === true &&
    confirmPassword() === true
  ) {
    signUpBtn.disabled = false;
  } else {
    signUpBtn.disabled = true;
  }
}

// submit signup form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const payload = new URLSearchParams(formData);

  fetch("http://13.49.31.59:8000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: payload,
  })
    .then((res) => {
      if (res.ok) {
        res.json();
        alert("Sign up succeeded.");
        window.location = "login.html";
      } else {
        alert("Sign up failed.");
        throw new Error("Invalid credentials");
      }
    })
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error);
    });
});
