`use strict`;

// logout
const logoutBtn = document.getElementById("logout-btn");
const logout = function () {
  fetch("http://localhost:8000/logout").then((res) => {
    if (res.ok) {
      alert("Please log in.");
      window.location = "login";
    }
  });
};
logoutBtn.addEventListener("click", logout);
