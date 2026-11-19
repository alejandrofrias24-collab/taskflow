const Task = require("../models/Task");
const notificationService = require("./notificationService");

const getTasks = () => Task.find().sort({ createdAt: -1 });
const getTaskById = (id) => Task.findById(id);

const createTask = async (data) => {
  const task = await Task.create(data);
  await notificationService.createNotification({
    mensaje: "Se ha creado una nueva tarea: " + task.titulo,
    tipo: "success",
  });
  return task;
};

const updateTask = async (id, data) => {
  const task = await Task.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    throw new Error("Tarea no encontrada");
  }
  await notificationService.createNotification({
    mensaje: "Se ha actualizado la tarea: " + task.titulo,
    tipo: "info",
  });
  return task;
};

const deleteTask = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  if (!task) {
    throw new Error("Tarea no encontrada");
  }
  return { message: "Tarea eliminada" };
};

const changeStatus = async (id, estado) => {
  const task = await Task.findByIdAndUpdate(
    id,
    { estado },
    { new: true, runValidators: true }
  );
  if (!task) {
    throw new Error("Tarea no encontrada");
  }
  return task;
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  changeStatus,
};
