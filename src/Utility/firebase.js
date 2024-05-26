import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgOiSVtXlLK_1P3Jo2YVxLuh4Z5jgIXmk",
  authDomain: "clone-9d854.firebaseapp.com",
  projectId: "clone-9d854",
  storageBucket: "clone-9d854.appspot.com",
  messagingSenderId: "1039660877228",
  appId: "1:1039660877228:web:076632609c8ba379512609",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
