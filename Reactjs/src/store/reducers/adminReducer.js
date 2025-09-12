import actionTypes from '../actions/actionTypes';

const initialState = {
    isSignedIn: false,
    adminInfo: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADMIN_SIGNIN_SUCCESS:
            return {
                ...state,
                isSignedIn: true,
                adminInfo: action.adminInfo
            }
        case actionTypes.ADMIN_SIGNIN_FAIL:
            return {
                ...state,
                isSignedIn: false,
                adminInfo: null
            }
        case actionTypes.PROCESS_SIGNOUT:
            return {
                ...state,
                isSignedIn: false,
                adminInfo: null
            }
        default:
            return state;
    }
}

export default appReducer;