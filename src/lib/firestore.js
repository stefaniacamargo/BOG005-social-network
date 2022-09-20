import {
  collection, addDoc, db, onSnapshot, orderBy, Timestamp, query, deleteDoc, doc, getDoc,
  updateDoc,
} from './fireBaseConfi.js';

export async function infComentario(comentario, fecha, user, userPhoto) {
  try {
    const docRef = await addDoc(collection(db, 'comentario'), {
      comentario,
      hora: Timestamp.fromDate(fecha),
      user,
      userPhoto,
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
export const editarComentario = (id) => getDoc(doc(db, 'comentario', id));
export const actualizarComentario = (id, nuevoComentario) => updateDoc(doc(db, 'comentario', id), nuevoComentario);
