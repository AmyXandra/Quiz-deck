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

function register(dataItem) {
    return dispatch => {
        dispatch(request(dataItem));

        userService.register(dataItem)
            .then(
                user_reg => { 
                    dispatch(success());
                    history('/login');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user_reg) { return { type: "REGISTER_REQUEST", user_reg } }
    function success(user_reg) { return { type: "REGISTER_SUCCESS", user_reg } }
    function failure(error) { return { type: "REGISTER_FAILURE", error } }
}