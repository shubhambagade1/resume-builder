import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjI4DLzkBlU5mXdXcl4zkOGfi7Y34PSTI",
  authDomain: "auth-1a214.firebaseapp.com",
  projectId: "auth-1a214",
  storageBucket: "auth-1a214.appspot.com",
  messagingSenderId: "411931675225",
  appId: "1:411931675225:web:e369cfb46a7c054efbff48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
