import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyB8nTki4VevL72diamnK-6IRYseuidTKUA",
  authDomain: "twitter-clone-f80fe.firebaseapp.com",
  databaseURL: "https://twitter-clone-f80fe.firebaseio.com",
  projectId: "twitter-clone-f80fe",
  storageBucket: "twitter-clone-f80fe.appspot.com",
  messagingSenderId: "88223738933",
  appId: "1:88223738933:web:f60eb978e517b3e17a557c",
  measurementId: "G-9682D6PPQP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;