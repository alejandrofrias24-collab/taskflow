import TaskForm from "./TaskForm";

export default function TaskModal({

  isOpen,
  onClose,
  onSubmit,
  task

}) {

  if (!isOpen) return null;

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>Tarea</h2>

        <TaskForm
          initialData={task}
          onSubmit={onSubmit}
        />

        <button
          onClick={onClose}
        >
          Cerrar
        </button>

      </div>

    </div>

  );

}