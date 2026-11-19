const {
 getChannel
}
= require("../config/rabbitmq");

const Notification =
require("../models/Notification");

const startConsumer =
async () => {

 const channel =
 getChannel();

 await channel.assertQueue(
  "taskflow_notifications"
 );

 channel.consume(

  "taskflow_notifications",

  async (message) => {

   const data =
   JSON.parse(
     message.content.toString()
   );

   await Notification.create({

    mensaje:data.mensaje,

    tipo:data.tipo

   });

   channel.ack(message);

  }

 );

};

module.exports = {
 startConsumer
};