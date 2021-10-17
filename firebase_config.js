import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDB_vc_H0s4lyuDXAUjxTN6qd2aUsiHkyo',
  authDomain: 'daneliean.firebaseapp.com',
  projectId: 'daneliean',
  storageBucket: 'daneliean.appspot.com',
  messagingSenderId: '840525492875',
  appId: '1:840525492875:web:1b271c5855a369de985a8e',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
let db = firebaseApp.firestore();
export { db };
