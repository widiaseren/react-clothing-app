import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDSDszlmEkS8C5UTSDqFka_5idyAvFZvwo",
  authDomain: "crown-db-8742b.firebaseapp.com",
  projectId: "crown-db-8742b",
  storageBucket: "crown-db-8742b.appspot.com",
  messagingSenderId: "826025295139",
  appId: "1:826025295139:web:5e5f5f91b31f3147982096",
  measurementId: "G-QD311461JE"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;