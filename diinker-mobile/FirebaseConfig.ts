// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDio0btWbSLH-4ViPNOEdXUrkOuIqhOMgE",
  authDomain: "diinker.firebaseapp.com",
  projectId: "diinker",
  storageBucket: "diinker.firebasestorage.app",
  messagingSenderId: "232777167918",
  appId: "1:232777167918:web:6bc485a35b9305fd6b5bbf",
  measurementId: "G-G4RWJJ3JYD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});