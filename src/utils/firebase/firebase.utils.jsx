import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider  } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyCHKQVv940iouav_kYunKLM2dDnjKbMI08",
  authDomain: "stranded-clothing.firebaseapp.com",
  projectId: "stranded-clothing",
  storageBucket: "stranded-clothing.firebasestorage.app",
  messagingSenderId: "577546939896",
  appId: "1:577546939896:web:d63d9ad501b7d183f73a0d"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
