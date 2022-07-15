import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCqnOvXXk6RJKrHNpyE2r0h8fDs9k85OIs",
    authDomain: "webtopia-itcamp.firebaseapp.com",
    projectId: "webtopia-itcamp",
    storageBucket: "webtopia-itcamp.appspot.com",
    messagingSenderId: "945410318606",
    appId: "1:945410318606:web:1bf63020cdabf3c914775f",
    measurementId: "G-70GWSMV0C2"
};

const app = firebase.initializeApp(firebaseConfig).firestore();

export default app;