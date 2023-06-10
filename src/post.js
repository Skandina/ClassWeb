`use strict`;

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const imgName = document.getElementById("img_name");
  const imgNameValue = (imgName.value || "").split("\\")[2];
  formData.append("img_name", imgNameValue);
  const payload = new URLSearchParams(formData);

  fetch("http://13.49.31.59:8000/text", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: payload,
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.code === 200) {
        alert(result.message);
        window.location = "board";
      }
    })
    .catch((err) => console.error("error::", err));
});
