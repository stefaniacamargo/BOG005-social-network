import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyA1ZvCmPukgBPLDtlPc58Rvhm1o-_-xfDA',
  authDomain: 'bog005-socialnetwork.firebaseapp.com',
  projectId: 'bog005-socialnetwork',
  storageBucket: 'bog005-socialnetwork.appspot.com',
  messagingSenderId: '184403560841',
  appId: '1:184403560841:web:20985f90585ab2e76db958'
};

const app = initializeApp(firebaseConfig);
// console.log('app: ', app);
export const auth = getAuth(app);

export const usuarioCreado = createUserWithEmailAndPassword;
export const usuarioExistente = signInWithEmailAndPassword;

export const provider = new GoogleAuthProvider();
export const providerGoogle = GoogleAuthProvider;
export const popup = signInWithPopup;

export const logout = signOut;
export const onAuthState = onAuthStateChanged;
