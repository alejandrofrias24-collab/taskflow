const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    mensaje: { type: String, required: true },
    tipo: { type: String, default: "info" },
    leida: { type: Boolean, default: false },
    fecha: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports =
  mongoose.models.Notification ||
  mongoose.model("Notification", notificationSchema);
