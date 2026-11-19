const express = require("express");

const router = express.Router();

const roleMiddleware =
require(
 "../middlewares/roleMiddlewares"
);

const authMiddleware =
  require("../middlewares/authMiddleware");

const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject
} = require("../controllers/projectController");

router.get(
  "/",
  authMiddleware,
  getProjects
);

router.get(
  "/:id",
  authMiddleware,
  getProject
);

router.post(
  "/",
  authMiddleware,

  roleMiddleware("Administrador", "Supervisor"),

  createProject
);

router.put(
  "/:id",
  authMiddleware,
  updateProject
);

router.delete(
  "/:id",
  authMiddleware,

  roleMiddleware("Administrador"),
  deleteProject
);

module.exports = router;
