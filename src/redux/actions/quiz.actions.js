import { quizService } from '../services';
// import { alertActions } from '../actions';
import { history } from '../helpers';

export const quizActions = {
    createQuizDeck,
    getPublicDeck,
    getUserDeck,
    createQuizQuestion,
    getDeckbyId
};


function createQuizDeck(dataItem) {
    return dispatch => {
        dispatch(request(dataItem));
        quizService.createQuizDeck(dataItem)
            .then(
                create_deck => {
                    dispatch(success(create_deck.data));
                    // setvisible(false);
                    // dispatch(alertActions.success("Order was created!"));
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: "CREATEDECK_REQUEST" } }
    function success(create_deck) { return { type: "CREATEDECK_SUCCESS", create_deck } }
    function failure(error) { return { type: "CREATEDECK_FAILURE", error } }
}


function getPublicDeck() {
    console.log("all deck disatch")
    return dispatch => {
        dispatch(request());
        quizService.getPublicDeck()
            .then(
                public_deck => {
                    dispatch(success(public_deck.data));
                    console.log("all deck", public_deck.data)
                    // dispatch(alertActions.success("Order was created!"));
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: "GETPUBLICDECKS_REQUEST" } }
    function success(public_deck) { return { type: "GETPUBLICDECKS_SUCCESS", public_deck } }
    function failure(error) { return { type: "GETPUBLICDECKS_FAILURE", error } }
}


function getUserDeck() {
    return dispatch => {
        dispatch(request());
        quizService.getUserDeck()
            .then(
                user_deck => {
                    dispatch(success(user_deck.data));
                    console.log("user_deck.data",user_deck.data)
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request() { return { type: "GETUSERDECKS_REQUEST" } }
    function success(user_deck) { return { type: "GETUSERDECKS_SUCCESS", user_deck } }
    function failure(error) { return { type: "GETUSERDECKS_FAILURE", error } }
}


function createQuizQuestion(dataItem,deckId) {
    return dispatch => {
        dispatch(request());
        quizService.createQuizQuestion(dataItem,deckId)
            .then(
                create_question => {
                    console.log("create_question.data",create_question)
                    dispatch(success(create_question.data));
                    console.log("create_question.data",create_question.data)
                    dispatch(quizActions.getDeckbyId(deckId));
                    // getDeckbyId(deckId);
                    // setvisible(false);
                    // dispatch(alertActions.success("Order was created!"));
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: "CREATEQUESTION_REQUEST" } }
    function success(create_question) { return { type: "CREATEQUESTION_SUCCESS", create_question } }
    function failure(error) { return { type: "CREATEQUESTION_FAILURE", error } }
}



function getDeckbyId(id) {
    console.log("was called")
    return dispatch => {
        dispatch(request());
        quizService.getDeckbyId(id)
            .then(
                single_deck => {
                    dispatch(success(single_deck.data));
                    console.log("single_deck.data",single_deck.data)
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request() { return { type: "GETDECKBYID_REQUEST" } }
    function success(single_deck) { return { type: "GETDECKBYID_SUCCESS", single_deck } }
    function failure(error) { return { type: "GETDECKBYID_FAILURE", error } }
}