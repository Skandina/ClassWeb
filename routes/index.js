let router = require("express").Router();

router.get("/login", (req, res) => {
  const cookies = (req.headers.cookie || "").split("; ");
  const userId = cookies
    .filter((cookie) => cookie.includes("userId"))
    .map((cookie) => cookie.split("=")[1]);
  if (userId.length !== 0) {
    res.render("login", { userId: decodeURIComponent(userId) });
  } else {
    res.render("login", { userId: false });
  }
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/board", (req, res) => {
  res.render("board");
});

router.get("/post", (req, res) => {
  res.render("post");
});

module.exports = router;
