import firebase from 'firebase/compat/app'

const firebaseDB = firebase.initializeApp({
  apiKey: "AIzaSyBjQtcsJXKzE0yu_qJug6Eg3k5MVumxVt0",
  authDomain: "practice-project-414b2.firebaseapp.com"
})

export const firebaseAuth = firebaseDB.auth();