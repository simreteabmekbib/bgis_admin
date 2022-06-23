import axios from 'axios';
import qs from 'query-string';
import { refreshTokenSuccess, userLogout } from '../redux/auth/auth.actions';
import store from '../redux/store';
import Auth from './authService';
import { ACCESS_TOKEN_NAME } from './constants';
import { BASE_URL, ApiURL } from './url.global';

const instance = axios.create({
    baseURL: BASE_URL,
})

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response) {
            if (error.response.status === 401) {
                const originalRequest = error.config;
                const state = store.getState();
                const requestBody = {
                    grant_type: 'refresh_token',
                    client_id: 'webclient',
                    refresh_token: state.auth.refreshToken,
                    client_secret: 'web'
                };
                const config = {
                    timeout: 2000,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                };

                return axios.post(ApiURL.USER_LOGIN, requestBody, config)
                    .then(res => {
                        const data = {
                            refreshToken: res.data.refreshToken,
                            accessToken: res.data.accessToken,
                        };
                        Auth.rememberMe(data.accessToken, data.refreshToken);
                        originalRequest.headers['Authorization'] = `Bearer ${res.data.accessToken}`;
                        store.dispatch(refreshTokenSuccess(res.data))
                        return instance(originalRequest);
                    })
                    .catch(e => {
                        store.dispatch(userLogout())
                    })
            } else {
                return Promise.reject(error);
            }
        }
        else {

            return Promise.reject(error);
        }
    }
)

instance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem(ACCESS_TOKEN_NAME);
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    function (error) {
        return Promise.reject(error)
    }
);

export default instance;