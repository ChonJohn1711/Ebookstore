import actionTypes from '../actions/actionTypes';

const initialState = {
    isSignedIn: false,
    userInfo: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_SIGNIN_SUCCESS:
            return {
                ...state,
                isSignedIn: true,
                userInfo: action.userInfo
            }
        case actionTypes.USER_SIGNIN_FAIL:
            return {
                ...state,
                isSignedIn: false,
                userInfo: null
            }
        case actionTypes.PROCESS_SIGNOUT:
            return {
                ...state,
                isSignedIn: false,
                userInfo: null
            }
        default:
            return state;
    }
}

export default appReducer;