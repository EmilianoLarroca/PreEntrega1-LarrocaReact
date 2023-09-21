import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBn0RgzRu4FyO5VcTd5uuG7W-4IrupEI58",
  authDomain: "cueva-del-lector.firebaseapp.com",
  projectId: "cueva-del-lector",
  storageBucket: "cueva-del-lector.appspot.com",
  messagingSenderId: "591122238876",
  appId: "1:591122238876:web:853aacdc43fb1a759e0c59"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);