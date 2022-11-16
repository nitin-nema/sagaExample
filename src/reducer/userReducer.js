import * as type from "../action/actionConstant";

const initalState = {
    users: [],
    loading: false,
    error:null
}

function userReducer(state = initalState, action) {
    switch (action.type) {
        
        case type.GET_USER_REQUESTED:
            return {
                ...state,
                loading:true
            }
        case type.GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.users
            }
        case type.GET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        
        default:
        return state;
    }
}