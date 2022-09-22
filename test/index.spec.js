// importamos la funcion que vamos a testear
import { registro } from '../src/lib/auth.js';
// import { cambioRuta } from '../src/main.js';
jest.mock('../src/lib/_mocks_/firebaseConfi.js');

// describe('Cambio de ruta', () => {
//   it('Cambio de ruta ', () => {
//     document.body.innerHTML = '<main id="root"></main>'
//     const resultado = cambioRuta('#registrate');
//     expect(resultado.querySelector('#nombre').innerHTML).toBe('Nombre y Apellido');
//   });
// });

describe('', () => {
  it('prueba registro incorrecto ', () => {
    const email = 'caggmail.com';
    const password = '12345678';

    expect.assertion(1);
    document.body.innerHTML = '<section id="container"></section>';
    const container = document.getElementById('container');
    registro(email, password);
    expect(container.textContent).toContain('❌ Correo electrónico no válido');
    done();
  });
});

