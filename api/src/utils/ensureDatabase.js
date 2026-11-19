const { Sequelize } = require("sequelize");

const ensureDatabase = async () => {
  const database = process.env.SQL_DATABASE;
  if (!database || !/^[A-Za-z0-9_]+$/.test(database)) {
    throw new Error(
      "SQL_DATABASE debe contener solo letras, números y guion bajo."
    );
  }

  const options = {
    host: process.env.SQL_SERVER,
    port: Number(process.env.SQL_PORT || 1433),
    dialect: "mssql",
    dialectOptions: {
      options: {
        trustServerCertificate: true,
        encrypt: false,
      },
    },
    logging: false,
  };

  let lastError;
  for (let attempt = 1; attempt <= 30; attempt += 1) {
    const adminConnection = new Sequelize(
      "master",
      process.env.SQL_USER,
      process.env.SQL_PASSWORD,
      options
    );

    try {
      await adminConnection.authenticate();
      await adminConnection.query(
        "IF DB_ID(N'" + database + "') IS NULL CREATE DATABASE [" + database + "]"
      );
      console.log("Base SQL Server " + database + " lista.");
      return;
    } catch (error) {
      lastError = error;
      if (attempt === 30) {
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, 3000));
    } finally {
      await adminConnection.close().catch(() => {});
    }
  }

  throw lastError;
};

module.exports = ensureDatabase;
