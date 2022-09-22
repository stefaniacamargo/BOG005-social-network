// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import {
  getFirestore, collection, addDoc, onSnapshot, orderBy, Timestamp, query, deleteDoc, doc, getDoc,
  updateDoc,
// eslint-disable-next-line import/no-unresolved
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

export const getCurrentUser = () => getAuth().currentUser;

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

export {
  collection, addDoc, onSnapshot, orderBy, Timestamp, query, deleteDoc, doc, getDoc, updateDoc,

};
export {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged,
};
