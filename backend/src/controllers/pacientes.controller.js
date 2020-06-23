const nodemailer = require("nodemailer");

const pacientesCtrl = {};

const Paciente = require("../models/Paciente");

pacientesCtrl.getPacientes = async (req, res) => {
  const pacientes = await Paciente.find();
  res.json(pacientes);
};

pacientesCtrl.createPacientes = async (req, res) => {
  const {
    nombre,
    apellido,
    sexo,
    edad,
    email,
    codigoCelular,
    telefonoCelular,
    codigoFijo,
    telefonoFijo,
    pais,
    ciudad,
    formaContacto,
    motivoConsulta,
    descripcionEmocional,
    habitosPersonales,
    comentarioAdicional,
  } = req.body;
  const newPaciente = new Paciente({
    nombre,
    apellido,
    sexo,
    edad,
    email,
    codigoCelular,
    telefonoCelular,
    codigoFijo,
    telefonoFijo,
    pais,
    ciudad,
    formaContacto,
    motivoConsulta,
    descripcionEmocional,
    habitosPersonales,
    comentarioAdicional,
  });
  await newPaciente.save();
  console.log(newPaciente);
  res.json({ message: "Paciente agregado" });
};

pacientesCtrl.getPaciente = async (req, res) => {
  const paciente = await Paciente.findById(req.params.id);
  console.log(paciente);
  res.json({ message: "Paciente particular encontrado" });
};

pacientesCtrl.updatePaciente = async (req, res) => {
  const {
    nombre,
    apellido,
    sexo,
    edad,
    email,
    codigoCelular,
    telefonoCelular,
    codigoFijo,
    telefonoFijo,
    pais,
    ciudad,
    formaContacto,
    motivoConsulta,
    descripcionEmocional,
    habitosPersonales,
    comentarioAdicional,
  } = req.body;
  await Paciente.findByIdAndUpdate(req.params.id, {
    nombre,
    apellido,
    sexo,
    edad,
    email,
    codigoCelular,
    telefonoCelular,
    codigoFijo,
    telefonoFijo,
    pais,
    ciudad,
    formaContacto,
    motivoConsulta,
    descripcionEmocional,
    habitosPersonales,
    comentarioAdicional,
  });
  res.json({ message: "Paciente actualizado" });
};

pacientesCtrl.deletePaciente = async (req, res) => {
  await Paciente.findByIdAndDelete(req.params.id);
  res.json({ message: "Paciente eliminado" });
};

pacientesCtrl.sendMail = async (req, res) => {
  const {
    nombre,
    apellido,
    sexo,
    edad,
    email,
    codigoCelular,
    telefonoCelular,
    codigoFijo,
    telefonoFijo,
    pais,
    ciudad,
    formaContacto,
    motivoConsulta,
    descripcionEmocional,
    habitosPersonales,
    comentarioAdicional,
  } = req.body;

  contentHTML = `
    <div style="font-family: 'Lato', sans-serif;">
    <h1>Solicitud de atención desde ${pais}</h1>
    <h2>Datos personales</h2>
    <ul>
        <li>Nombre : ${nombre}</li><br>
        <li>Apellido : ${apellido}</li><br>
        <li>Sexo : ${sexo}</li><br>
        <li>Edad : ${edad}</li><br>
        <li>Email : ${email}</li><br>
        <li>Telefono Celular : ${codigoCelular}-${telefonoCelular}</li><br>
        <li>Telefono Fijo : ${codigoFijo}-${telefonoFijo}</li><br>
        <li>País : ${pais}</li><br>
        <li>Ciudad : ${ciudad}</li><br>
        <li>Forma de contacto : ${formaContacto}</li><br>
    </ul>
    <h2>Respuestas de preguntas</h2>
    <h3>¿Cual es el motivo de la consulta?</h3>
    <ul>
        <li>Respuesta : ${motivoConsulta}</li>
    </ul>
    <h3>¿Describe cómo te siente emocionalmente en este momento?</h3>
    <ul>
        <li>Respuesta : ${descripcionEmocional}</li>
    </ul>
    <h3>Mencione los campos importantes en los hábitos personales que has notado recientemente</h3>
    <ul>
        <li>Respuesta : ${habitosPersonales}</li>
    </ul>
    <h3>¿Quiere agregar algún comentario adicional?</h3>
    <ul>
        <li>Respuesta : ${comentarioAdicional}</li>
    </ul>
    </div>
        
    `;

  const transporter = nodemailer.createTransport({
    host: "SERVICIO",
    port: "PUERTO",
    auth: {
      user: "USUARIO", // generated ethereal user
      pass: "CONTRASENIA", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: "DESDEMAILER",
    to: "HASTAMAILER",
    subject: "Formulario de paciente - Linea de la Esperanza",
    html: contentHTML,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error en el envio");
    } else {
      console.log("Email enviado");
    }
  });

  res.send("received");
};

module.exports = pacientesCtrl;
