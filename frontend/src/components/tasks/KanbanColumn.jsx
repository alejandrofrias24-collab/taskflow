import KanbanTask from "./KanbanTask";

export default function KanbanColumn({
  title,
  tasks,
  id,
  onDropTask,
}) {
  const handleDrop = (event) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text/plain");
    if (taskId) {
      onDropTask(taskId, id);
    }
  };

  return (
    <div
      className="kanban-column"
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleDrop}
    >
      <div className="kanban-column-heading">
        <h3>{title}</h3>
        <span>{tasks.length}</span>
      </div>
      <div className="kanban-column-cards">
        {tasks.length === 0 ? (
          <p className="kanban-empty">Suelta una tarea aquí</p>
        ) : (
          tasks.map((task) => <KanbanTask key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}
