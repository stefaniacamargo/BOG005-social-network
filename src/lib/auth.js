import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { auth } from './fireBaseConfi.js';

export function registro(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user); // redireccionar a la otra pagina
    }).catch((error) => {
      console.log(error.message);
    });
}
