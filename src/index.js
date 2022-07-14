import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { initializeApp } from "firebase/app";
import App from "./App";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyDrH8GlG0eWH3DHBuswq4dbDEzRSqOk1lA",
  authDomain: "ipod-cb71d.firebaseapp.com",
  projectId: "ipod-cb71d",
  storageBucket: "ipod-cb71d.appspot.com",
  messagingSenderId: "586027883205",
  appId: "1:586027883205:web:369946f8a82511b035eeac"
};

firebase.initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
