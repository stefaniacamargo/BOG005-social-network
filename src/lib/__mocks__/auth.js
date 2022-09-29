export const registro = jest.fn((email) => {
  console.log(email);
  if (email === '') {
    return Promise.reject({ code: 'auth/invalid-email' });
  } else if (email === 'messi') {
    return Promise.reject({ code: 'auth/weak-password' });
  }
});

export const iniciarSesion = jest.fn((email) => {
  console.log(email);
  if (email === '') {
    return Promise.reject({ code: 'auth/wrong-password' });
  } else if (email === 'messi') {
    return Promise.reject({ code: 'auth/user-not-found' });
  }
});
