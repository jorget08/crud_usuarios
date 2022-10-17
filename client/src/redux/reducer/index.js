import {GET_ALL_USERS, GET_USER_DETAIL, CREATE_USER, SEARCH_USER, UPDATE_USER,DELETE_USER} from '../actions/index'

const initialState = {
    users: [],
    userDetail: {}
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        
        case GET_USER_DETAIL:
            return {
                ...state,
                userDetail: action.payload
            }

        case CREATE_USER:
            return {
                ...state
            }

        case UPDATE_USER:
            return {
                ...state
            }

        case SEARCH_USER:
            return {
                ...state,
                users: action.payload
            }

        case DELETE_USER:
            let userss = state.users.filter(e => e.id !== action.payload)
            return {
                ...state,
                users: userss
            }

        default:
            return state
    }
}

export default rootReducer;