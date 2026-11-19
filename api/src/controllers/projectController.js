const projectService =
  require("../services/projectService");

const getProjects = async (req, res) => {
  try {
    const projects =
      await projectService.getAllProjects();

    res.json(projects);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getProject = async (req, res) => {
  try {

    const project =
      await projectService.getProjectById(
        req.params.id
      );

    if (!project) {
      return res.status(404).json({
        message: "Proyecto no encontrado"
      });
    }

    res.json(project);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const createProject = async (req, res) => {
  try {

    const project =
      await projectService.createProject(
        {
          ...req.body,
          userId: req.user.id,
        }
      );

    res.status(201).json(project);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const updateProject = async (req, res) => {
  try {

    const project =
      await projectService.updateProject(
        req.params.id,
        req.body
      );

    res.json(project);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const deleteProject = async (req, res) => {
  try {

    const result =
      await projectService.deleteProject(
        req.params.id
      );

    res.json(result);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject
};
