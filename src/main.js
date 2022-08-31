// Este es el punto de entrada de tu aplicacion

import { registrarUsuario } from './login.js';

const buttonRegistrate = document.getElementById('registrate');
buttonRegistrate.addEventListener('click', () => {
registrarUsuario('user@example.com', 'password').then(() => {
})
});

const resgContenido = `<label >Nombre y Apellido</label> <br>
<input id type="text"> <br>
<label >Correo electrónico</label> <br>
<input type="text"> <br>
<label >Contraseña</label> <br>
<input type="text"> <br>
<button id="registrate">Regístrate</button> <br>
<p>ó</p>
<button id="google" >Continúa con Google</button>
<p>¿Tienes una cuenta? <a href="#iniciarSesion">Iniciar Sesión</a></p>`;

const iniciarContenido = `<label >Correo electrónico</label> <br>
<input type="text"> <br>
<label >Contraseña</label> <br>
<input type="text"> <br>
<button id="iniciarSesion">Iniciar Sesión</button> <br>
<p>ó</p>
<button id="google" >Continúa con Google</button>
<p>¿No tienes una cuenta? <a href="#registrate">Registrate</a></p>`;

const linkContenido = {
  '#iniciarSesion': iniciarContenido,
  '#registrate': resgContenido,
};

const rutas = {
  '/iniciarSesion': iniciarContenido, '/': resgContenido,
};
const rootInicio = document.getElementById('root');
const pathname = window.location.pathname;
rootInicio.innerHTML = rutas[pathname];
const cambioRuta = (hash) => {
  if (hash === '#iniciarSesion') {
    window.history.replaceState({}, 'iniciarSesion', '/iniciarSesion');
  } else if (hash === '#registrate') {
    window.history.replaceState({}, 'registrate', '/');
  }
};

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  rootInicio.innerHTML = linkContenido[hash];
  cambioRuta(hash);
});
// window.addEventListener("load", () => {
//   cargarVista();
// });

window.onpopstate = () => {
  const nuevaPathname = window.location.pathname;
  rootInicio.innerHTML = rutas[nuevaPathname];
};
// function cargarVista() {

// }
