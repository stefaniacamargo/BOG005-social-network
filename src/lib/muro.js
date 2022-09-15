// eslint-disable-next-line import/no-cycle
import { salir } from './auth.js';
import {
  infComentario, obtenerComentario, borrarComentario, editarComentario,
} from './firestore.js';

export const muroContenido = `<section class="contenedor-muro">
<header class="logoInicial-muro">
  <div><img class="logo-muro" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/Logo.png" alt="logo" /></div>
  <div><img class="titulo-muro" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/tituloprincipal.PNG" alt="music book" /></div>
  <div><img id="cerrar" class="logout-muro" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/logout2.png" alt="Salir"></div>
</header>
<section id="muro" class="muro">
  <article class="parrafo">
    <p>Comparte aqui todas tus ideas de covers de alguna cancion, o tus acordes. 
    Recomienda y da consejos a las personas que estan aprendiendo sobre musica.</p>
  </article>
  <article id="usuario" class="usuario">
    <img src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/usuario.png" alt="Usuario">
    <p>Sofia Martinez</p>
  </article>
  <textarea id="comentario" class="comentario" placeholder="Escribe aqui..."></textarea>
  <span class="bPublicar"><button class="boton" id="botonPublicar">Publicar</button></span>
  <div id="contenedor-publicacion">
  </div>
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
    const fecha = new Date();
    infComentario(comentario, fecha);
    document.getElementById('comentario').value = '';
  });
};

export const obtenerPost = async () => {
  const contenedor = document.getElementById('contenedor-publicacion');
  obtenerComentario((querySnapshot) => {
    let texto = '';
    querySnapshot.forEach((doc) => {
      const dato = doc.data();
      console.log(dato);
      texto += `<article id="publicacion" class="publicacion">
      <div>
      <p>${dato.comentario}</p>
      <img class="corazon" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/corazon.png" alt="Me gusta">
      <img class="eliminar" data-id="${doc.id}" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/eliminar.png" alt="Eliminar">
      <img class="modificar" data-id="${doc.id}" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/modificar.png" alt="Modificar">
      </div>
      </article>`;
    });
    contenedor.innerHTML = texto;
    const btnEliminar = document.querySelectorAll('.eliminar');
    btnEliminar.forEach((btn) => {
      // extraer las propiedades de un objeto
      btn.addEventListener('click', ({ target: { dataset } }) => {
        const confirmar = confirm('¿Estas seguro que deseas eliminar la publicación?');
        if (confirmar === true) {
          borrarComentario(dataset.id);
        }
      });
    });
    const btnEditar = document.querySelectorAll('.modificar');
    btnEditar.forEach((btn) => {
      // extraer las propiedades de un objeto
      btn.addEventListener('click', async (e) => {
        const dato = await editarComentario(e.target.dataset.id);
        const editar = dato.data();
        document.getElementById('comentario').value = editar.comentario;
      });
    });
  });
};
