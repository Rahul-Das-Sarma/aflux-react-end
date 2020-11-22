import * as actionTypes from '../Types/types';


export const UserSignupReducer = (state = {}, action) => {
    switch(action.type){
        case actionTypes.USER_SIGNUP_REQUEST:
            return { loading: true }
        
        case actionTypes.USER_SIGNUP_SUCCESS:
            return {loading: false, userInfo: action.payload }
        
        case actionTypes.USER_SIGNUP_FAIL:

         return {loading: false, error: action.payload}
        
        default:
            return state
    }
}

export const UserSigninReducer = (state = {userInfo:{}, token: null}, action) => {
    console.log(action.payload);
switch(action.type){
    case actionTypes.USER_SIGNIN_REQUEST: 
    return {...state, loading: true}

    case actionTypes.USER_SIGNIN_SUCCESS: 
    console.log(action.payload);
    return {...state, loading: false, userInfo: action.payload, token: action.payload}

    case actionTypes.USER_SIGNIN_FAIL:
    return {...state,loading: false, error: action.payload}

    case actionTypes.USER_SIGNOUT:
        return {token: null};

    default:
        return state
}
}

// export const UserSigninDetailsReducer = (state = {} , action) => {

// }