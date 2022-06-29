

import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAgsDWoDLEG0dQYQc9poBalcmI6GeSXnks",
    authDomain: "linkedin-clone-yt-8ab5f.firebaseapp.com",
    projectId: "linkedin-clone-yt-8ab5f",
    storageBucket: "linkedin-clone-yt-8ab5f.appspot.com",
    messagingSenderId: "1048025874239",
    appId: "1:1048025874239:web:a1a27a2021ecf4d4b49d8a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db, auth };