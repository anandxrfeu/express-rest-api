import { expressjwt as jwt} from "express-jwt";


function extractTokenFromHeaders(req, res) {
  if (!req.headers.authorization) {
    throw new Error("Missing Authorization Header.");
  }
  return req.headers.authorization.split(" ")[1];
}

export default jwt({
  secret: process.env.JWT_SECRET,
  userProperty: "user",
  getToken: extractTokenFromHeaders,
  algorithms: ["HS256"],
});