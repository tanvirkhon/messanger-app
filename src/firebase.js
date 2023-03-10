import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBovhy721TDu7vwaSLREJS6fT07RVb0ZL8",
  authDomain: "bootcamp-chat-6615e.firebaseapp.com",
  projectId: "bootcamp-chat-6615e",
  storageBucket: "bootcamp-chat-6615e.appspot.com",
  messagingSenderId: "277695033000",
  appId: "1:277695033000:web:cc5a608fc33bdff8df1c9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
