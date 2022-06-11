import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdIeXGvCMYcMA1T45jN24_hmuEuFtCyd0",
  authDomain: "twitter-clone-74465.firebaseapp.com",
  projectId: "twitter-clone-74465",
  storageBucket: "twitter-clone-74465.appspot.com",
  messagingSenderId: "162801957242",
  appId: "1:162801957242:web:60ad6ec90958ddaf4d7ec3",
  measurementId: "G-9V28TMF856",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;
