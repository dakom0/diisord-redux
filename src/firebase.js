import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBRZ1yKD05AfPiZDRuYEmkMjIKB_18AZqU",
    authDomain: "diiscord-39be4.firebaseapp.com",
    databaseURL: "https://diiscord-39be4.firebaseio.com",
    projectId: "diiscord-39be4",
    storageBucket: "diiscord-39be4.appspot.com",
    messagingSenderId: "164155124739",
    appId: "1:164155124739:web:6fad52587f6db2d230b236",
    measurementId: "G-KSVLBT3CJH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};
  export default db;