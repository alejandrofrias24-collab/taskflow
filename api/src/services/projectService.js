const Project = require("../models/Project");

const getAllProjects = () => Project.find().sort({ createdAt: -1 });
const getProjectById = (id) => Project.findById(id);
const createProject = (data) => Project.create(data);

const updateProject = async (id, data) => {
  const project = await Project.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  if (!project) {
    throw new Error("Proyecto no encontrado");
  }
  return project;
};

const deleteProject = async (id) => {
  const project = await Project.findByIdAndDelete(id);
  if (!project) {
    throw new Error("Proyecto no encontrado");
  }
  return { message: "Proyecto eliminado correctamente" };
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
