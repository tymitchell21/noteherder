// Initialize Firebase
import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDCGvWmUdH2TbUqh03J-oL0mlpQAIZ_qNw",
    authDomain: "noteherder-67dfc.firebaseapp.com",
    databaseURL: "https://noteherder-67dfc.firebaseio.com",
    projectId: "noteherder-67dfc",
    storageBucket: "noteherder-67dfc.appspot.com",
    messagingSenderId: "809236113518"
  })

  const db = firebase.database(app)

  export default Rebase.createClass(db)