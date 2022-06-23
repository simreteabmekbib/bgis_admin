import { all, put, call, takeLatest } from 'redux-saga/effects'

import axios from 'axios';
import qs, { stringify } from 'querystring';

import { AuthActionTypes } from './auth.types';
import { ApiURL } from '../../utils/url.global';
import Auth from '../../utils/authService';

import {
    userExistsSuccess,
    userExistsFail,
    userActivationSubmitSuccess,
    userActivationSubmitFail,
    userPasswordCreateSuccess,
    userPasswordCreateFail,
    userLoginSuccess,
    userLoginFailure,
    refreshTokenSuccess,
    refreshTokenFail,
    userRegistrationSuccess,
    userRegistrationFailure,
    setUserRoles,
    setUserID
} from './auth.actions';
import Router from 'next/router';

function* checkUserExistsAsync({ payload }) {
    try {
        const fullUrl = `${ApiURL.USER_CHECK_EXISTS}/${payload}`
        const response = yield axios.get(fullUrl);

        yield put(userExistsSuccess(response.data));
    } catch (error) {
        yield put(userExistsFail(error));
    }
}

function* onCheckUserExists() {
    yield takeLatest(AuthActionTypes.USER_CHECK_EXISTS_START, checkUserExistsAsync);
}

function* checkUserActivationSubmitAsync({ payload }) {
    try {
        const fullUrl = ApiURL.USER_WEB_ACTIVATION_SUBMIT;
        const response = yield axios.post(fullUrl, payload);

        yield put(userActivationSubmitSuccess(response.data));
    } catch (error) {
        yield put(userActivationSubmitFail(error));
    }
}

function* onUserActivationSubmit() {
    yield takeLatest(AuthActionTypes.USER_ACTIVATION_SUBMIT_START, checkUserActivationSubmitAsync);
}


function* checkUserCreatePasswordAsync({ payload }) {
    try {
        const response = yield axios.post(ApiURL.USER_WEB_CREATE_PASSWORD, payload);
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        const requestBody = {
            username: payload.username,
            password: payload.password,
            grant_type: 'password',
            client_id: 'webclient',
            scope: 'webapi offline_access',
            client_secret: 'web'
        };
        const loginResponse = yield axios.post(ApiURL.USER_LOGIN, qs.stringify(requestBody), config);

        const data = {
            refreshToken: loginResponse.data.refreshToken,
            accessToken: loginResponse.data.accessToken,
        };
        // Auth.rememberMe(data.accessToken, data.refreshToken);
        localStorage.setItem("userRoles", loginResponse.data.roles)
        localStorage.setItem("userPermissions", loginResponse.data.permissions)
        yield put(userPasswordCreateSuccess(response.data));
        yield put(userLoginSuccess(data));
        yield put(setUserRoles(loginResponse.data));
        // yield put(push("/"));
    } catch (error) {
        yield put(userPasswordCreateFail(error));
    }
}

function* onUserCreatePassword() {
    yield takeLatest(AuthActionTypes.USER_CREATE_PASSWORD_START, checkUserCreatePasswordAsync);
}

function* getTokenAsync({ payload }) {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        let scope = 'webapi';
        if (payload.rememberMe) {
            scope = scope + " offline_access";
        }
        const requestBody = {
            email: payload.username,
            password: payload.password
        };
        // console.log(ApiURL.USER_LOGIN)
        const loginResponse = yield axios.post(ApiURL.USER_LOGIN, requestBody);
        const data = {
            refreshToken: loginResponse.data.refreshToken,
            accessToken: loginResponse.data.token,
        };
        localStorage.setItem("userPermissions", loginResponse.data.permissions)
        localStorage.setItem("userRoles", loginResponse.data.roles)
        Auth.rememberMe(data.accessToken, data.refreshToken);
        // }
        // console.log(loginResponse)
        localStorage.setItem("userRoles", loginResponse.data.roles)

        // yield put(userPasswordCreateSuccess(response.data));
        // yield put(userLoginSuccess(data));
        yield put(setUserRoles(loginResponse.data));

        yield put(userLoginSuccess(data));
        String("").ca
        // yield put(setUserRoles(loginResponse.data.roles));
        var str = loginResponse.data.roles[0];
        var name = str[0].toUpperCase() + str.slice(1);
        yield call(Router.push, `/${name}`);
    } catch (error) {
        yield put(userLoginFailure(error));
    }
}

function* onUserLogin() {
    yield takeLatest(AuthActionTypes.USER_LOGIN_START, getTokenAsync);
}

function* onUserRegister() {
    yield takeLatest(AuthActionTypes.USER_REGISTRATION_START, getUserIDAsync)
}

function* getUserIDAsync({ payload }) {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const requestBody = {
            role: payload.role,
            firstname: payload.firstname,
            middlename: payload.middlename,
            lastname: payload.lastname,
            email: payload.email,
            password: payload.password,

        };

        // const registrationResponse = yield axios.post(ApiURL.USER_REGISTER, requestBody);

        // const data = {
        //     registration_success : registrationResponse.data.registration_success
        // }
        // if(data.registration_success){
        const userId = generateUserId(payload.firstname, payload.middlename, payload.lastname);
        yield put(userRegistrationSuccess(userId));
        yield put(setUserID(userId));
        const nextPage = "auth/RegistrationSuccess"
        yield call(Router.push, `/${nextPage}`);
        // }


    }
    catch (error) {
        yield put(userRegistrationFailure(error));
    }
}
function generateUserId(firstname, middlename, lastname) {

    const firstNameInitial = firstname.toString().toLowerCase().charAt(0)
    const middleNameInitial = middlename.toString().toLowerCase().charAt(0)
    const lastNameInitial = lastname.toString().toLowerCase().charAt(0)

    const firstRandomInt = Math.floor(Math.random() * 10);
    const secondRandomInt = Math.floor(Math.random() * 10);
    const thirdRandomInt = Math.floor(Math.random() * 10);

    const initials = firstNameInitial + middleNameInitial + lastNameInitial;
    const generatedRandom = firstRandomInt.toString() + secondRandomInt.toString() + thirdRandomInt.toString();

    const userId = initials + generatedRandom

    return userId;
}

function* logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessTokenSavedOn");
    localStorage.removeItem("refreshTokenSavedOn");
    // yield put(push("/auth/login"));
}

function* onLogout() {
    yield takeLatest(AuthActionTypes.USER_LOGOUT, logout);
}

export function* authSagas() {
    yield all([
        call(onCheckUserExists),
        call(onUserActivationSubmit),
        call(onUserCreatePassword),
        call(onUserLogin),
        call(onLogout),
        call(onUserRegister)
    ]);
}


