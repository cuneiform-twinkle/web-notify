const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const fcm = require('fcm-notification');
const path = require('path');
//const serviceAccount = require("./config/push-notificatioin-key.json");
const dbConfig = require("./config/db.js");
const routes = require("./routes");
const dotenv = require("dotenv");



dotenv.config();
const app = express();


app.use(express.static(path.join(__dirname, "client")));

app.use(express.json());
app.use(cors());
app.use('/api', routes);

app.get('/', async (req, res) => {
  res.send('OK');
});


// Initialize Firebase Admin SDK
 //const serviceAccount = require("./config/push-notificatioin-key.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });
// const certPath = admin.credential.cert(serviceAccount);
// var FCM = new fcm(certPath);


dbConfig(process.env.LOCAL_URL, process.env.DB_NAME);



// Subscribe Route
// app.post("/subscribe", (req, res) => {
// try { 
//     const { token } = req.body;
//     if (!token) {
//       return res.status(400).json({ error: 'FCM token is required' });
//     }
//     const message = {
//       notification: {
//         title: req.body.title,
//         body: req.body.body,
//       },
//       token: token,
//     };

//     // // Send the FCM message
//     // admin.messaging().send(message)
//     //   .then((response) => {
//     //     console.log('Successfully sent message: ', response);
//     //     res.status(200).json({ success: true, message: 'Notification sent successfully' });
//     //   })
//     //   .catch((error) => {
//     //     console.error('Error sending message: ', error);
//     //     res.status(500).json({ success: false, error: 'Failed to send notification' });
//     //   });

//     FCM.send(message, function(err, resp) {
//             if(err){
//                 throw err;
//             }else{
//                 console.log('Successfully sent notification');
//                 res.status(200).json({ success: true, message: 'Notification sent successfully' });
//             }
//         });

//   } catch (error) {
//     console.error('Unexpected error:', error);
//     res.status(500).json({ success: false, error: 'Internal server error' });
//   }
// });

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


