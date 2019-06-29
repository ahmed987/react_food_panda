import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDy8Bipg2MIu3aKxm_-yQg-91y94q8kai8",
  authDomain: "react-firebase-ddf57.firebaseapp.com",
  databaseURL: "https://react-firebase-ddf57.firebaseio.com",
  projectId: "react-firebase-ddf57",
  storageBucket: "",
  messagingSenderId: "129446866989",
  appId: "1:129446866989:web:a6b48d055266d9a9"
}; 
firebase.initializeApp(firebaseConfig);

export default firebase;  