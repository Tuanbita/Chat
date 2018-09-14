
import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA0MA9_rzvRpCxKE7jCsy0aD_8YiUMLTns",
    authDomain: "chatgrpc.firebaseapp.com",
    databaseURL: "https://chatgrpc.firebaseio.com",
    projectId: "chatgrpc",
    storageBucket: "chatgrpc.appspot.com",
    messagingSenderId: "392828969147"
  };
  firebase.initializeApp(config);

export default firebase;