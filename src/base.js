import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBkfdXKBdgE8A8dldikldV9AtbCYeBoGKI",
  authDomain: "recettes-app-50f4d.firebaseapp.com",
  databaseURL: "https://recettes-app-50f4d-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
