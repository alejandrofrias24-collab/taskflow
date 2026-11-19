export default function KanbanTask({ task }) {
  return (
    <div
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData("text/plain", String(task.id));
        event.dataTransfer.effectAllowed = "move";
      }}
      className="kanban-task"
    >
      <h4>
        {task.titulo}
      </h4>

      <p>
        {task.descripcion}
      </p>

      <span>
        {task.prioridad}
      </span>
    </div>
  );
}
