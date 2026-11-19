import KanbanColumn from "./KanbanColumn";
import { updateStatus } from "../../services/taskService";

export default function KanbanBoard({
  tasks,
  reload,
}) {
  const columns = [
    { id: "Pendiente", title: "Pendiente" },
    { id: "En Progreso", title: "En Progreso" },
    { id: "En Revisión", title: "En Revisión" },
    { id: "Completada", title: "Completadas" },
  ];

  const handleDrop = async (taskId, status) => {
    await updateStatus(taskId, status);
    await reload();
  };

  return (
    <div className="kanban-board">
      {columns.map((column) => (
        <KanbanColumn
          key={column.id}
          id={column.id}
          title={column.title}
          tasks={tasks.filter((task) => task.estado === column.id)}
          onDropTask={handleDrop}
        />
      ))}
    </div>
  );
}
