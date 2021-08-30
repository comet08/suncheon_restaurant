import firebase, { initializeApp } from '@firebase/app';
import firestore, { getFirestore } from '@firebase/firestore';
import '@firebase/auth';
import '@firebase/app';
import config from './fireconfig';

const app = initializeApp(config);

export const dbService = getFirestore();
