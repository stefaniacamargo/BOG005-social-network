// eslint-disable-next-line import/no-cycle

import { salir, getCurrentUser } from "./auth.js";
import {
  infComentario,
  obtenerComentario,
  borrarComentario,
  editarComentario,
  actualizarComentario,
  likeComentario,
} from "./firestore.js";

export const muroContenido = `<section class="contenedor-muro">
<header class="logoInicial-muro">
  <div><img class="logo-muro" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/Logo.png" alt="logo" /></div>
  <div><img class="titulo-muro" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/tituloprincipal.PNG" alt="music book" /></div>
  <div><img id="cerrar" class="logout-muro" src="img/logout3.png" alt="Salir"></div>
</header>
<section id="muro" class="muro">
  <article class="parrafo">
    <p>Comparte aqui todas tus ideas de covers de alguna cancion, o tus acordes. 
    Recomienda y da consejos a las personas que estan aprendiendo sobre musica.</p>
  </article>
  <article id="usuario" class="usuario">
    <img src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/usuario.png
    " alt="Usuario">
    <p>sofia </p>
  </article>
  <textarea id="comentario" class="comentario" placeholder="Escribe aqui..."></textarea>
  <span class="bPublicar"><button class="boton" id="botonPublicar">Publicar</button></span>
  <div id="contenedor-publicacion">
  </div>
</section>
</section>`;

let editarEstado = false;
let id = "";

export const cerrarSesion = () => {
  const buttonCerrar = document.getElementById("cerrar");
  buttonCerrar.addEventListener("click", () => {
    salir();
  });
};

export const publicar = () => {
  const botonPublicar = document.getElementById("botonPublicar");
  botonPublicar.addEventListener("click", () => {
    botonPublicar.innerText = "Publicar";
    const comentario = document.getElementById("comentario").value;
    const fecha = new Date();
    if (!editarEstado) {
      infComentario(
        comentario,
        fecha,
        getCurrentUser().displayName,
        getCurrentUser().photoURL
      );
    } else {
      actualizarComentario(id, {
        comentario,
      });
      editarEstado = false;
    }

    document.getElementById("comentario").value = "";
  });
};

export const obtenerPost = async () => {
  const contenedor = document.getElementById("contenedor-publicacion");
  obtenerComentario((querySnapshot) => {
    let texto = "";
    querySnapshot.forEach((docs) => {
      const dato = docs.data();
      texto += `
      <article id="usuario" class="usuario">
      <img src="${dato.userPhoto}">
      <p>${dato.user}</p>
    </article>
      <article id="publicacion" class="publicacion">
      <div>
      <p>${dato.comentario}</p>
      <img class="corazonVacio" data-id="${docs.id}" src="img/heartvaciorelle.png" alt="">
      <p>${dato.likesCounter}</p>
      <img class="eliminar" data-id="${docs.id}" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/eliminar.png" alt="Eliminar">
      <img class="modificar" data-id="${docs.id}" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/modificar.png" alt="Modificar">
      </div>
      </article>`;
    });
    contenedor.innerHTML = texto;

    const btnEliminar = document.querySelectorAll(".eliminar");
    btnEliminar.forEach((btn) => {
      // extraer las propiedades de un objeto
      btn.addEventListener("click", ({ target: { dataset } }) => {
        const confirmar = window.confirm(
          "¿Estas seguro que deseas eliminar la publicación?"
        );
        if (confirmar === true) {
          borrarComentario(dataset.id);
        }
      });
    });

    const btnEditar = document.querySelectorAll(".modificar");
    btnEditar.forEach((btn) => {
      // extraer las propiedades de un objeto
      btn.addEventListener("click", async (e) => {
        console.log("entroa edit");
        const dato = await editarComentario(e.target.dataset.id);
        const editar = dato.data();
        document.getElementById("comentario").value = editar.comentario;

        editarEstado = true;
        id = dato.id;

        document.getElementById("botonPublicar").innerText = "Actualizar";
      });
    });

    const btnLike = document.querySelectorAll(".corazonVacio");
    btnLike.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        console.log(getCurrentUser().uid);
        const userId = getCurrentUser().uid;
        likeComentario(e.target.dataset.id, userId);
      });
    });
  });
};
