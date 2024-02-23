importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');


//  importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
//  importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');


const firebaseConfig = {
  apiKey: "AIzaSyBNdza5nsdQPgRYvn210sFaBQXwBFkpFcA",
  authDomain: "nodejs-notification-ec48f.firebaseapp.com",
  projectId: "nodejs-notification-ec48f",
  storageBucket: "nodejs-notification-ec48f.appspot.com",
  messagingSenderId: "1017398587216",
  appId: "1:1017398587216:web:9989f102439b3a63e64655",
  measurementId: "G-SM23D32T1M"
};


// const messaging = firebase.messaging();

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();



// onBackgroundMessage(messaging, (payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });
