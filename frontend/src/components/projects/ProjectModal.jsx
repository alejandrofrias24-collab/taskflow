import ProjectForm
from "./ProjectForm";

export default function ProjectModal({

  isOpen,
  onClose,
  onSubmit,
  project

}) {

  if(!isOpen) return null;

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>
          Proyecto
        </h2>

        <ProjectForm
          initialData={project}
          onSubmit={onSubmit}
        />

        <button
          onClick={onClose}
        >
          Cerrar
        </button>

      </div>

    </div>

  );

}