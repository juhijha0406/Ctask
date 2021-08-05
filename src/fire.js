import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBjUlKrs7LfAAd_dR57-EYp_4Z0vmulU_Q",
  authDomain: "cvtask-84b2a.firebaseapp.com",
  projectId: "cvtask-84b2a",
  storageBucket: "cvtask-84b2a.appspot.com",
  messagingSenderId: "421080563583",
  appId: "1:421080563583:web:0e2d7e3ac0338ce619a44a"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;