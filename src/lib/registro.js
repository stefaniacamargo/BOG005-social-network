import { registro, google } from './auth.js';

export const resgContenido = `<section class="contenedor">
<section class="logoInicial">
  <div>
  <figure><img class="titulo" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/tituloprincipal.PNG" alt="music book" /></figure>
  <figure><img class="logo" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/Logo.png" alt="logo" /></figure>  </div>
</section>
<section class="registro">
<form id="registro">
  <label>Nombre y Apellido</label> <br>
  <input id="nombres" type="text"> <br>
  <label>Correo electrónico</label> <br>
  <input id="correo" type="text"> <br>
  <label>Contraseña</label> <br>
  <input id="contraseña" type="password"> <br>
  <div id='modalMessage'>
              <div id='textModal'></div>            
          </div>
      <div id='errorMessageJoin'></div>
 <button type="submit" id="registrate">Regístrate</button> <br>
  </form>
  <img id="google" class="logo" src="https://raw.githubusercontent.com/Laura9426/BOG005-social-network/main/src/img/botongoogle.png" alt="continua con google">
  <p>¿Tienes una cuenta? </p>
  <p><a href="#iniciarSesion">Iniciar Sesión</a></p>
</section>
</section>`;

// const errorMessage = document.querySelector('.errorMessagelogin');
// errorMessage.innerHTML = '';

export const vistaRegistro = () => {
  const buttonIngresar = document.getElementById('registro');
  buttonIngresar.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Usuario creado');
    const nombres = document.querySelector('#nombres').value;
    const email = document.querySelector('#correo').value;
    const contraseña = document.querySelector('#contraseña').value;
    registro(nombres, email, contraseña);
  });
  const buttonGoogle = document.getElementById('google');
  buttonGoogle.addEventListener('click', () => {
    google();
  });
};
