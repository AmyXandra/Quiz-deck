export function authHeader() {
    // return authorization header with jwt token
    let token = localStorage.getItem('accessToken');
    return { 'Authorization':`Bearer ${token ? token : ''}`}
}