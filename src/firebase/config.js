import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {  
    apiKey: "AIzaSyDhISmxKA8CVWs1sT20yyZPilBcYTt0i_4",
    authDomain: "olx-clone-b2539.firebaseapp.com",
    projectId: "olx-clone-b2539",
    storageBucket: "olx-clone-b2539.appspot.com",
    messagingSenderId: "167454820680",
    appId: "1:167454820680:web:0009f6989760b6321d8b7d",
    measurementId: "G-XWMXB62E1C"
  };


export default  firebase.initializeApp(firebaseConfig)
  