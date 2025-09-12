import actionTypes from './actionTypes';

export const addUserSuccess = () => ({
    type: actionTypes.ADD_USER_SUCCESS
})

export const userSigninSuccess = (userInfo) => ({
    type: actionTypes.USER_SIGNIN_SUCCESS,
    userInfo: userInfo
})

export const userSigninFail = () => ({
    type: actionTypes.USER_LOGIN_FAIL
})

export const processSignout = () => ({
    type: actionTypes.PROCESS_SIGNOUT
})