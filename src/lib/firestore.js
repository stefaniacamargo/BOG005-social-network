import { coleccion, agregar, db, obtener } from './fireBaseConfi.js';

export async function infComentario(comentario) {
  try {
    const docRef = await agregar(coleccion(db, 'comentario'), {
      comentario,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
export async function obtenerComentario() {
  obtener(coleccion(db, 'comentario'));
}
