import { iniciarSesion, google } from './auth.js';

export const iniciarContenido = `<section class="contenedor">
<section class="logoInicial">
<div>
<figure><img class="titulo" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/tituloprincipal.PNG" alt="music book" /></figure>
<figure><img class="logo" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/Logo.png" alt="logo" /></figure>
</div>
</section>
<section class="registro">
<form id="ingresar">
<label >Correo electrónico</label> <br>
<input id="loginCorreo" type="text"> <br>
<label >Contraseña</label> <br>
<input id="loginContraseña" type="password"> <br>
<div id='modalMessage'>
              <div id='textModal'></div>            
   </div>
   <div class='errorMessagelogin'></div>
<button type="submit" id="iniciarSesion">Iniciar Sesión</button> <br>
</form>
<img id="google" class="logo" src="https://raw.githubusercontent.com/devfd/react-native-google-signin/HEAD/img/signin-button.png" alt="continua con google">
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
    iniciarSesion(email, contraseña);
  });
  const buttonGoogle = document.getElementById('google');
  buttonGoogle.addEventListener('click', () => {
    google();
  });
};
