import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDN9o9--J6QWSowCXBChgghgJEeQNpVCrw",
  authDomain: "yuji-checktest.firebaseapp.com",
  projectId: "yuji-checktest",
  storageBucket: "yuji-checktest.appspot.com",
  messagingSenderId: "52407913484",
  appId: "1:52407913484:web:a9d03154e8fca19a723229",
  measurementId: "G-70JL9E6379",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
