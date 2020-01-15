import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5YdY_PuUJh2izV0R93qUOKkM1Mghm3sc",
  authDomain: "cinemachai-18ad4.firebaseapp.com",
  databaseURL: "https://cinemachai-18ad4.firebaseio.com",
  projectId: "cinemachai-18ad4",
  storageBucket: "cinemachai-18ad4.appspot.com",
  messagingSenderId: "195461152279",
  appId: "1:195461152279:web:b188dc8aa55fa0b6c1a652"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
