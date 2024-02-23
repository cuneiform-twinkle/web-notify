
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries



// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBNdza5nsdQPgRYvn210sFaBQXwBFkpFcA",
//   authDomain: "nodejs-notification-ec48f.firebaseapp.com",
//   projectId: "nodejs-notification-ec48f",
//   storageBucket: "nodejs-notification-ec48f.appspot.com",
//   messagingSenderId: "1017398587216",
//   appId: "1:1017398587216:web:9989f102439b3a63e64655",
//   measurementId: "G-SM23D32T1M"
// };




// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// // Function to handle permission request
// function requestNotificationPermission() {
//   Notification.requestPermission().then(permission => {
//     if (permission === 'granted') {
//       console.log('Notification permission granted');
//       subscribeForNotifications();
//     } else {
//       console.warn('Notification permission denied');
//     }
//   });
// }

// // Function to subscribe for notifications
// async function subscribeForNotifications() { 
//   const registration = await navigator.serviceWorker.ready;

//   if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
//     console.log('Service Worker is already activated. Subscribing for notifications.');

//     await messaging.getToken({
//       vapidKey: "BEHaAsnGt65wzlTg-9_9kcVY0up0pwsu5WJf_a-1P60TLXrqBD6ooMEr6NnMW-jj1Rui4jHkcLor5lr9be1y75A"
//     })
//       .then(token => {
//         console.log('Token gen:', token);
//         // Send the FCM token to your backend
//         fetch('/subscribe', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             token: token,
//           }),
//         })
//           .then(response => response.json())
//           .then(data => {
//             console.log('Subscription successful:', data);
//           })
//           .catch(error => {
//             console.error('Error subscribing:', error);
//           });
//       })
//       .catch(error => {
//         console.error('Error getting permission:', error);
//       });

//     // Add listener for incoming messages
//     await messaging.onMessage((payload) => {
//       console.log('Message received:', payload);
//       // Customize this part to display the notification
//       // For example, you can use the Notification API:
//       // https://developer.mozilla.org/en-US/docs/Web/API/notification
//       // const notification = new Notification(payload.notification.title, {
//       //   body: payload.notification.body,

//         const notification = new Notification(payload?.notification?.title, {
//     body: payload?.notification?.body,

//       });
//     });
//   } else {
//     console.log('Service Worker is not activated yet. Waiting for activation.');
//     registration.active.addEventListener('statechange', async (event) => {
//       if (event.target.state === 'activated') {
//         console.log('Service Worker activated. Subscribing for notifications.');
//         await subscribeForNotifications();
//       }
//     });
//   }
// }

// // Service worker registration
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/firebase-messaging-sw.js')
//     .then(registration => {
//       console.log('Service Worker registered with scope:', registration.scope);
//     })
//     .catch(error => {
//       console.error('Error registering Service Worker:', error);
//     });
// }

// // Check for service worker
// if ("serviceWorker" in navigator) {
//   // Display a button to request notification permission
//   const notificationButton = document.createElement('button');
//   notificationButton.textContent = 'Request Notifications';
//   notificationButton.addEventListener('click', requestNotificationPermission);
//   document.body.appendChild(notificationButton);
// }




////////////////brake//////////////
//TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import TokenApi from './api/tokenApi';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNdza5nsdQPgRYvn210sFaBQXwBFkpFcA",
  authDomain: "nodejs-notification-ec48f.firebaseapp.com",
  projectId: "nodejs-notification-ec48f",
  storageBucket: "nodejs-notification-ec48f.appspot.com",
  messagingSenderId: "1017398587216",
  appId: "1:1017398587216:web:9989f102439b3a63e64655",
  measurementId: "G-SM23D32T1M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();


let notificationAccess = false;
let fcmToken = '';


// const sendNotificationToMe = async(token) => {
//   if (notificationAccess) {
//     // Logic to send notification to the current user
//     console.log('Sending notification to the current user');
//      try {
//     const response = await fetch(`http://localhost:5000/api/fcm/send-notification-to-token/${token}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         token: token,
//       }),
//     });

//     if (response.ok) {
//       console.log('Token Stored in db successfully.');
//     } else {
//       console.error('Failed to store token in db.');
//     }
//   } catch (error) {
//     console.error('Error storing token in db:', error);
//   }
//   } else {
//     console.warn('Notification permission not granted');
//   }
// }

// function sendNotificationToEveryone() {
//   if (notificationAccess) {
//     // Logic to send notification to all users
//     console.log('Sending notification to everyone');
//   } else {
//     console.warn('Notification permission not granted');
//   }
// }
const storeToken = async (token) => {
  try {
    const response = await fetch('http://localhost:5000/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
      }),
    });

    if (response.ok) {
      console.log('Token Stored in db successfully.');
    } else {
      console.error('Failed to store token in db.');
    }
  } catch (error) {
    console.error('Error storing token in db:', error);
  }
};
const getFCMToken = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const token = await messaging.getToken({
        vapidKey: "BEHaAsnGt65wzlTg-9_9kcVY0up0pwsu5WJf_a-1P60TLXrqBD6ooMEr6NnMW-jj1Rui4jHkcLor5lr9be1y75A",
      });
      console.log(token);
      await storeToken(token);
      resolve(token);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
// Function to handle permission request
const requestNotificationPermission = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      notificationAccess = true;
      console.log('Notification permission granted.');
      subscribeForNotifications()
    } else {
      notificationAccess = false;
      console.log('Unable to get permission to notify.');
    }
  });
};

// Function to subscribe for notifications
async function subscribeForNotifications() { 
  const registration = await navigator.serviceWorker.ready;

  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    console.log('Service Worker is already activated. Subscribing for notifications.');

await getFCMToken()
  .then(async(token) => {
    // Handle the FCM token
    console.log('FCM Token:', token);
        if (notificationAccess) {
       // Logic to send notification to all users
     await fetch('http://localhost:5000/api/fcm/send-notification-to-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: token,
                    data: {
                    title: "Frontend Notification",
                    body: "Frontend Notification Body",
                },
          }),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Notification sent ho gya:', data);
          })
          .catch(error => {
            console.error('Notification sent nhi hua:', error);
          });
  } else {     
    console.warn('Notification permission not granted');  
      }
  })
  .catch((error) => {
    // Handle the error
    console.log(error);
    console.error('Error getting FCM token:', error);
  });
    // Add listener for incoming messages
    await messaging.onMessage((payload) => {
    console.log('Message received:', payload);
    const notification = new Notification(payload?.data?.title, {
    body: payload?.data?.body,
      });
    });
  } else {
    console.log('Service Worker is not activated yet. Waiting for activation.');
    registration.active.addEventListener('statechange', async (event) => {
      if (event.target.state === 'activated') {
        console.log('Service Worker activated. Subscribing for notifications.');
        await subscribeForNotifications();
      }
    });
  }
}
// Service worker registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js')
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
      console.error('Error registering Service Worker:', error);
    });
}

// Check for service worker and display a button to request notification permission
if ("serviceWorker" in navigator) {
  const notificationButton = document.createElement('button');
  notificationButton.textContent = 'Request Notifications';
  notificationButton.addEventListener('click', requestNotificationPermission);
  document.body.appendChild(notificationButton);
}
