import { useState } from "react";

export default function ProjectForm({
  onSubmit,
  initialData
}) {

  const [formData,setFormData] =
  useState(
    initialData || {
      nombre:"",
      descripcion:"",
      estado:"Activo"
    }
  );

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]:
      e.target.value

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    onSubmit(formData);

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="project-form"
    >

      <input
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
      />

      <textarea
        name="descripcion"
        placeholder="Descripción"
        value={formData.descripcion}
        onChange={handleChange}
      />

      <select
        name="estado"
        value={formData.estado}
        onChange={handleChange}
      >
        <option>
          Activo
        </option>
        <option>
          Pausado
        </option>
        <option>
          Finalizado
        </option>
      </select>

      <button type="submit">

        Guardar Proyecto

      </button>

    </form>
  );
}