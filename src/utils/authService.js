import store from '../redux/store';
import {} from './constants'

class AuthService {

    
    constructor() { }

    isAuthenticated() {
        const state = store.getState();
        if(state.auth.refreshToken == null || state.auth.accessToken == null){
            return false
        }
        return true;
    }

    isStateAuthenticated(state) {
        if(state.auth.refreshToken == null || state.auth.accessToken == null){
            return false
        }
        return true;
    }

    rememberMe(accessToken, refreshToken){
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        const date = new Date();
        localStorage.setItem("accessTokenSavedOn", date.toISOString());
        localStorage.setItem("refreshTokenSavedOn", date.toISOString());
    }

    loadRefreshToken(){
        const refreshToken = localStorage.getItem("refreshToken");
        return refreshToken;
    }

    logOut(){
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('accessTokenSavedOn');
        localStorage.removeItem('accessTokenSavedOn');
    }

    needRefreshAccessToken(){

    }

    needRefreshRefreshToken(){

    }
}

export default new AuthService();