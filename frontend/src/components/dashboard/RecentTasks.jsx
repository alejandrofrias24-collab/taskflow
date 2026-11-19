export default function RecentTasks() {

  const tasks = [
    {
      id: 1,
      titulo: "Configurar JWT",
      estado: "Pendiente"
    },
    {
      id: 2,
      titulo: "Crear Dashboard",
      estado: "En Progreso"
    },
    {
      id: 3,
      titulo: "Diseñar Login",
      estado: "Completada"
    }
  ];

  return (
    <div className="recent-tasks">

      <h3>
        Últimas tareas
      </h3>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Tarea</th>
            <th>Estado</th>
          </tr>

        </thead>

        <tbody>

          {tasks.map(task => (

            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.titulo}</td>
              <td>{task.estado}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}