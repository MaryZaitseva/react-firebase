import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyCutG66aCHEo-UZHHc8BJAQAV12M8IcWEc",
  authDomain: "my-project-43bfd.firebaseapp.com",
  databaseURL: "https://my-project-43bfd.firebaseio.com",
  projectId: "my-project-43bfd",
  storageBucket: "my-project-43bfd.appspot.com",
  messagingSenderId: "993357285773"
};
var fire = firebase.initializeApp(config);
export default fire;