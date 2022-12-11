import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBfbbqQAzeA3x_-eEieTyJVmls4zQTbG7U",
  authDomain: "omar-3faaf.firebaseapp.com",
  databaseURL: "https://omar-3faaf-default-rtdb.firebaseio.com",
  projectId: "omar-3faaf",
  storageBucket: "omar-3faaf.appspot.com",
  messagingSenderId: "189162070131",
  appId: "1:189162070131:web:59b1ed1d555cff04f5ca06"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();