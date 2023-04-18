// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBikuShXolLxUByZesB23ci_8x5k_OZOSI",
  authDomain: "fir-with-context-api-e2ea0.firebaseapp.com",
  projectId: "fir-with-context-api-e2ea0",
  storageBucket: "fir-with-context-api-e2ea0.appspot.com",
  messagingSenderId: "258963145276",
  appId: "1:258963145276:web:cc807209dfcc0ec4a0b939"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app