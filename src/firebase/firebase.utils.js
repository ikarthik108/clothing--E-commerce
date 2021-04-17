import firebase from 'firebase/app'; //base import (will give access to firestore and auth when imported)
import 'firebase/firestore' //for the database
import 'firebase/auth' // for authentication

const config={
    apiKey: "AIzaSyB1Yo2SYmCmAvK6VBTm8JvwHX8QmZ7gn0E",
    authDomain: "crwn-db-bbadd.firebaseapp.com",
    projectId: "crwn-db-bbadd",
    storageBucket: "crwn-db-bbadd.appspot.com",
    messagingSenderId: "182846234679",
    appId: "1:182846234679:web:0113455a771c1bd8829fb2",
    measurementId: "G-CTVYV0XQ7Z"
  };

//Configuring the FireBase Utility
firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore=firebase.firestore();

//Setting up Google Authentication Utility

//Gives us Access to GoogleAuthProvider class from the authentication Library
const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	prompt:'select_account'
});

export const signInWithGoogle=()=> auth.signInWithPopup(provider);

export default firebase;