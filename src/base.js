import firebase from "firebase";
import "firebase/firestore"


const app = firebase.initializeApp({
  apiKey: "AIzaSyA-d_L5bGbHeJBMPHN5My9I-yLzX9QFnuM",
  authDomain: "mytodo-fbc24.firebaseapp.com",
  projectId: "mytodo-fbc24",
  storageBucket: "mytodo-fbc24.appspot.com",
  messagingSenderId: "944609250461",
  appId: "1:944609250461:web:7aa3b602b5552146b4d874"
})

export default app