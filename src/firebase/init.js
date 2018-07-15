import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyAegq8omGFF5aZwFGx8VvhnIIOQGsTCG5I",
    authDomain: "vuefs-prod-36747.firebaseapp.com",
    databaseURL: "https://vuefs-prod-36747.firebaseio.com",
    projectId: "vuefs-prod-36747",
    storageBucket: "vuefs-prod-36747.appspot.com",
    messagingSenderId: "850166238486"
  };
 const firebaseApp = firebase.initializeApp(config);
 firebaseApp.firestore().settings({ timestampsInSnapshots: true })
 
 export default firebaseApp.firestore()
