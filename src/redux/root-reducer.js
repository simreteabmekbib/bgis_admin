import {combineReducers} from 'redux'

import authReducer from './auth/auth.reducer';
// import { connectRouter } from 'connected-react-router'

const createRootReducer = combineReducers({
    // router: connectRouter(history),
    auth: authReducer
});

export default createRootReducer;
