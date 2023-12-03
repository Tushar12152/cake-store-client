// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYin23ZcrvR7M1qy6Er1uqI0OlWUOq39A",
  authDomain: "coffee-store-fee98.firebaseapp.com",
  projectId: "coffee-store-fee98",
  storageBucket: "coffee-store-fee98.appspot.com",
  messagingSenderId: "766175508591",
  appId: "1:766175508591:web:eedee991538f73794e759a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
