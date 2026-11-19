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
      <h2>{title}</h2>
      {tasks.map((task) => (
        <KanbanTask key={task.id} task={task} />
      ))}
    </div>
  );
}
