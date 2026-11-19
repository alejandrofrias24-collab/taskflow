export default function TaskCard({
  task,
  onEdit,
  onDelete
}) {

  return (
    <div className="task-card">

      <h4>
        {task.titulo}
      </h4>

      <p>
        {task.descripcion}
      </p>

      <div className="task-info">

        <span>
          {task.prioridad}
        </span>

        <span>
          {task.estado}
        </span>

      </div>

      <div className="task-actions">

        <button
          onClick={() => onEdit(task)}
        >
          Editar
        </button>

        <button
          onClick={() =>
            onDelete(task.id)
          }
        >
          Eliminar
        </button>

      </div>

    </div>
  );
}