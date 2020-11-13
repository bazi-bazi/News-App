import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './redux/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'
import firebase from './firebase/config'
import { BrowserRouter } from 'react-router-dom'


import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase'
import 'firebase/firestore';



const rrfConfig = { 
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
}



/// Store config

// const initialState = {};
// const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(logger, thunk.withExtraArgument({getFirebase, getFirestore})))
// );

const store = createStore(rootReducer, 
  compose(
    composeWithDevTools(applyMiddleware(logger, thunk.withExtraArgument({getFirebase, getFirestore}))),
      reduxFirestore(firebase)
  )
  );

  const rffProps = {
    firebase,
    useFirestoreForProfile: true,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
    presence: 'presence',
    sessions: 'sessions'
  }

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
  return children
}

ReactDOM.render(

    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rffProps}>
        <BrowserRouter>
          <AuthIsLoaded>
             <App />
          </AuthIsLoaded>
        </BrowserRouter>     
      </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById("root")
);

