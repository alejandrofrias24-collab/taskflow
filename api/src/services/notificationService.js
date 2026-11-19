const Notification =
require("../models/Notification");

const createNotification = async (data) => {
  return Notification.create(data);
};

const getNotifications =
async () => {

 return await Notification
 .find()
 .sort({fecha:-1});

};

const markAsRead =
async (id) => {

 return await Notification
 .findByIdAndUpdate(
   id,
   {leida:true},
   {new:true}
 );

};

module.exports = {

 createNotification,

 getNotifications,

 markAsRead

};
