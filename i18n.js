const i18n = require("i18n");
const LanguageDetector = require("i18next-browser-languagedetector");

i18n.configure({
  locales: ["ko", "en"],
  directory: __dirname + "/locales",
  defaultLocale: "ko",
  fallbacks: "en",
  cookie: "lang",
});

module.exports = (req, res, next) => {
  i18n.init(req, res);
  res.locals.__ = res.__;

  return next();
};
