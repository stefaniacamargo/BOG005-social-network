import {
  auth, provider, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged,
} from './fireBaseConfi.js';
// eslint-disable-next-line import/no-cycle
import { cambioRuta } from '../main.js';

export function registro(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = '#muro';
      console.log(user); // redireccionar a la otra pagina
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export function iniciarSesion2(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = '#muro';
      console.log(user); // redireccionar a la otra pagina
    })
    .catch((error) => {
      console.log(error.message);
    });
}
export let user = '';
export let userPhoto = '';

export function google() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      window.location.href = '#muro';
      console.log(token);
      user = result.user.displayName;
      userPhoto = result.user.photoURL;
      console.log(userPhoto);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      console.log(error.customData.email);
      console.log(GoogleAuthProvider.credentialFromError(error));
    });
}

export function salir() {
  signOut(auth).then(() => {
    // window.location.href = '/';
    cambioRuta('');
  }).catch((error) => {
    console.log(error.message);
  });
}

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//     window.location.href = '#muro';
//     console.log(uid, 'sesion iniciada');
//   } else {
//     console.log('sesion no iniciada');
//     window.location.href = '#iniciarSesion';
//   }
// });
