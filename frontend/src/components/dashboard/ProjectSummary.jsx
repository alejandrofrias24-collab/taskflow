export default function ProjectSummary() {

  const projects = [
    {
      id: 1,
      nombre: "TaskFlow",
      tareas: 25
    },
    {
      id: 2,
      nombre: "Inventario",
      tareas: 14
    },
    {
      id: 3,
      nombre: "E-Commerce",
      tareas: 32
    }
  ];

  return (
    <div className="project-summary">

      <h3>
        Resumen de proyectos
      </h3>

      {projects.map(project => (

        <div
          key={project.id}
          className="project-item"
        >

          <span>
            {project.nombre}
          </span>

          <strong>
            {project.tareas} tareas
          </strong>

        </div>

      ))}

    </div>
  );
}