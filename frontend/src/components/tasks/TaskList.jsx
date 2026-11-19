import TaskCard
from "./TaskCard";

export default function TaskList({

  tasks,
  onEdit,
  onDelete

}) {

  return (

    <div className="tasks-grid">

      {
        tasks.map(task => (

          <TaskCard
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />

        ))
      }

    </div>

  );
}