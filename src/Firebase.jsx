// firebase.js
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBq5y28JCOV7BZu_uiPPEW-hwTN31lQ1AU",
  authDomain: "chatappfruitai.firebaseapp.com",
  projectId: "chatappfruitai",
  storageBucket: "chatappfruitai.appspot.com",
  messagingSenderId: "105120743918",
  appId: "1:105120743918:web:199107bc10b12dbb298eff",
  measurementId: "G-V0HDHM6X58",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
