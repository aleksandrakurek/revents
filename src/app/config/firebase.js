import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZTPUKf4H7lEswfbR1V40l72a_6oexvyY",
  authDomain: "revents-215119.firebaseapp.com",
  databaseURL: "https://revents-215119.firebaseio.com",
  projectId: "revents-215119",
  storageBucket: "revents-215119.appspot.com",
  messagingSenderId: "435978115680"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;
