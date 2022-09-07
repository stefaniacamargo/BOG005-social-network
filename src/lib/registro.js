import { registro, google } from './auth.js';

export const resgContenido = `<section class="contenedor">
<section class="logoInicial">
  <div>
  <img class="titulo" src="./img/tituloprincipal.PNG" alt="music book" />
  <img class="logo" src="./img/Logo.png" alt="logo" />
  </div>
</section>
<section class="registro">
<form id="registro">
  <label>Nombre y Apellido</label> <br>
  <input id="nombres" type="text"> <br>
  <label>Correo electrónico</label> <br>
  <input id="correo" type="text"> <br>
  <label>Contraseña</label> <br>
  <input id="contraseña" type="password"> <br>
  <button type="submit" id="registrate">Regístrate</button> <br>
  </form>
  <img id="google" class="logo" src="./img/botongoogle.png" alt="continua con google">
  <p>¿Tienes una cuenta? </p>
  <p><a href="#iniciarSesion">Iniciar Sesión</a></p>
</section>
</section>`;

export const vistaRegistro = () => {
  const buttonIngresar = document.getElementById('registro');
  buttonIngresar.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Usuario creado');
    const email = document.querySelector('#correo').value;
    const contraseña = document.querySelector('#contraseña').value;
    registro(email, contraseña);
  });
  const buttonGoogle = document.getElementById('google');
  buttonGoogle.addEventListener('click', () => {
    google();
  });
};
