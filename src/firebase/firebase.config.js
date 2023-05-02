// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO103BK2P85dE8-OXgVJyWDD4jJCbed9k",
  authDomain: "chef-recipe-hunter-main.firebaseapp.com",
  projectId: "chef-recipe-hunter-main",
  storageBucket: "chef-recipe-hunter-main.appspot.com",
  messagingSenderId: "992381999919",
  appId: "1:992381999919:web:e6679b7e05907697d45fda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
