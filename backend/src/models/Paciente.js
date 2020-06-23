const {Schema, model} = require("mongoose");

const pacienteSchema = new Schema({
    nombre: String,
    apellido: String,
    sexo: String,
    edad: Number,
    email: String,
    codCelular: Number,
    telefonoCelular: Number,
    codFijo: Number,
    telefonoFijo: Number,
    pais: String,
    ciudad: String,
    formaContacto: String,
    motivoConsulta: String,
    descripcionEmocional: String,
    habitosPersonales: String,
    comentarioAdicional: String
});

module.exports = model("Paciente", pacienteSchema);


