// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics'
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHTqQguGQx8IkMM6erKSuHEh-yIj759bM",
  authDomain: "gcloudvmapp.firebaseapp.com",
  projectId: "gcloudvmapp",
  storageBucket: "gcloudvmapp.appspot.com",
  messagingSenderId: "646717833282",
  appId: "1:646717833282:web:a26b0d91d8a728e1f76ddb",
  measurementId: "G-5GCJGXN4D2",
  databaseUrl: "https://gcloudvmapp-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// initialize database
const database = getDatabase(app);