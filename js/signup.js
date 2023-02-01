const username = document.querySelector("#signup-name");
const emailInput = document.querySelector("#signup-id input");
const pwInput = document.querySelector("#signup-pw input");
const rePwInput = document.querySelector("#confirm-pw input");
const signUpBtn = document.querySelector(".submit input");

console.log(username);
function handleSubmit() {
  const p = document.createElement("p");
  if (username.input == null) {
    p.innerText = "Name can't be blank.";
  }
  username.appendChild(p);
}

signUpBtn.addEventListener("click", handleSubmit);
