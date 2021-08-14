import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import firebase from "firebase/app";



//-----------------FIREBASE-------------
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC6GZD3wd5akfRZXErEt232fg9eu3uah8Q",
    authDomain: "vue-ecommerce-9da31.firebaseapp.com",
    databaseURL: "https://vue-ecommerce-9da31-default-rtdb.firebaseio.com",
    projectId: "vue-ecommerce-9da31",
    storageBucket: "vue-ecommerce-9da31.appspot.com",
    messagingSenderId: "155506451435",
    appId: "1:155506451435:web:025673ec33541568816fae",
    measurementId: "G-7HDDMBB683"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

createApp(App).use(router).mount('#app')
