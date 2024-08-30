import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyCtGshypWZR5mx2WqKfpMFDEdJHM0IznAU",
    authDomain: "social-app-011.firebaseapp.com",
    projectId: "social-app-011",
    storageBucket: "social-app-011.appspot.com",
    messagingSenderId: "895073577958",
    appId: "1:895073577958:web:20ee18c34f0e3b84554427",
    measurementId: "G-WL5ELX5G8S"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);





  
  
