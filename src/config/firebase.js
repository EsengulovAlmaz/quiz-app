// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD_MjefZgE8LBlNdtLopiv6EqPnb2m1OoI",
    authDomain: "quiz-app-26298.firebaseapp.com",
    projectId: "quiz-app-26298",
    storageBucket: "quiz-app-26298.appspot.com",
    messagingSenderId: "1004613820662",
    appId: "1:1004613820662:web:4e723ef9b4e0b050580cd7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();


export const FireConfig = {
    auth,
    GoogleProvider,

}
