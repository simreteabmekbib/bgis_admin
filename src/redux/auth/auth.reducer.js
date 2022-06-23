import { AuthActionTypes } from './auth.types';


let refreshToken = null;
let accessToken = null;
let userRoles = null;
let userPermissions = null;
if (typeof localStorage !== 'undefined') {
    refreshToken = localStorage.getItem("refreshToken")
    accessToken = localStorage.getItem("accessToken")
    userRoles = localStorage.getItem("userRoles");
    userPermissions = localStorage.getItem("userPermissions");
}
if (userRoles == null) {
    userRoles = ["student"]
} else if (typeof userRoles === "string") {
    userRoles = userRoles.split(",")
}
if (userPermissions == null) {
    userPermissions = []
} else if (typeof userPermissions === "string") {
    userPermissions = userPermissions.split(",")
}
// console.log(userRoles)
const INITIAL_STATE = {
    userExistChecked: false,
    userExists: false,
    userHasPassword: false,
    authLoading: false,
    phoneNumber: null,
    userId:null,
    accountActivated: false,
    authError: null,
    userPassword: null,
    authCode: 0,
    userAuthenticated: false,
    refreshToken: refreshToken,
    accessToken: accessToken,
    userRoles: userRoles,
    selectedRole: userRoles[0],
    userPermissions: userPermissions
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthActionTypes.USER_CHECK_EXISTS_START: {
            return {
                ...state,
                authLoading: true,
                username: action.payload
            }
        }
        case AuthActionTypes.SET_USER_ROLES: {
            return {
                ...state,
                userRoles: action.payload.roles,
                userPermissions: action.payload.permissions,
            }
        }
        case AuthActionTypes.SET_AUTH_ERROR: {
            return {
                ...state,
                authError: action.payload.error,
                authLoading: action.payload.loading
            }
        }
        case AuthActionTypes.SET_USER_PHONE: {
            return {
                ...state,
                phoneNumber: action.payload
            }
        }
        case AuthActionTypes.SET_USER_ID: {
            return {
                ...state,
                userId: action.payload
            }
        }
        case AuthActionTypes.USER_CHECK_EXISTS_SUCCESS: {
            const payload = action.payload;
            if (payload.userExists) {
                if (payload.passwordCreated) {
                    return {
                        ...state,
                        authLoading: false,
                        userHasPassword: true,
                        userExists: true,
                        userExistChecked: true
                    }
                } else {
                    return {
                        ...state,
                        authLoading: false,
                        userHasPassword: false,
                        userExists: true,
                        userExistChecked: true
                    }
                }
            } else {
                return {
                    ...state,
                    authLoading: false,
                    userHasPassword: false,
                    userExists: false,
                    userExistChecked: true
                }
            }
        }

        case AuthActionTypes.USER_ACTIVATION_SUBMIT_START: {
            // console.log(action);
            return {
                ...state,
                authLoading: true,
                authCode: action.payload.aCode
            }
        }
        case AuthActionTypes.USER_ACTIVATION_SUBMIT_SUCCESS: {
            return {
                ...state,
                authLoading: false,
                accountActivated: true
            }
        }
        case AuthActionTypes.USER_ACTIVATION_SUBMIT_FAIL: {
            return {
                ...state,
                authLoading: false,
                authError: action.payload
            }
        }
        case AuthActionTypes.USER_CREATE_PASSWORD_START: {
            return {
                ...state,
                authLoading: true,
            }
        }
        case AuthActionTypes.USER_CREATE_PASSWORD_SUCCESS: {
            return {
                ...state,
                authLoading: false,
                userAuthenticated: true
            }
        }
        case AuthActionTypes.USER_CREATE_PASSWORD_FAIL: {
            return {
                ...state,
                authLoading: false,
                authError: action.payload
            }
        }
        // case AuthActionTypes.REFRESH_ACCESS_TOKEN_START:
        //     return state;
        case AuthActionTypes.REFRESH_ACCESS_TOKEN_SUCCESS:
            return {
                ...state,
                authLoading: false,
                refreshToken: action.payload.refreshToken,
                accessToken: action.payload.accessToken,
                authError: null
            };
        // case AuthActionTypes.USER_LOGIN_FAILURE:
        //     return {
        //         ...state,
        //         authLoading: false,
        //         authError: action.payload
        //     };
        case AuthActionTypes.USER_REGISTRATION_START:
            return {
                ...state,
                authLoading: true,
                registrationModel: action.payload
            };
        case AuthActionTypes.USER_REGISTRATION_SUCCESS:
            return {
                ...state,
                authLoading: false,
                userId: action.payload.userId,
                authError: null
            };
        case AuthActionTypes.USER_REGISTRATION_FAILURE:
            return {
                ...state,
                authLoading: false,
                authError: action.payload
            };
        case AuthActionTypes.USER_LOGIN_START:
            return {
                ...state,
                authLoading: true,
                loginModel: action.payload
            };
        case AuthActionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                authLoading: false,
                refreshToken: action.payload.refreshToken,
                accessToken: action.payload.accessToken,
                authError: null
            };
        case AuthActionTypes.USER_LOGIN_FAILURE:
            return {
                ...state,
                authLoading: false,
                authError: action.payload
            };
        case AuthActionTypes.USER_LOGOUT:
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("accessTokenSavedOn");
            localStorage.removeItem("refreshTokenSavedOn");
            localStorage.removeItem("userRoles");
            localStorage.removeItem("userPermissions")
            return {
                ...state,
                accessToken: null,
                refreshToken: null,
                userRoles: null,
                userPermissions: null,
            };
        default:
            return state;
    }
}

export default authReducer;