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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
