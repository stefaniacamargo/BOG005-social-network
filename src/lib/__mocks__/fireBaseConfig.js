export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve({ user: {} }));
export const signInWithEmailAndPassword = () => Promise.resolve({ user: {} });
export const GoogleAuthProvider = () => Promise.resolve({});
export const signInWithPopup = () => Promise.resolve({});
export const onAuthStateChanged = () => Promise.resolve({});
export const signOut = () => Promise.resolve({});
export const db = () => Promise.resolve({});
export const collection = () => Promise.resolve({});
export const addDoc = () => Promise.resolve({});
export const getDocs = () => Promise.resolve({});
export const getDoc = () => Promise.resolve({});
export const onSnapshot = () => Promise.resolve({});
export const doc = () => Promise.resolve({});
export const query = () => Promise.resolve({});
export const updateDoc = () => Promise.resolve({});
export const serverTimestamp = () => Promise.resolve({});
export const orderBy = () => Promise.resolve({});
export const deleteDoc = () => Promise.resolve({});
export const provider = () => Promise.resolve({});
export const arrayUnion = () => Promise.resolve({});
export const arrayRemove = () => Promise.resolve({});
export const getAuth = jest.fn(() => ({
  currentUser: {
    uid: 'currentUserIDMock',
  },
}));
