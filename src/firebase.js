import firebase from 'firebase' //esto lo pongo yo

const firebaseConfig = {
    apiKey: "AIzaSyDiXjkXdp0JbFVXzir6mtyqMkqQkKKHcFQ",
    authDomain: "messenger-f6307.firebaseapp.com",
    databaseURL: "https://messenger-f6307.firebaseio.com",
    projectId: "messenger-f6307",
    storageBucket: "messenger-f6307.appspot.com",
    messagingSenderId: "953061372957",
    appId: "1:953061372957:web:c78c37c17c6135c63082f4",
    measurementId: "G-5GTMJM4NLB"
}; // esto me lo da el mismo firebase, solo agrego 

// y estas 3 lineas y ya , esas 3 lineas son iguales en cualquier proyecto, solo cambias lo que te de firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db