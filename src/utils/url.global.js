export const BASE_URL = "https://localhost:7247";
export const ApiURL = {

    USER_LOGIN: `${BASE_URL}/api/Auth/Login/Login`,
    USER_CHECK_EXISTS: `${BASE_URL}/api/auth/checkUser`,
    // USER_WEB_ACTIVATION_REQUEST: `${BASE_URL}/api/user/webActivation`,
    USER_WEB_ACTIVATION_SUBMIT: `${BASE_URL}/api/user/webActivation`,
    USER_WEB_CREATE_PASSWORD: `${BASE_URL}/api/auth/createPassword`,

    USER_COMPANY_REGISTER: `${BASE_URL}/api/auth/mobileRegister`,

}