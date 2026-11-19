import { useEffect,
         useState }
from "react";

import MainLayout
from "../components/layout/MainLayout";

import ProjectList
from "../components/projects/ProjectList";

import ProjectModal
from "../components/projects/ProjectModal";

import {

  getProjects,
  createProject,
  updateProject,
  deleteProject

}
from "../services/projectService";

export default function Projects() {

  const [projects,
         setProjects] =
  useState([]);

  const [selectedProject,
         setSelectedProject] =
  useState(null);

  const [openModal,
         setOpenModal] =
  useState(false);

  useEffect(() => {

    loadProjects();

  }, []);

  const loadProjects =
  async () => {

    const data =
    await getProjects();

    setProjects(data);

  };

  const handleCreate =
  async (project) => {

    await createProject(project);

    loadProjects();

    setOpenModal(false);

  };

  const handleUpdate =
  async (project) => {

    await updateProject(
      selectedProject.id,
      project
    );

    loadProjects();

    setOpenModal(false);

  };

  const handleDelete =
  async (id) => {

    await deleteProject(id);

    loadProjects();

  };

  return (

    <MainLayout>

      <div
        className="page-header"
      >

        <h1>
          Proyectos
        </h1>

        <button
          onClick={() => {

            setSelectedProject(
              null
            );

            setOpenModal(true);

          }}
        >
          Nuevo Proyecto
        </button>

      </div>

      <ProjectList

        projects={projects}

        onEdit={(project)=>{

          setSelectedProject(
            project
          );

          setOpenModal(true);

        }}

        onDelete={
          handleDelete
        }

      />

      <ProjectModal

        isOpen={openModal}

        project={
          selectedProject
        }

        onClose={() =>
          setOpenModal(false)
        }

        onSubmit={
          selectedProject
          ? handleUpdate
          : handleCreate
        }

      />

    </MainLayout>

  );
}