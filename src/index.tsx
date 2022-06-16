import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import store from './store/index';
// import { initializeApp } from "firebase/app";

import { Provider } from 'react-redux';

// // Initialize Firebase
// initializeApp({
//   apiKey: "AIzaSyBi_U059geNqo0MhRQh1L8_6aBPtC5rhNw",
//   authDomain: "petproject-aa1ae.firebaseapp.com",
//   projectId: "petproject-aa1ae",
//   storageBucket: "petproject-aa1ae.appspot.com",
//   messagingSenderId: "506563736543",
//   appId: "1:506563736543:web:aafeaa62447f85c4024a6a",
//   measurementId: "G-TWF4FW8Z9T"
// });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
