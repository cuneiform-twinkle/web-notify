//import { MessagingTopicManagementResponse } from "firebase-admin/lib/messaging/messaging-api";
// import firebaseMessaging from "../config/firebase.config";
// import tokenModel from "../models/token.model";
// import { Notification, NotificationResponse } from "../types/notification.type";
const firebaseMessaging = require("../config/firebase.config")
const tokenModel = require("../models/token.model")



// const sendAllNotificationService = async (
//   notification
// )=> {
//   try {
//     const tokens = await tokenModel.find();
//     const registrationTokens = tokens.map((token) => token.token);

//     if (registrationTokens.length === 0) {
//       throw new Error("No tokens found");
//     }

//     const message = {
//       notification: {
//         title: notification.title || "Notification Title",
//         body: notification.body || "Notification Body",
//       },
//       tokens: registrationTokens,
//     };

//     const response = await firebaseMessaging.sendMulticast(message);
//     return response;
//   } catch (error) {
//     throw new Error(error?.message || `Internal server error !`);
//   }
// };
const sendAllNotificationService = async (notification) => {
  try {
    const tokens = await tokenModel.find();
    const registrationTokens = tokens.map((token) => token.token);

    if (registrationTokens.length === 0) {
      throw new Error("No tokens found");
    }

    const messages = registrationTokens.map((token) => ({
      notification: {
        title: notification.title || "Notification Title",
        body: notification.body || "Notification Body",
      },
      token,
    }));
    const responses = await Promise.all(messages.map((message) => firebaseMessaging.send(message)));

    return responses;
  } catch (error) {
    throw new Error(error?.message || `Internal server error!`);
  }
};

// const sendNotificationToTokenService = async (
//   token,
//   notification
// ) => {
//   try {
//     const message = {
//       notification: {
//         title: notification.title || "Notification Title",
//         body: notification.body || "Notification Body",
//       },
//       token,
//     };

//     const response = await firebaseMessaging.send({
//       ...message,
//       webpush: {
//         notification: {
//           icon: "https://www.google.com/favicon.ico",
//           title: "Notification Title",
//           body: "Notification Body",
//         },
//       },
//     });

//     return response;
//   } catch (error) {
//     console.log(error)
//     throw new Error(error?.message || `Internal server error !`);
//   }
// };

const sendNotificationToTokenService = async (token, notification) => {
  try {
    const message = {
      notification: {
        title: notification.title || "Notification Title",
        body: notification.body || "Notification Body",
      },
      token,
    };

    const response = await firebaseMessaging.send(message);

    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error?.message || `Internal server error!`);
  }
};

module.exports = {
      sendAllNotificationService,
      sendNotificationToTokenService
}