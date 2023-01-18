// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZHiAiMZWwNREwwi23XVykVBrCNPua5o4",
    authDomain: "coffeshop-aa0be.firebaseapp.com",
    projectId: "coffeshop-aa0be",
    storageBucket: "coffeshop-aa0be.appspot.com",
    messagingSenderId: "979836168929",
    appId: "1:979836168929:web:9730567995eebbf3f665a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// Export firestore database
// It will be imported into your react app whenever it is needed
export default storage;