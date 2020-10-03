import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDJzcL1uu2dS56jMjzTTMJ_LLtVXNbgW6U",
    authDomain: "digital-maker-270904.firebaseapp.com",
    databaseURL: "https://digital-maker-270904.firebaseio.com",
    projectId: "digital-maker-270904",
    storageBucket: "digital-maker-270904.appspot.com",
    messagingSenderId: "374217457218",
    appId: "1:374217457218:web:4e28d11126981238a1f7db",
    measurementId: "G-W0S34F3HNR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;