import Head from "next/head";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Login.css";
import "../styles/HomeTemplate.css";
import "../styles/Transfer.css";
import "../styles/UserProfile.css";
import "../styles/ChangePass.css";
import "../styles/ManagePhone.css";
import { Provider } from "react-redux";
import { store, persistor } from "stores/store";
import { PersistGate } from "redux-persist/integration/react";
PersistGate;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
