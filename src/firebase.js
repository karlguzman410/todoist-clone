import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAJzYCfGkJc0ipMU2R36dUylpeqvt-Lf1Y",
    authDomain: "todoist-clone-ffe89.firebaseapp.com",
    databaseURL: "https://todoist-clone-ffe89-default-rtdb.firebaseio.com",
    projectId: "todoist-clone-ffe89",
    storageBucket: "todoist-clone-ffe89.appspot.com",
    messagingSenderId: "670371866566",
    appId: "1:670371866566:web:504be733ef1a1a7177f4c7"
})

export { firebaseConfig as firebase }