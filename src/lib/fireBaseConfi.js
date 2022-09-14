import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import {
  getFirestore, collection, addDoc, getDocs, doc, onSnapshot
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyA1ZvCmPukgBPLDtlPc58Rvhm1o-_-xfDA',
  authDomain: 'bog005-socialnetwork.firebaseapp.com',
  projectId: 'bog005-socialnetwork',
  storageBucket: 'bog005-socialnetwork.appspot.com',
  messagingSenderId: '184403560841',
  appId: '1:184403560841:web:20985f90585ab2e76db958',
};

const app = initializeApp(firebaseConfig);
// console.log('app: ', app);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

export {
  collection, addDoc, getDocs, doc, onSnapshot,
};
export {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged,
};
