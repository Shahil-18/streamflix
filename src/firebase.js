import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1CWKE1mxg8Dyluk_s7n8p4jRoY6H1gmY",
  authDomain: "streamflix-57d8e.firebaseapp.com",
  projectId: "streamflix-57d8e",
  storageBucket: "streamflix-57d8e.firebasestorage.app",
  messagingSenderId: "263769011714",
  appId: "1:263769011714:web:3629a1721081c597c2d91b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;