// eslint-disable-next-line import/no-cycle
import { resgContenido, vistaRegistro } from './lib/registro.js';
// eslint-disable-next-line import/no-cycle
import { iniciarContenido, vistaIniciar } from './lib/iniciarSesion.js';
// eslint-disable-next-line import/no-cycle
import { cerrarSesion, muroContenido, publicar, obtenerPost } from './lib/muro.js';

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

export const cambioRuta = (hash) => {
  console.log(hash);
  if (hash === '') {
    rootInicio.innerHTML = linkContenido['#registrate'];
  } else {
    rootInicio.innerHTML = linkContenido[hash];
  }
  if (hash === '#iniciarSesion') {
    window.history.replaceState({}, 'iniciarSesion', '/iniciarSesion');
    vistaIniciar();
  } else if (hash === '#registrate' || hash === '') {
    window.history.replaceState({}, 'registrate', '/');
    vistaRegistro();
  } else if (hash === '#muro') {
    window.history.replaceState({}, 'muro', '/muro');
    cerrarSesion();
    publicar();
    obtenerPost();
  }
};

window.addEventListener('hashchange', () => {
  cambioRuta(window.location.hash);
});

window.addEventListener('load', () => {
  cambioRuta(window.location.hash);
});

window.onpopstate = () => {
  const nuevaPathname = window.location.pathname;
  rootInicio.innerHTML = rutas[nuevaPathname];
};
