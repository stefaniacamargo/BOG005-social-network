import { iniciarSesion2, google } from './auth.js';

export const iniciarContenido = `<section class="contenedor">
<section class="logoInicial">
<img class="titulo" src="img/tituloprincipal.PNG" alt="music book" />
<img class="logo" src="img/Logo.png" alt="logo" />
</section>
<section class="registro">
<form id="ingresar">
<label >Correo electrónico</label> <br>
<input id="loginCorreo" type="text"> <br>
<label >Contraseña</label> <br>
<input id="loginContraseña" type="text"> <br>
<button type="submit" id="iniciarSesion">Iniciar Sesión</button> <br>
</form>
<p>ó</p>
<button id="google" >Continúa con Google</button>
<p>¿No tienes una cuenta? <a href="#registrate">Registrate</a></p>
</section>
</section>`;

export const vistaIniciar = () => {
  const buttonIngresar = document.getElementById('ingresar');
  buttonIngresar.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Usuario correcto para ingresar');
    const email = document.querySelector('#loginCorreo').value;
    const contraseña = document.querySelector('#loginContraseña').value;
    iniciarSesion2(email, contraseña);
  });
  const buttonGoogle = document.getElementById('google');
  buttonGoogle.addEventListener('click', () => {
    google();
  });
};
