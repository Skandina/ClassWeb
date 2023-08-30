const isKorean = navigator.language === "ko-KR";
const cookies = (document.cookie || "").split("; ");
const lang = cookies
  .filter((cookie) => cookie.includes("lang"))
  .map((cookie) => cookie.split("=")[1]);
const getHref = function (h) {
  fetch(`http://13.49.31.59:8000/${h}`).then((res) => {
    if (res.ok) {
      console.log("getHref ok");
    }
  });
};

// 웹 브라우저 언어가 한국어면 select에 한국어 선택, 아닐 경우 영어 선택
if ((isKorean && lang == null) || lang == "ko") {
  getHref("ko");
  document.getElementById("koBtn").setAttribute("selected", true);
} else if ((!isKorean && lang != null) || lang == "en") {
  getHref("en");
  document.getElementById("enBtn").setAttribute("selected", true);
}
function changeLanguage(v) {
  location.href = v;
  //document.getElementById(`${v}Btn`).setAttribute("selected", true);
}
