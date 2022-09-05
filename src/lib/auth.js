import { auth, usuarioCreado, usuarioExistente} from './fireBaseConfi.js';

export function registro(email, password) {
  usuarioCreado(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user); // redireccionar a la otra pagina
    }).catch((error) => {
      console.log(error.message);
    });
}

export function iniciarSesion2(email, password) {
  usuarioExistente(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user); // redireccionar a la otra pagina
    }).catch((error) => {
      console.log(error.message);
    });
}
