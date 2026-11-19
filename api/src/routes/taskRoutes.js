const express =
require("express");

const router =
express.Router();

const authMiddleware =
require("../middlewares/authMiddleware");

const {
 getTasks,
 getTask,
 createTask,
 updateTask,
 deleteTask,
 changeStatus
} =
require("../controllers/taskController");

router.get(
 "/",
 authMiddleware,
 getTasks
);

router.get(
 "/:id",
 authMiddleware,
 getTask
);

router.post(
 "/",
 authMiddleware,
 createTask
);

router.put(
 "/:id",
 authMiddleware,
 updateTask
);

router.delete(
 "/:id",
 authMiddleware,
 deleteTask
);

router.patch(
 "/:id/status",
 authMiddleware,
 changeStatus
);


module.exports = router;
