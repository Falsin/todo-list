import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBrVYU1UEq5y4o_J92AjeMNsit2JcCfLVk",
  authDomain: "todo-list-7a1cc.firebaseapp.com",
  projectId: "todo-list-7a1cc",
  storageBucket: "todo-list-7a1cc.appspot.com",
  messagingSenderId: "700143190132",
  appId: "1:700143190132:web:bb5acebe6d0cc62818d121",
  measurementId: "G-V1BDKLJW3N"
};

firebase.initializeApp(firebaseConfig);

FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
});