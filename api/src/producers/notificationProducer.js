const Notification = require("../models/Notification");

const sendNotification = (message) => Notification.create(message);

module.exports = {
  sendNotification
};
