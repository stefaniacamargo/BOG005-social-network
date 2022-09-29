import {
  auth,
  provider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "./fireBaseConfig.js";
// updateProfile,

export { getCurrentUser } from "./fireBaseConfig.js";

export function registro(email, password) {
  const promiseRegister = createUserWithEmailAndPassword(auth, email, password);
  return promiseRegister;
}

export function iniciarSesion(email, password) {
  const promiseLogin = signInWithEmailAndPassword(auth, email, password);
  return promiseLogin;
}

export function google() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // window.location.href = '#muro';
      console.log(token);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      console.log(error.customData.email);
      console.log(GoogleAuthProvider.credentialFromError(error));
    });
}

export function salir() {
  signOut(auth)
    .then(() => {
      // window.location.href = '/';
    })
    .catch((error) => {
      console.log(error.message);
    });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "#muro";
    console.log(user, "sesion iniciada");
  } else {
    console.log("sesion no iniciada");
    window.location.href = "#iniciarSesion";
  }
});
