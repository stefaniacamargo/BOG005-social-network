import { resgContenido } from './lib/registro.js';
import { iniciarContenido } from './lib/iniciarSesion.js';
import { registro } from './lib/auth.js';

const linkContenido = {
  '#iniciarSesion': iniciarContenido,
  '#registrate': resgContenido,
};

const rutas = {
  '/iniciarSesion': iniciarContenido,
  '/': resgContenido,
};
const rootInicio = document.getElementById('root');

const pathname = window.location.pathname;
console.log(pathname);
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

window.onpopstate = () => {
  const nuevaPathname = window.location.pathname;
  rootInicio.innerHTML = rutas[nuevaPathname];
};

// const buttonRegistrate = document.getElementById('registro');
// buttonRegistrate.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log('cualquier cosa');
//   const email = document.querySelector('#correo').value;
//   const contraseña = document.querySelector('#contraseña').value;

//   registro(email, contraseña);
// });
