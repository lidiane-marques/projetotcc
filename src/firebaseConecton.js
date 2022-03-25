// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlHuAMjxpMb4zeOOpDFrfZ4wpu_Ncv4EE",
  authDomain: "projetotcc-78670.firebaseapp.com",
  databaseURL: "https://projetotcc-78670-default-rtdb.firebaseio.com",
  projectId: "projetotcc-78670",
  storageBucket: "projetotcc-78670.appspot.com",
  messagingSenderId: "199685559349",
  appId: "1:199685559349:web:8a14ba0db98bb5f3294d7c"
};

// Initialize Firebase
if(firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default firebase;