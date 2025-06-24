import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAWpHhg7y2DWR_9JX1spGlFXbw8pplD9fw",
  authDomain: "flutter-chat-app-2146d.firebaseapp.com",
  databaseURL: "https://flutter-chat-app-2146d-default-rtdb.firebaseio.com",
  projectId: "flutter-chat-app-2146d",
  storageBucket: "flutter-chat-app-2146d.firebasestorage.app",
  messagingSenderId: "634485481911",
  appId: "1:634485481911:web:de81c7e48395f90f014832",
  measurementId: "G-YJMCPWKY8Y",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const storage = getStorage(app);

const handleFirebaseError = (error: any) => {
  console.error("Firebase error:", error);
  return {
    error: {
      message: error.message || "An unknown error occurred",
      code: error.code || "unknown",
    },
  };
};

export { db, storage, handleFirebaseError };
