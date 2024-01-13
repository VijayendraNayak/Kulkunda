// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const dotenv = require("dotenv");
dotenv.config({ path: "client/config.env" });
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbdZWAsF4W4dJEnOC330nmRDKxjLikbzc",
  authDomain: "kulkunda-basaveshwara.firebaseapp.com",
  projectId: "kulkunda-basaveshwara",
  storageBucket: "kulkunda-basaveshwara.appspot.com",
  messagingSenderId: "529539806098",
  appId: "1:529539806098:web:759cd3089dd73fad9d074b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };