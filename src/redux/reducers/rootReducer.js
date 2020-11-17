import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
import authReducer from "./authReducer";
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    comment: commentsReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
    
});


 export default rootReducer;