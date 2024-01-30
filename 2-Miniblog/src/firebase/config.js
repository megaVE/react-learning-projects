import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDl5hMtziXr77_7zG0HbXA9YTB8pDVf3ko",
  authDomain: "miniblog-ca081.firebaseapp.com",
  projectId: "miniblog-ca081",
  storageBucket: "miniblog-ca081.appspot.com",
  messagingSenderId: "1009719146235",
  appId: "1:1009719146235:web:8ecf8f3543c7b846a2a25e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }