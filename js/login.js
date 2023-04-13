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
