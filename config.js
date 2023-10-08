import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBNXH8qhAa8bq9c6bvpne8x6mUp4cIwJ78",
  authDomain: "test-auth-7f6a5.firebaseapp.com",
  projectId: "test-auth-7f6a5",
  storageBucket: "test-auth-7f6a5.appspot.com",
  messagingSenderId: "60943074882",
  appId: "1:60943074882:web:191a044ee7a834022d8fdb",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
