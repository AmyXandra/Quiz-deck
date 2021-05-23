import { userService } from '../services';
// import { alertActions } from '../actions';
import { history } from '../helpers';

export const userActions = {
    login,
    logout,
    register,
};

function login(dataItem) {
    return dispatch => {
        console.log("got here")
        dispatch(request({ dataItem }));

        userService.login(dataItem)
            .then(
                user => { 
                    dispatch(success(user));
                    // dispatch(alertActions.success(user.message));
                    history('/my-quizes');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user) { return { type: "LOGIN_REQUEST", user } }
    function success(user) { return { type: "LOGIN_SUCCESS", user } }
    function failure(error) { return { type: "LOGIN_FAILURE", error } }
}

function logout() {
    userService.logout();
    return { type: "LOGOUT" };
}

function register(data) {
    return dispatch => {
        dispatch(request(data));

        userService.registerCompany(data)
            .then(
                user => { 
                    dispatch(success());
                    history('/login');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user) { return { type: "REGISTER_REQUEST", user } }
    function success(user) { return { type: "REGISTER_SUCCESS", user } }
    function failure(error) { return { type: "REGISTER_FAILURE", error } }
}