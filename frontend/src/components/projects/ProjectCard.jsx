export default function ProjectCard({
  project,
  onEdit,
  onDelete
}) {

  return (
    <div className="project-card">

      <h3>
        {project.nombre}
      </h3>

      <p>
        {project.descripcion}
      </p>

      <span>
        Estado:
        {project.estado}
      </span>

      <div className="actions">

        <button
          className="edit-btn"
          onClick={() =>
            onEdit(project)}
        >
          Editar
        </button>

        <button
          className="delete-btn"
          onClick={() =>
            onDelete(project.id)}
        >
          Eliminar
        </button>

      </div>

    </div>
  );
}