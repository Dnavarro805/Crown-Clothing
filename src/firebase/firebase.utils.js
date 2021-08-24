import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyANIlVsdua-QvT0hX292kV-cGYq95oKNTQ",
    authDomain: "crown-db-4889e.firebaseapp.com",
    projectId: "crown-db-4889e",
    storageBucket: "crown-db-4889e.appspot.com",
    messagingSenderId: "117411692435",
    appId: "1:117411692435:web:7387597328573d6e8ef266",
    measurementId: "G-PLX4ZSN259"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;