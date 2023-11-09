// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_x9F1-z7MQ9TOlnWlWIRar5mLVE03O8M",
  authDomain: "my-app-ac29a.firebaseapp.com",
  projectId: "my-app-ac29a",
  storageBucket: "my-app-ac29a.appspot.com",
  messagingSenderId: "383208576412",
  appId: "1:383208576412:web:a6174eed12a8837e58a459"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const googleAuthProvider=new GoogleAuthProvider()