// importamos la funcion que vamos a testear
import { auth } from '../src/lib/auth.js';

jest.mock('../src/firebase/firebaseInit.js');

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
