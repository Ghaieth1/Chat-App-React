import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'reactchat-74178.firebaseapp.com',
  projectId: 'reactchat-74178',
  storageBucket: 'reactchat-74178.appspot.com',
  messagingSenderId: '306702395868',
  appId: '1:306702395868:web:073053d3bb74cc13774719',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
