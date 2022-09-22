// eslint-disable-next-line import/no-cycle
import { salir, userName, userPhoto } from './auth.js';
import {
  infComentario, obtenerComentario, borrarComentario, editarComentario, actualizarComentario,
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
    <img src="${userPhoto}" alt="Usuario">
    <p>${userName}</p>
  </article>
  <textarea id="comentario" class="comentario" placeholder="Escribe aqui..."></textarea>
  <span class="bPublicar"><button class="boton" id="botonPublicar">Publicar</button></span>
  <div id="contenedor-publicacion">
  </div>
</section>
</section>`;

let editarEstado = false;
let id = '';

export const cerrarSesion = () => {
  const buttonCerrar = document.getElementById('cerrar');
  buttonCerrar.addEventListener('click', () => {
    salir();
  });
};

export const publicar = () => {
  const botonPublicar = document.getElementById('botonPublicar');
  botonPublicar.addEventListener('click', () => {
    botonPublicar.innerText = 'Publicar';
    const comentario = document.getElementById('comentario').value;
    const fecha = new Date();

    if (!editarEstado) {
      infComentario(comentario, fecha, userName, userPhoto);
    } else {
      actualizarComentario(id, {
        comentario,
      });
      editarEstado = false;
    }

    document.getElementById('comentario').value = '';
  });
};

export const obtenerPost = async () => {
  const contenedor = document.getElementById('contenedor-publicacion');
  obtenerComentario((querySnapshot) => {
    let texto = '';
    querySnapshot.forEach((docs) => {
      const dato = docs.data();
      texto += `
      <article id="usuario" class="usuario">
      <img src="${dato.userPhoto}">
      <p>${dato.userName}</p>
    </article>
      <article id="publicacion" class="publicacion">
      <div>
      <p>${dato.comentario}</p>
      <img class="corazon" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/corazon.png" alt="Me gusta">
      <img class="eliminar" data-id="${docs.id}" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/eliminar.png" alt="Eliminar">
      <img class="modificar" data-id="${docs.id}" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/modificar.png" alt="Modificar">
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

        editarEstado = true;
        id = dato.id;

        document.getElementById('botonPublicar').innerText = 'Actualizar';
      });
    });
  });
};
export const like = () => {
  const buttonLike = document.querySelectorAll('corazon');
  buttonLike.forEach()
};
