let initialState = {
    public_decks: [],
    user_decks: [],
    new_deck: {},
    creating: false,
    loading: false,
    single_deck: {}
}

export function quiz(state = initialState, action) {
    switch (action.type) {

        case "GETPUBLICDECKS_REQUEST":
            return {
                ...state,
                loading: true
            };
        case "GETPUBLICDECKS_SUCCESS":
            return {
                ...state,
                loading: false,
                public_decks: action.public_deck
            };

        case "GETPUBLICDECKS_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.error
            };
        

        case "GETUSERDECKS_REQUEST":
            return {
                ...state,
                loading: true
            };
        case "GETUSERDECKS_SUCCESS":
            return {
                ...state,
                loading: false,
                user_decks: action.user_deck
            };

        case "GETUSERDECKS_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.error
            };

        
        case "CREATEDECK_REQUEST":
            return {
                ...state,
                creating: true
            };

        case "CREATEDECK_SUCCESS":
        console.log("action.create_deck",action.create_deck)
            return {
                ...state,
                creating: false,
                new_deck: action.create_deck
            };

        case "CREATEDECK_FAILURE":
            return {
                ...state,
                error: action.error,
                creating: false
            };



        case "CREATEQUESTION_REQUEST":
            return {
                ...state,
                creating: true
            };

        case "CREATEQUESTION_SUCCESS":
            return {
                ...state,
                creating: false,
            };

        case "CREATEQUESTION_FAILURE":
            return {
                ...state,
                error: action.error,
                creating: false
            };
        


        case "GETDECKBYID_REQUEST":
            return {
                ...state,
                loading: true
            };
        case "GETDECKBYID_SUCCESS":
            return {
                ...state,
                loading: false,
                single_deck: action.single_deck
            };

        case "GETDECKBYID_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.error
            };

        


        case "LOGOUT":
            return {};
        default:
            return state
    }
}