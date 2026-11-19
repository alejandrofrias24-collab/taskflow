require("dotenv").config();

const ensureDatabase = require("./utils/ensureDatabase");
const connectMongo = require("./config/mongodb");

const PORT = Number(process.env.PORT || 3000);

async function startServer() {
  await ensureDatabase();

  const sequelize = require("./config/sqlserver");
  require("./models");

  await sequelize.authenticate();
  await sequelize.sync();
  console.log("SQL Server conectado (solo usuarios).");

  await connectMongo();
  console.log("MongoDB conectado (proyectos, tareas y notificaciones).");

  const app = require("./app");
  app.listen(PORT, "0.0.0.0", () => {
    console.log("Servidor ejecutándose en puerto " + PORT);
  });
}

startServer().catch((error) => {
  console.error("No se pudo iniciar TaskFlow API:", error);
  process.exitCode = 1;
});
