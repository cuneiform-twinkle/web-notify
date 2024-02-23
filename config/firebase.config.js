// // import config from '.';
// // import firebaseAdmin from 'firebase-admin';
// // const config = require('.');
// // const firebaseAdmin = require('firebase-admin');


// // firebaseAdmin.initializeApp({
// //   credential: firebaseAdmin.credential.cert({
// //     projectId: config.FIREBASE_PROJECT_ID,
// //     clientEmail: config.FIREBASE_CLIENT_EMAIL,
// //     privateKey: config.FIREBASE_PRIVATE_KEY,
// //   }),
// // });

// // const firebaseMessaging = firebaseAdmin.messaging(firebaseAdmin.app());

// // // export default firebaseMessaging;

// // module.exports={
// //   firebaseMessaging
// // }



// // firebase.config.js
// // import config from '.';
// // import firebaseAdmin from 'firebase-admin';
// const config = require('.');
// const firebaseAdmin = require('firebase-admin');

// // const serviceAccount = require('./path/to/your/serviceAccountKey.json');

// // admin.initializeApp({
// //   credential: admin.credential.cert(serviceAccount),
// //   // Add other configurations as needed
// // });
// firebaseAdmin.initializeApp({
//   credential: firebaseAdmin.credential.cert({
//     projectId: config.FIREBASE_PROJECT_ID,
//     clientEmail: config.FIREBASE_CLIENT_EMAIL,
//     privateKey: config.FIREBASE_PRIVATE_KEY,
//   }),
// });

// const firebaseMessaging = firebaseAdmin.messaging(firebaseAdmin.app());

// // const messaging = admin.messaging();

// module.exports = {
//   send: firebaseMessaging.send,
//   // Add other functions or configurations you need
// };
