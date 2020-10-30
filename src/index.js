import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import { createFirestoreInstance, getFirestore } from "redux-firestore";
import { rootReducer } from "./redux/reducers/rootReducer";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

/// Firebase config

const firebaseConfig = {
  apiKey: "AIzaSyBYxODoEH_hhq0fVc7AAqk1sj6ou04jJ4A",
  authDomain: "news-app-5970e.firebaseapp.com",
  databaseURL: "https://news-app-5970e.firebaseio.com",
  projectId: "news-app-5970e",
  storageBucket: "news-app-5970e.appspot.com",
  messagingSenderId: "389602304910",
  appId: "1:389602304910:web:15da7bdb84ef0ed3807adf"
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

/// Store config

const initialState = {};
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(logger, thunk.withExtraArgument({getFirebase, getFirestore})))
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

