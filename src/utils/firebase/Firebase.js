import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './Firebase';

import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from 'firebase/auth';

const app = initializeApp(firebaseConfig);