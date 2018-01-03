import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCGucQj7Sz-3kPkexxMxtAOy23_Ln141Rc",
    authDomain: "movieins-90544.firebaseapp.com",
    databaseURL: "https://movieins-90544.firebaseio.com",
    projectId: "movieins-90544",
    storageBucket: "movieins-90544.appspot.com",
    messagingSenderId: "916198020573"
  };
export const firebaseApp = firebase.initializeApp(config);
