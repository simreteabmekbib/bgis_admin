import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from './root-reducer'
import rootSaga from './root-saga'
// import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
// import { createBrowserHistory } from 'history'
// import createRootReducer from './root-reducer'

const sagaMiddleware = createSagaMiddleware()
// export const history = createBrowserHistory()

const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

const initializeStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

// const store = createStore(
//     createRootReducer(), // root reducer with router state
//     compose(
//       applyMiddleware(
//         routerMiddleware(), // for dispatching history actions
//         ...middlewares
//       ),
//     ),
//   )
// // const store = createStore(rootReducer,applyMiddleware(...middlewares))

// sagaMiddleware.run(rootSaga);

// export default initializeStore;
export const store = initializeStore({})
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);