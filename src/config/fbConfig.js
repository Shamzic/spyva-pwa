import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDGfitZSMJFnqZQ_9kPhW7VVWW4Lr7YleA",
  authDomain: "spyva-b67a4.firebaseapp.com",
  databaseURL: "https://spyva-b67a4.firebaseio.com",
  projectId: "spyva-b67a4",
  storageBucket: "spyva-b67a4.appspot.com",
  messagingSenderId: "319982488702",
  appId: "1:319982488702:web:f785157f0e5de600"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;
