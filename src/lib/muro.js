import { salir } from './auth.js';

export const muroContenido = `<section class="contenedor-muro">
<header class="logoInicial-muro">
  <div><img class="logo-muro" src="./img/Logo.png" alt="logo" /></div>
  <div><img class="titulo-muro" src="./img/tituloprincipal.PNG" alt="music book" /></div>
  <div><img id="cerrar" class="logout-muro" src="./img/logout2.png" alt="Salir"></div>
</header>
<section class="muro">
  <article class="parrafo">
    <p>Comparte aqui todas tus ideas de covers de alguna cancion, o tus acordes.</p>
    <p>Recomienda y da consejos a las personas que estan aprendiendo sobre musica.</p>
  </article>
  <article id="usuario" class="usuario">
    <img src="./img/usuario.png" alt="Usuario">
    <p>Sofia Martinez</p>
  </article>
  <input class="comentario" type="text" placeholder="Escribe aqui...">
  <article class="publicacion">
    <p>Me gusto la nueva cancion de Shakira</p>
    <img class="corazon" src="./img/corazon.png" alt="Me gusta">
    <img class="eliminar" src="./img/eliminar.png" alt="Eliminar">
    <img class="modificar" src="./img/modificar.png" alt="Modificar">
  </article>
</section>
</section>`;

export const cerrarSesion = () => {
  const buttonCerrar = document.getElementById('cerrar');
  buttonCerrar.addEventListener('click', () => {
    salir();
  });
};
