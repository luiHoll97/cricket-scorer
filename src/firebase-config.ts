//import { firebaseConfig } from './firebase-config';
import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';

const config = {
    apiKey: "AIzaSyAgUtcBNk8q970JXELihXAN7SeS05hi7mU",
    authDomain: "cricket-scorer-92eb4.firebaseapp.com",
    projectId: "cricket-scorer-92eb4",
    storageBucket: "cricket-scorer-92eb4.appspot.com",
    messagingSenderId: "802304691906",
    appId: "1:802304691906:web:c9d960169f5ab8004f755b",
};

export function getFirebaseConfig() {
    if (!config.apiKey) {
        throw new Error('Firebase API key is missing');
    }
    else return config;
}
