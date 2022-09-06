import { resgContenido, vistaRegistro } from './lib/registro.js';
import { iniciarContenido, vistaIniciar } from './lib/iniciarSesion.js';
import { muroContenido } from './lib/muro.js';

const linkContenido = {
  '#iniciarSesion': iniciarContenido,
  '#registrate': resgContenido,
  '#muro': muroContenido,
};

const rutas = {
  '/iniciarSesion': iniciarContenido,
  '/': resgContenido,
  '/muro': muroContenido,
};
const rootInicio = document.getElementById('root');

const pathname = window.location.pathname;
console.log(pathname);
rootInicio.innerHTML = rutas[pathname];

const cambioRuta = (hash) => {
  if (hash === '#iniciarSesion') {
    window.history.replaceState({}, 'iniciarSesion', '/iniciarSesion');
    vistaIniciar();
  } else if (hash === '#registrate') {
    window.history.replaceState({}, 'registrate', '/');
    vistaRegistro();
  } else if (hash === '#muro') {
    window.history.replaceState({}, 'muro', '/muro');
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
