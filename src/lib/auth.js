import {
  auth, usuarioCreado, usuarioExistente, provider,
  providerGoogle, popup, logout, onAuthState,
} from './fireBaseConfi.js';
// eslint-disable-next-line import/no-cycle
import { cambioRuta } from '../main.js';

export function registro(email, password) {
  usuarioCreado(auth, email, password)
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
  usuarioExistente(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = '#muro';
      console.log(user); // redireccionar a la otra pagina
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export function google() {
  popup(auth, provider)
    .then((result) => {
      const credential = providerGoogle.credentialFromResult(result);
      const token = credential.accessToken;
      window.location.href = '#muro';
      console.log(token);
      const user = result.user.displayName;
      console.log(user);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      console.log(error.customData.email);
      console.log(providerGoogle.credentialFromError(error));
    });
}

export function salir() {
  logout(auth).then(() => {
    // window.location.href = '/';
    cambioRuta('');
  }).catch((error) => {
    console.log(error.message);
  });
}

// onAuthState(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//     window.location.href = '#muro';
//     console.log(uid, 'sesion iniciada');
//   } else {
//     console.log('sesion no iniciada');
//     window.location.href = '#iniciarSesion';
//   }
// });
