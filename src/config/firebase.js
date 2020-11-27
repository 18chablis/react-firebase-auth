import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDImExXFCsyn1ApsbZz_DyhRUZV8KoLHU8",
    authDomain: "admin-auth-305fd.firebaseapp.com",
    databaseURL: "https://admin-auth-305fd.firebaseio.com",
    projectId: "admin-auth-305fd",
    storageBucket: "admin-auth-305fd.appspot.com",
    messagingSenderId: "53447755199",
    appId: "1:53447755199:web:67aa18f95684879e5b8d0a",
    measurementId: "G-E6WP9FC3HK"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;