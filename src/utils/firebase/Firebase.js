import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './FirebaseConfig';
import { showMessage, showSuccess } from '../Toasts';

import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  updateProfile,
} from 'firebase/auth';

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signUp = async (email, password, username) => {
  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )

  updateProfile(auth.currentUser, {
    displayName: username
  })

  await sendEmailVerification(credentials.user, {
    url: `${process.env.REACT_APP_URL}/`,
  });

  showMessage(`A verification email was sent to ${email}`);

  return credentials;
};

export const resetPassword = async email => {
  await sendPasswordResetEmail(auth, email, {
    url: `${process.env.REACT_APP_URL}/login`,
  });
  showSuccess(`A password recovery email was sent to ${email}`);
};

const providerGoogle = new GoogleAuthProvider();

export const signInGoogle = () => signInWithPopup(auth, providerGoogle);

export const logOut = async () => {
  await signOut(auth)
}