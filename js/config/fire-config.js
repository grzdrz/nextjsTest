import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA3OM_jrRNcky94OeIKYtZpTM6XUcMlB-4",
  authDomain: "speedy-anthem-295701.firebaseapp.com",
  databaseURL: "https://speedy-anthem-295701.firebaseio.com",
  projectId: "speedy-anthem-295701",
  storageBucket: "speedy-anthem-295701.appspot.com",
  messagingSenderId: "127838038161",
  appId: "1:127838038161:web:43493d29b427eed036b730",
  measurementId: "G-M7NEM1RPV7"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}
const fire = firebase;
export default fire;