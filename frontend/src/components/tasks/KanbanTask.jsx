export default function KanbanTask({ task }) {
  const priorityClass =
    "priority-" + (task.prioridad || "media").toLowerCase();
  const deadline = task.fechalimite
    ? new Intl.DateTimeFormat("es", {
        day: "numeric",
        month: "short",
      }).format(new Date(task.fechalimite))
    : null;
  const shortId = String(task.id || "").slice(-5).toUpperCase();

  return (
    <div
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData("text/plain", String(task.id));
        event.dataTransfer.effectAllowed = "move";
      }}
      className="kanban-task"
      aria-label={"Arrastrar tarea " + task.titulo}
    >
      <div className="task-card-topline">
        <span className={"task-priority " + priorityClass}>
          {task.prioridad || "Media"}
        </span>
        {shortId && <span className="task-short-id">#{shortId}</span>}
      </div>
      <h4>{task.titulo}</h4>
      {task.descripcion && <p>{task.descripcion}</p>}
      {deadline && <div className="task-deadline">Vence {deadline}</div>}
    </div>
  );
}
