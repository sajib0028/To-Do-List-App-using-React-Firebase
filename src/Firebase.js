// const firebaseConfig = {
//     apiKey: "AIzaSyBF2d4wsuqERuXhSioshlalA7wTwK9fFGQ",
//     authDomain: "todo-app-e0cd9.firebaseapp.com",
//     projectId: "todo-app-e0cd9",
//     storageBucket: "todo-app-e0cd9.appspot.com",
//     messagingSenderId: "216062059948",
//     appId: "1:216062059948:web:a4dd4542357480b3f04609"
//   };

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBF2d4wsuqERuXhSioshlalA7wTwK9fFGQ",
    authDomain: "todo-app-e0cd9.firebaseapp.com",
    projectId: "todo-app-e0cd9",
    storageBucket: "todo-app-e0cd9.appspot.com",
    messagingSenderId: "216062059948",
    appId: "1:216062059948:web:a4dd4542357480b3f04609"
  

})

const db = firebaseApp.firestore();

export default  db ;