import firebase from "firebase/compat/app";

import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAbOTDvbtKf5MGHieLIv7-V2KE0R1dzkf0",
    authDomain: "chat-app-13772.firebaseapp.com",
    projectId: "chat-app-13772",
    storageBucket: "chat-app-13772.appspot.com",
    messagingSenderId: "665893780803",
    appId: "1:665893780803:web:291bb7d9e51bd8e7f603f6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator("http://localhost:9099");

if (window.location.hostname === "localhost") {
    db.useEmulator("localhost", "8080");
}

export { db, auth };
export default firebase;
