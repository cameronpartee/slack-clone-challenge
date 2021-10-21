import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBbHJRdCRt-QA9Wnc7ZQfMoGbZ-CUBWFd0",
  authDomain: "slack-clone-challenge-cad79.firebaseapp.com",
  projectId: "slack-clone-challenge-cad79",
  storageBucket: "slack-clone-challenge-cad79.appspot.com",
  messagingSenderId: "467636902090",
  appId: "1:467636902090:web:277daf532455e04d99fc33",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
