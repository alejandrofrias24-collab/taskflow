import {
 useEffect,
 useState
}
from "react";

import MainLayout
from "../components/layout/MainLayout";

import TaskList
from "../components/tasks/TaskList";

import TaskModal
from "../components/tasks/TaskModal";

import KanbanBoard
from "../components/tasks/KanbanBoard";

import {

 getTasks,
 createTask,
 updateTask,
 deleteTask

}
from "../services/taskService";

export default function Tasks() {

 const [tasks,setTasks] =
 useState([]);

 const [selectedTask,
 setSelectedTask] =
 useState(null);

 const [openModal,
 setOpenModal] =
 useState(false);

 useEffect(() => {

   loadTasks();

 }, []);

 const loadTasks =
 async () => {

  const data =
  await getTasks();

  setTasks(data);

 };

 const handleCreate =
 async (task) => {

  await createTask(task);

  loadTasks();

  setOpenModal(false);

 };

 const handleUpdate =
 async (task) => {

  await updateTask(
    selectedTask.id,
    task
  );

  loadTasks();

  setOpenModal(false);

 };

 const handleDelete =
 async (id) => {

  await deleteTask(id);

  loadTasks();

 };

 return (

  <MainLayout>

   <div className="page-header">

     <h1>Tareas</h1>

     <button
       onClick={() => {

         setSelectedTask(
           null
         );

         setOpenModal(true);

       }}
     >
       Nueva Tarea
     </button>

   </div>

   <KanbanBoard
     tasks={tasks}
     reload={loadTasks}
   />

   <TaskList

    tasks={tasks}

    onEdit={(task)=>{

      setSelectedTask(task);

      setOpenModal(true);

    }}

    onDelete={
      handleDelete
    }

   />

   <TaskModal

    isOpen={openModal}

    task={selectedTask}

    onClose={() =>
      setOpenModal(false)
    }

    onSubmit={
      selectedTask
      ? handleUpdate
      : handleCreate
    }

   />

  </MainLayout>

 );

}
