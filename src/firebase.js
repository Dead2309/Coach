import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcKnTofElk-Pz_qqPGihmCY38dvenOHzI",
  authDomain: "coach-e217c.firebaseapp.com",
  projectId: "coach-e217c",
  storageBucket: "coach-e217c.firebasestorage.app",
  messagingSenderId: "326854910989",
  appId: "1:326854910989:web:23e38cac59f4e3c4bda144"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
