let router = require("express").Router();

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/board", (req, res) => {
  res.render("board");
});

module.exports = router;
