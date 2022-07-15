import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const app = firebase.initializeApp(firebaseConfig).firestore();

export default app;