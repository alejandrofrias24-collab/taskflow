const express = require("express");
const cors = require("cors");

const authRoutes =
require("./routes/authRoutes");

const taskRoutes =
require("./routes/taskRoutes");

const projectRoutes =
require("./routes/projectRoutes");

const userRoutes =
require("./routes/userRoutes");

const app = express();

const notificationRoutes =
require(
 "./routes/notificationRoutes"
);

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/tasks", taskRoutes);

app.use("/api/projects", projectRoutes);

app.use("/api/users", userRoutes);

app.use("/api/notifications", notificationRoutes);

app.use(require("./middlewares/errorMiddleware"));

module.exports = app;
