let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggingIn: true, loggedIn: true, user } : {loggingIn: false, sending: false, loading: false};

// let init = {
//     items: [],
//     rider_active: [],
//     rider_inactive: [],
//     singleRider: {},
//     my_company: {},
//     creating: false,
//     updating: false,
//     deleting: false,
// }

export function users(state = initialState, action) {
    switch (action.type) {
        
        case "LOGIN_REQUEST":console.log("got here");
            return {
                loggingIn: true,
                user: action.user
            };
        case "LOGIN_SUCCESS":
            return {
                loggedIn: true,
                loggingIn: false,
                user: action.user
            };
        case "LOGIN_FAILURE":
            return {
                loggingIn: false,
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




        case "RESET_PASSWORD_REQUEST":
            return {
                loading: true,
                user: action.user
            };
        case "RESET_PASSWORD_SUCCESS":
            return {
                loading: false,
                user: action.user
            };
        case "RESET_PASSWORD_FAILURE":
            return {
                loading: false,
            };
        



        case "CHANGE_PASSWORD_REQUEST":
            return {
                loading: true,
                user: action.user
            };
        case "CHANGE_PASSWORD_SUCCESS":
            return {
                loading: false,
                user: action.user
            };
        case "CHANGE_PASSWORD_FAILURE":
            return {
                loading: false,
            };


        case "LOGOUT":
            return {};
        default:
            return state
    }
}