/* eslint-disable import/no-unresolved */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA1vxW_Amd5A7V3ukFkJTMF-K8lJx_Mpzw',
  authDomain: 'social-network-265f4.firebaseapp.com',
  projectId: 'social-network-265f4',
  storageBucket: 'social-network-265f4.appspot.com',
  messagingSenderId: '408442031374',
  appId: '1:408442031374:web:11619d5af7d560ac931b5f',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
