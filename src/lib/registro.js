import { registro } from './auth.js';

export const resgContenido = `<section class="contenedor">
  <section class="logoInicial">
    <img class="titulo" src="img/tituloprincipal.PNG" alt="music book" />
    <img class="logo" src="img/Logo.png" alt="logo" />
  </section>
  <form id="registro" class="registro">
    <label>Nombre y Apellido</label> <br>
    <input id="nombres" type="text"> <br>
    <label>Correo electrónico</label> <br>
    <input id="correo" type="text"> <br>
    <label>Contraseña</label> <br>
    <input id="contraseña" type="text"> <br>
    <button type="submit" id="registrate">Regístrate</button> <br>
    <p>ó</p>
    <button id="google">Continúa con Google 3</button>
    <p>¿Tienes una cuenta? <a href="#iniciarSesion">Iniciar Sesión</a></p>
  </form>
  </section>`;

const vistaRegistro = () => {
  const buttonRegistrate = document.getElementById('registro');
  buttonRegistrate.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('cualquier cosa');
    const email = document.querySelector('#correo').value;
    const contraseña = document.querySelector('#contraseña').value;
    registro(email, contraseña);
  });
};
