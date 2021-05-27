import axios from 'axios'
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggingIn: true, loggedIn: true, user } : {loggingIn: false, sending: false, loading: false, registering: false};


const saveToHeader = (token) =>{
    console.log('got here')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}


export function users(state = initialState, action) {
    switch (action.type) {
        
        case "LOGIN_REQUEST":console.log("got here");
            return {
                loggingIn: true,
                user: action.user
            };
        case "LOGIN_SUCCESS":
            saveToHeader(action.user.token)
            return {
                loggedIn: true,
                loggingIn: false,
                user: action.user
            };
        case "LOGIN_FAILURE":
            return {
                loggingIn: false,
            };

        

        case "REGISTER_REQUEST":
            return {
                ...state, 
                registering: true
             };
        case "REGISTER_SUCCESS":
            return {
                ...state,
                registering: false
            };
        case "REGISTER_FAILURE":
            return {
                ...state,
                registering: false
            };
        


        case "PASSWORD_CODE_REQUEST":
            return {
                sending: true,
                user: action.user
            };
        case "PASSWORD_CODE_SUCCESS":
            return {
                sending: false,
                user: action.user
            };
        case "PASSWORD_CODE_FAILURE":
            return {
                sending: false,
            };




        case "LOGOUT":
            return {};
        default:
            return state
    }
}


