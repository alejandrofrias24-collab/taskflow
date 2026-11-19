const User = require("../models/user");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const register = async (data) => {

  const exists = await User.findOne({
    where: { email: data.email }
  });

  if (exists) {
    throw new Error("El correo ya existe");
  }

   const hashedPassword =
    await bcrypt.hash(data.password, 10);

  const user = await User.create({
    nombre: data.nombre,
    email: data.email,
    password: hashedPassword
  });

    return {
      id: user.id,
      nombre: user.nombre,
      email: user.email,
      rol: user.rol,
    };
};
  
const login = async (email, password) => {

  const user = await User.findOne({
    where: { email }
  });

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  const validPassword =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!validPassword) {
    throw new Error("Contraseña incorrecta");
  }

  const token =
    generateToken(user);

  return {
    id: user.id,
    nombre: user.nombre,
    email: user.email,
    token
  };
};

module.exports = {
  register,
  login
};
