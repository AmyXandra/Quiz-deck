// import config from 'config';
import { authHeader, history } from '../helpers';
import base_url from './base_url';

export const userService = {
    login,
    logout,
    // register,
};

function login(dataItem) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( dataItem )
    };
    return fetch(`${base_url}login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('accessToken', JSON.stringify(user.data.token));
            return user;
        });
}



function logout(callBack=()=>{}) {
    // remove user from local storage to log user out
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };

    fetch(`${base_url}api/auth/logout`, requestOptions)
    .then(response => response.json())
    .then(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');
        history("/auth/login")
        callBack();
        // return user;
    });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (response.status === 204) { 
            return response.data = {data:{ data:[]}};
        }
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}