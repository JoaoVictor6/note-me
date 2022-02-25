// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const {
  VITE_APP_API_KEY,
  VITE_APP_APP_ID,
  VITE_APP_AUTH_DOMAIN,
  VITE_APP_PROJECT_ID,
  VITE_APP_STORAGE_BUCKET,
  VITE_APP_MESSAGING_SENDER_ID,
  VITE_APP_MEASUREMENT_ID
} = import.meta.env

const firebaseConfig = {
  apiKey: VITE_APP_API_KEY,
  authDomain: VITE_APP_AUTH_DOMAIN,
  projectId: VITE_APP_PROJECT_ID,
  storageBucket: VITE_APP_STORAGE_BUCKET,
  messagingSenderId: VITE_APP_MESSAGING_SENDER_ID,
  appId: VITE_APP_APP_ID,
  measurementId: VITE_APP_MEASUREMENT_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth, provider};
