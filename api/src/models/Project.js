const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
      default: "",
    },
    estado: {
      type: String,
      enum: ["Activo", "Pausado", "Finalizado"],
      default: "Activo",
    },
    fechaInicio: Date,
    fechaFin: Date,
    userId: {
      type: Number,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
