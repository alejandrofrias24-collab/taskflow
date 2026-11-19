import ProjectCard
from "./ProjectCard";

export default function ProjectList({

  projects,
  onEdit,
  onDelete

}) {

  return (

    <div className="projects-grid">

      {
        projects.map(project => (

          <ProjectCard

            key={project.id}

            project={project}

            onEdit={onEdit}

            onDelete={onDelete}

          />

        ))
      }

    </div>

  );
}