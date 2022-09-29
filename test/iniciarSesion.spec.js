import { vistaIniciar, iniciarContenido } from '../src/lib/iniciarSesion.js';

jest.mock('../src/lib/fireBaseConfig.js');
jest.mock('../src/lib/auth.js');

describe('testing funcion vistaIniciar', () => {
  beforeAll(() => {
    document.body.innerHTML = '<main id="root"></main>';
  });

  beforeEach(() => {
    document.getElementById('root').innerHTML = iniciarContenido;
  });

  it('debe mostrar correctamente vista iniciarSesion', () => {
    //expect(document.body.innerHTML).toMatchSnapshot();
    expect(document.getElementById('iniciarSesion')).toBeTruthy();
  });

  it('debe mostrar error "❌Contraseña incorrecta"', (done) => {
    vistaIniciar();
    expect(document.querySelector('.errorMessagelogin').innerHTML).toBe("");
    document.getElementById('iniciarSesion').click();
    setTimeout(() => {
      expect(document.querySelector('.errorMessagelogin').innerHTML).toBe(
        '❌Contraseña incorrecta',
      );
      done();
    }, 1000);
  });

  it('debe mostrar error "⚠️ Usuario no encontrado, ¡por favor registrate!"', (done) => {
    vistaIniciar();
    expect(document.querySelector('.errorMessagelogin').innerHTML).toBe("");

    document.querySelector('#loginCorreo').value = 'messi';

    document.getElementById('iniciarSesion').click();
    setTimeout(() => {
      expect(document.querySelector('.errorMessagelogin').innerHTML).toBe(
        '⚠️ Usuario no encontrado, ¡por favor registrate!',
      );
      done();
    }, 1000);
  });
});
