import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBYxODoEH_hhq0fVc7AAqk1sj6ou04jJ4A",
  authDomain: "news-app-5970e.firebaseapp.com",
  databaseURL: "https://news-app-5970e.firebaseio.com",
  projectId: "news-app-5970e",
  storageBucket: "news-app-5970e.appspot.com",
  messagingSenderId: "389602304910",
  appId: "1:389602304910:web:15da7bdb84ef0ed3807adf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;