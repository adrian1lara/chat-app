import { jwtDecode } from "jwt-decode";

export default function tokenValid(token) {
    const decode = jwtDecode(token)
    const now = Date.now() / 1000;
    const expiry = decode.iat + decode.exp
    return now < expiry 
}