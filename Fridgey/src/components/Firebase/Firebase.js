import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyADrQ2sFwflU9P0xtiJJkJvVcigN1swdG",
  authDomain: "Fridgey.firebaseapp.com",
  databaseURL: "https://Fridgey.firebaseio.com",
  storageBucket: "<Fridgey.appspot.com>"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
