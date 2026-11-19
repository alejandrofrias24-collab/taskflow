const { DataTypes } = require("sequelize");
const sequelize = require("../config/sqlserver");

const user = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    unique: true
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false
  },

  rol: {
    type: DataTypes.ENUM(
      "Administrador",
      "Supervisor",
      "USUARIO"
    ),

    defaultValue: "USUARIO"
  }
});

module.exports = user;