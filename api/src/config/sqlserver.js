require("dotenv").config();
const { Sequelize } = require("sequelize");

console.log("Conectando a:", process.env.SQL_SERVER, "BD:", process.env.SQL_DATABASE, "User:", process.env.SQL_USER);


const sequelize = new Sequelize(
  process.env.SQL_DATABASE,
  process.env.SQL_USER,
  process.env.SQL_PASSWORD,
  {
    host: process.env.SQL_SERVER || "127.0.0.1",
    port: process.env.SQL_PORT || 1433,
    dialect: "mssql",
    dialectOptions: {
      options: {
        trustServerCertificate: true,
        encrypt: false
      }
    },
    logging: false
  }
);

module.exports = sequelize;
