const mongoose = requiere("mongoose");

const usuarioSchema = new mongoose.Schema({
    correo: { type: String, requiered: true, unique: true },
    clave: { type: String, requiered: true }
});

module.exports = mongoose.model("Usuario", usuarioSchema);