// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDnEvNg_ZdlKqK0qslHuignrHxRMGQQl6M',
  authDomain:'netflix-clone-7ba45.firebaseapp.com',
  projectId: 'netflix-clone-7ba45',
  storageBucket: 'netflix-clone-7ba45.appspot.com' ,
  messagingSenderId: '499419621923',
  appId: '1:499419621923:web:15503b4f8f806174641f96',
 
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app)
 