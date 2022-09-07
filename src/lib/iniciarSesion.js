import { iniciarSesion2, google } from './auth.js';

export const iniciarContenido = `<section class="contenedor">
<section class="logoInicial">
<div>
<img class="titulo" src="./img/tituloprincipal.PNG" alt="music book" />
<img class="logo" src="./img/Logo.png" alt="logo" />
</div>
</section>
<section class="registro">
<form id="ingresar">
<label >Correo electrónico</label> <br>
<input id="loginCorreo" type="text"> <br>
<label >Contraseña</label> <br>
<input id="loginContraseña" type="password"> <br>
<button type="submit" id="iniciarSesion">Iniciar Sesión</button> <br>
</form>
<img id="google" class="logo" src="./img/botongoogle.png" alt="continua con google">
<p>¿No tienes una cuenta?</p>
<p><a href="#registrate">Registrate</a></p>
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
