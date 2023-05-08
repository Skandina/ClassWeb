`use strict`;
// 수정중
// logout
// function deleteToken() {
//   fetch("http://localhost:8000/logout");
//   // if (res.ok) {
//   //   alert("Please log in.");
//   //   window.location = "login";
//   // }
// }
async function logout() {
  try {
    const res = await fetch("http://localhost:8000/logout");
    // console.log("userinfo res", res);
  } catch (error) {
    console.log(error);
  }
}
