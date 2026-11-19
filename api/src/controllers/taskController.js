const taskService =
require("../services/taskService");

const getTasks = async (req,res) => {

  try {

    const tasks =
      await taskService.getTasks();

    res.json(tasks);

  } catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};

const getTask = async (req,res) => {

  try {

    const task =
      await taskService.getTaskById(
        req.params.id
      );

    if(!task){
      return res.status(404).json({
        message:"No encontrada"
      });
    }

    res.json(task);

  } catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};

const createTask = async (req,res) => {

  try {

    const task =
      await taskService.createTask(
        req.body
      );

    res.status(201).json(task);

  } catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};

const updateTask = async (req,res) => {

  try {

    const task =
      await taskService.updateTask(
        req.params.id,
        req.body
      );

    res.json(task);

  } catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};

const deleteTask = async (req,res) => {

  try {

    const result =
      await taskService.deleteTask(
        req.params.id
      );

    res.json(result);

  } catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};

const changeStatus =
async (req,res) => {

 try{

  const task =
  await taskService.changeStatus(

   req.params.id,

   req.body.estado

  );

  res.json(task);

 }
 catch(error){

  res.status(500).json({

   message:error.message

  });

 }

};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  changeStatus
};
