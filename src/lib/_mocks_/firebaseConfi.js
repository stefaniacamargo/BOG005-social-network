export const createUserWithEmailAndPassword = jest.fn((auth, email, password) => Promise.reject({ code: 'auth/invalid-email' }));
// devuelve un promise que es rechazada
// Promise.reject();
// retorna un objeto Promise que es resuelto con el valor dado.
// Promise.resolve({});

// funciones de firebase:
export const initializeApp = () => Promise.resolve({});
export const getAuth = () => Promise.resolve({});
export const signInWithEmailAndPassword = () => Promise.resolve({});
export const signInWithPopup = () => Promise.resolve({});
export const signOut = () => Promise.resolve({});
export const onAuthStateChanged = () => Promise.resolve({});
