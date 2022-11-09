
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCx-G1S5FRozZF2PQgc4VxLMRudzHrLIgs",
  authDomain: "twitter-clone-825b5.firebaseapp.com",
  projectId: "twitter-clone-825b5",
  storageBucket: "twitter-clone-825b5.appspot.com",
  messagingSenderId: "520556387417",
  appId: "1:520556387417:web:e94b55cbf3dbbea53c6548",
  measurementId: "G-WGLW25P0C3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db