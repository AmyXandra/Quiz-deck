// import config from 'config';
import { authHeader, history } from '../helpers';
import base_url from './base_url';

export const quizService = {
    createQuizDeck,
    getPublicDeck,
    getUserDeck,
    createQuizQuestion,
    getDeckbyId,
};


function createQuizDeck(dataItem) {
    console.log("all deck service")
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(dataItem, {"public": true})
    };

    return fetch(`${base_url}deck/create`, requestOptions).then(handleResponse);
}



function getPublicDeck() {
    console.log("all deck service")
    const requestOptions = {
        method: 'GET',
        headers: authHeader,
    };

    return fetch(`${base_url}deck/public`, requestOptions).then(handleResponse)
    
}


function getUserDeck() {
    console.log("user deck service", authHeader)
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };
    return fetch(`${base_url}deck/user`, requestOptions).then(handleResponse)
    
}


function createQuizQuestion(dataItem,deckId) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(dataItem)
    };

    return fetch(`${base_url}question/create/${deckId}`, requestOptions).then(handleResponse);
}


function getDeckbyId(id) {
    console.log("user deck service", id)
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };
    return fetch(`${base_url}deck/${id}`, requestOptions).then(handleResponse)
    
}



function logout(callBack=()=>{}) {
    // remove user from local storage to log user out
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };

    fetch(`${base_url}logout`, requestOptions)
    .then(response => response.json())
    .then(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');
        history("/login")
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
                // logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log("data", data)
        return data;
    });
}