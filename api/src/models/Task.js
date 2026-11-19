const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
      default: "",
    },
    prioridad: {
      type: String,
      enum: ["Baja", "Media", "Alta", "Urgente"],
      default: "Media",
    },
    estado: {
      type: String,
      enum: ["Pendiente", "En Progreso", "En Revisión", "Completada"],
      default: "Pendiente",
    },
    fechalimite: {
      type: Date,
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.models.Task || mongoose.model("Task", taskSchema);
