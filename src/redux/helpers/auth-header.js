export function authHeader() {
    // return authorization header with jwt token
    let token = JSON.parse(localStorage.getItem('accessToken'));
    // console.log("token", token);
    // return { 'Authorization':`${token ? token : ''}`}
    return { 'Authorization':`Bearer ${token ? token : ''}`}
}