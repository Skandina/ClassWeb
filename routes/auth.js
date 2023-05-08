"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.auth = void 0;
const jwt = require("jsonwebtoken");
const config = require("../config.js");
const auth = function auth(req, res, next) {
  // 인증 완료
  try {
    // 요청 헤더에 저장된 토큰
    req.decoded = jwt.verify(
      req.headers.authorization,
      config.ACCESS_TOKEN_KEY
    );
    //res.locals.loggedIn = Boolean(true);
    return next();
  } catch (error) {
    //res.locals.loggedIn = Boolean(false);
    // 인증 실패
    // 유효시간 초과된 경우
    if (error.name === "TokenExpiredError") {
      return res.status(419).json({
        code: 419,
        message: "토큰이 만료되었습니다.",
      });
    }
    // 토큰의 비밀키가 일치하지 않는 경우
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        code: 401,
        message: "유효하지 않은 토큰입니다.",
      });
    }
  }
};
exports.auth = auth;
