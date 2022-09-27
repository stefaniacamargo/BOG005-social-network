import {
  collection,
  addDoc,
  db,
  onSnapshot,
  orderBy,
  Timestamp,
  query,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "./fireBaseConfig.js";

export async function infComentario(
  comentario,
  fecha,
  user,
  userPhoto,
  likes,
  likesCounter,
) {
  try {
    const docRef = await addDoc(collection(db, "comentario"), {
      comentario,
      hora: Timestamp.fromDate(fecha),
      user,
      userPhoto,
      likes: [],
      likesCounter: 0,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// export const obtenerComentario = () => getDocs(collection(db, 'comentario'));

export const obtenerComentario = (callback) => {
  const q = query(collection(db, "comentario"), orderBy("hora", "desc"));
  onSnapshot(q, callback);
};

export const borrarComentario = (id) => deleteDoc(doc(db, "comentario", id));
export const editarComentario = (id) => getDoc(doc(db, "comentario", id));
export const actualizarComentario = (id, nuevoComentario) => updateDoc(doc(db, "comentario", id), nuevoComentario);

export const likeComentario = async (postId, userId) => {
  const editLike = await editarComentario(postId);
  const userLike = editLike.data().likes;
  const likeCount = editLike.data().likesCounter;
  if (userLike.includes(userId)) {
    await actualizarComentario(postId, {
      likes: arrayRemove(userId),
      likesCounter: likeCount - 1,
    });
  } else {
    await actualizarComentario(postId, {
      likes: arrayUnion(userId),
      likesCounter: likeCount + 1,
    });
  }
};
