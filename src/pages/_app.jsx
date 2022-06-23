import '../styles/globals.css'

import { Provider } from "react-redux";
import { wrapper, store } from "../redux/store";
import { useRouter } from "next/router";
import authService from '../utils/authService';
import Login from './auth/login';
import AccessDenied from './403';
// import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

function MyApp({ Component, pageProps }) {

  let allowed = true;
  const router = useRouter();
  if (!authService.isStateAuthenticated(store.getState()) || store.getState().auth.userRoles == undefined) {
    const toAuth = router.pathname.startsWith("/auth");
    const ComponentToRender = toAuth ? Component : Login;
    return (
      <>
        <Provider store={store}>
          <ComponentToRender {...pageProps} />
        </Provider>
      </>
    );
  }

  if (router.pathname.startsWith("/Admin") && store.getState().auth.userRoles.indexOf("admin") == -1) {
    allowed = false;
  }
  if (router.pathname.startsWith("/Parent") && store.getState().auth.userRoles.indexOf("parent") == -1) {
    allowed = false;
  }
  if (router.pathname.startsWith("/Student") && store.getState().auth.userRoles.indexOf("student") == -1) {
    allowed = false;
  }
  if (router.pathname.startsWith("/Teacher") && store.getState().auth.userRoles.indexOf("teacher") == -1) {
    allowed = false;
  }
  const ComponentToRender = allowed ? Component : AccessDenied;

  return (
    <>
      <Provider store={store}>
        <ComponentToRender {...pageProps} />
      </Provider>
    </>
  );
}
// export default withRedux(configureStore)(withReduxSaga(ExampleApp))
export default wrapper.withRedux(withReduxSaga(MyApp));
