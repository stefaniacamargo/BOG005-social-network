import { salir } from './auth.js';
import { infComentario, obtenerComentario } from './firestore.js';

export const muroContenido = `<section class="contenedor-muro">
<header class="logoInicial-muro">
  <div><img class="logo-muro" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/Logo.png" alt="logo" /></div>
  <div><img class="titulo-muro" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/tituloprincipal.PNG" alt="music book" /></div>
  <div><img id="cerrar" class="logout-muro" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/logout2.png" alt="Salir"></div>
</header>
<section class="muro">
  <article class="parrafo">
    <p>Comparte aqui todas tus ideas de covers de alguna cancion, o tus acordes. 
    Recomienda y da consejos a las personas que estan aprendiendo sobre musica.</p>
  </article>
  <article id="usuario" class="usuario">
    <img src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/usuario.png" alt="Usuario">
    <p>Sofia Martinez</p>
  </article>
  <input id="comentario" class="comentario" type="text" placeholder="Escribe aqui...">
  <span class="bPublicar"><button class="boton" id="botonPublicar">Publicar</button></span>
  <article id="publicacion" class="publicacion">
    <p>Me gusto la nueva cancion de Shakira</p>
    <img class="corazon" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/corazon.png" alt="Me gusta">
    <img class="eliminar" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/eliminar.png" alt="Eliminar">
    <img class="modificar" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/modificar.png" alt="Modificar">
  </article>

</section>
</section>`;

export const cerrarSesion = () => {
  const buttonCerrar = document.getElementById('cerrar');
  buttonCerrar.addEventListener('click', () => {
    salir();
  });
};

export const publicar = () => {
  const botonPublicar = document.getElementById('botonPublicar');
  botonPublicar.addEventListener('click', () => {
    console.log('publico');
    const comentario = document.getElementById('comentario').value;
    console.log(comentario);
    infComentario(comentario);
    document.getElementById('comentario').value = '';
  });
};
let texto = '';
const pintar = (dato) => {
  for (let i = 0; i < dato.lenght; i++) {
    texto += `<article id="publicacion" class="publicacion">
    <p>${dato[i]}</p>
    <img class="corazon" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/corazon.png" alt="Me gusta">
    <img class="eliminar" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/eliminar.png" alt="Eliminar">
    <img class="modificar" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/modificar.png" alt="Modificar">
    </article>`;
  }
};
let publicacion = '';
export const obtenerPost = async () => {
  publicacion = document.getElementById('publicacion');
  const snapshot = await obtenerComentario();
  snapshot.forEach((doc) => {
    const dato = doc.data().comentario;
    console.log(dato);
    pintar(dato);
    // publicacion.innerHTML = texto;
  });
};
