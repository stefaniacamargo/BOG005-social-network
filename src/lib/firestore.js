import {
  collection, addDoc, db, onSnapshot, orderBy, Timestamp, query, deleteDoc, doc,
} from './fireBaseConfi.js';

// eslint-disable-next-line import/no-mutable-exports
// export let dato = [];;

export async function infComentario(comentario, fecha) {
  try {
    const docRef = await addDoc(collection(db, 'comentario'), {
      comentario,
      hora: Timestamp.fromDate(fecha),
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// export const obtenerComentario = () => getDocs(collection(db, 'comentario'));

export const obtenerComentario = (callback) => {
  const q = query(collection(db, 'comentario'), orderBy('hora', 'desc'));
  onSnapshot(q, callback);
};

export const borrarComentario = (id) => deleteDoc(doc(db, 'comentario', id));
