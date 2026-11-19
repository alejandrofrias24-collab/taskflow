const amqp = require("amqplib");

let channel;
let connection;

const connectRabbitMQ = async () => {
  try {
    connection = await amqp.connect(
      process.env.RABBITMQ_URL || "amqp://127.0.0.1"
    );

    channel = await connection.createChannel();
    connection.on("error", (error) => {
      channel = null;
      console.warn("Conexión RabbitMQ interrumpida:", error.message);
    });
    connection.on("close", () => {
      channel = null;
    });

    return channel;
  } catch (error) {
    channel = null;
    console.warn(
      "RabbitMQ no está disponible; las notificaciones estarán desactivadas:",
      error.message
    );
    return null;
  }
};

const getChannel = () => channel;

module.exports = {
  connectRabbitMQ,
  getChannel
};
