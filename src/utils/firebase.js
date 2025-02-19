// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdYuUVuVM0tY46uLidCyUThRLmqbuL3N0",
  authDomain: "netflixclone-158c1.firebaseapp.com",
  projectId: "netflixclone-158c1",
  storageBucket: "netflixclone-158c1.firebasestorage.app",
  messagingSenderId: "707093810457",
  appId: "1:707093810457:web:19407f7dd1705cdef3c988",
  measurementId: "G-736Z0JS39T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();