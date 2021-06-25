import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAXfg8eJf9AAfpJAcF7mLagcLDznglmwt4",
    authDomain: "slack-clone-6bb76.firebaseapp.com",
    projectId: "slack-clone-6bb76",
    storageBucket: "slack-clone-6bb76.appspot.com",
    messagingSenderId: "875545645937",
    appId: "1:875545645937:web:3dc1b22b2291715e08dcd0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };