import {
  collection, addDoc, getDocs, db, doc, onSnapshot,
} from './fireBaseConfi.js';

// eslint-disable-next-line import/no-mutable-exports
// export let dato = [];

export async function infComentario(comentario) {
  try {
    const docRef = await addDoc(collection(db, 'comentario'), {
      comentario,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export const obtenerComentario = () => getDocs(collection(db, 'comentario'));
