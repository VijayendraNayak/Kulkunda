// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAf3_nItP9NS8t__PZ1OiLmDAt_-JK-z8",
  authDomain: "kulkunda-temple-project.firebaseapp.com",
  projectId: "kulkunda-temple-project",
  storageBucket: "kulkunda-temple-project.appspot.com",
  messagingSenderId: "509123099353",
  appId: "1:509123099353:web:44ea7f6e2253c363005cc8",
  measurementId: "G-9L3499K2P1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };