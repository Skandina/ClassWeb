const CLIENT_ID = "b73984f636b383385467d26d47dbfe3d";
const REDIRECT_URI = "http://localhost:8000/oauth/callback/kakao",

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

