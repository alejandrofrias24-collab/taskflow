import { useState } from "react";

export default function TaskForm({
  onSubmit,
  initialData
}) {

  const [formData,setFormData] =
  useState(
    initialData || {
      titulo:"",
      descripcion:"",
      prioridad:"Media",
      estado:"Pendiente"
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
      className="task-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        name="titulo"
        placeholder="Título"
        value={formData.titulo}
        onChange={handleChange}
      />

      <textarea
        name="descripcion"
        placeholder="Descripción"
        value={formData.descripcion}
        onChange={handleChange}
      />

      <select
        name="prioridad"
        value={formData.prioridad}
        onChange={handleChange}
      >
        <option>Baja</option>
        <option>Media</option>
        <option>Alta</option>
        <option>Urgente</option>
      </select>

      <select
        name="estado"
        value={formData.estado}
        onChange={handleChange}
      >
        <option>Pendiente</option>
        <option>En Progreso</option>
        <option>En Revisión</option>
        <option>Completada</option>
      </select>

      <button type="submit">
        Guardar
      </button>

    </form>

  );

}
