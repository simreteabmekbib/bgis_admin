import { AuthActionTypes } from './auth.types';

export const userExistsStart = (username) => ({
    type: AuthActionTypes.USER_CHECK_EXISTS_START,
    payload: username
});

export const setAuthError = (error) => ({
    type: AuthActionTypes.SET_AUTH_ERROR,
    payload: error
});

export const setUserPhone = (username) => ({
    type: AuthActionTypes.SET_USER_NAME,
    payload: username
});

export const setUserID = (userId) => ({
    type: AuthActionTypes.SET_USER_ID,
    payload: userId
});

export const userExistsSuccess = (existResponse) => ({
    type: AuthActionTypes.USER_CHECK_EXISTS_SUCCESS,
    payload: existResponse
});

export const userExistsFail = (error) => ({
    type: AuthActionTypes.USER_CHECK_EXISTS_FAIL,
    payload: error
});

export const userActivationSubmitStart = (userCode) => ({
    type: AuthActionTypes.USER_ACTIVATION_SUBMIT_START,
    payload: userCode
});

export const userActivationSubmitSuccess = () => ({
    type: AuthActionTypes.USER_ACTIVATION_SUBMIT_SUCCESS,
});

export const userActivationSubmitFail = (error) => ({
    type: AuthActionTypes.USER_ACTIVATION_SUBMIT_FAIL,
    payload: error
});


export const userPasswordCreateStart = (userPassword) => ({
    type: AuthActionTypes.USER_CREATE_PASSWORD_START,
    payload: userPassword
});

export const userPasswordCreateSuccess = () => ({
    type: AuthActionTypes.USER_CREATE_PASSWORD_SUCCESS,
});

export const userPasswordCreateFail = (error) => ({
    type: AuthActionTypes.USER_CREATE_PASSWORD_FAIL,
    payload: error
});

export const userLoginStart = (loginModel) => ({
    type: AuthActionTypes.USER_LOGIN_START,
    payload: loginModel
});

export const userRegistrationStart = (registraionModel) => ({
    type: AuthActionTypes.USER_REGISTRATION_START,
    payload: registraionModel
});

export const userRegistrationSuccess = (userId) => ({
    type: AuthActionTypes.USER_REGISTRATION_SUCCESS,
    payload: userId
});

export const userRegistrationFailure = (error) => ({
    type: AuthActionTypes.USER_REGISTRATION_FAILURE,
    payload: error
});

export const userBasicInformationStart = (basicInformationModel) => ({
    type: AuthActionTypes.USER_BASIC_INFORMATION_START,
    payload: basicInformationModel
});

export const userBasicInformationSuccess = (branchName, dateOfBirth, gender, nationality, expectedGradeLevel) => ({
    type: AuthActionTypes.USER_BASIC_INFORMATION_SUCCESS,
    payload: branchName, dateOfBirth, gender, nationality, expectedGradeLevel
});

export const userBasicInformationFailure = (error) => ({
    type: AuthActionTypes.USER_BASIC_INFORMATION_FAILURE,
    payload: error
});

export const userContactAddressStart = (contactAddressModel) => ({
    type: AuthActionTypes.USER_CONTACT_ADDRESS_START,
    payload: contactAddressModel
});

export const userContactAddressSuccess = (phoneNumber, alternatePhoneNumber,  subCity, woreda, houseNumber) => ({
    type: AuthActionTypes.USER_CONTACT_ADDRESS_SUCCESS,
    payload: phoneNumber, alternatePhoneNumber, subCity, woreda, houseNumber
});

export const userContactAddressFailure = (error) => ({
    type: AuthActionTypes.USER_CONTACT_ADDRESS_FAILURE,
    payload: error
});

export const setUserRoles = (tokenResponse) => ({
    type: AuthActionTypes.SET_USER_ROLES,
    payload: tokenResponse
});

export const userLoginSuccess = (tokenResponse) => ({
    type: AuthActionTypes.USER_LOGIN_SUCCESS,
    payload: tokenResponse
});

export const userLoginFailure = (error) => ({
    type: AuthActionTypes.USER_LOGIN_FAILURE,
    payload: error
});

export const userLogout = () => ({
    type: AuthActionTypes.USER_LOGOUT
})

export const refreshTokenStart = (refreshToken) => ({
    type: AuthActionTypes.REFRESH_ACCESS_TOKEN_START,
    payload: refreshToken
})

export const refreshTokenSuccess = (tokenResponse) => ({
    type: AuthActionTypes.REFRESH_ACCESS_TOKEN_SUCCESS,
    payload: tokenResponse
})

export const refreshTokenFail = (error) => ({
    type: AuthActionTypes.REFRESH_ACCESS_TOKEN_FAIL,
    payload: error
})

