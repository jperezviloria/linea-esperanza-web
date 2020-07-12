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
    <table border="1">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Sexo</th>
                <th>Edad</th>
                <th>Email</th>
                <th>Teléfono Celular</th>
                <th>Teléfono Fijo</th>
                <th>País</th>
                <th>Ciudad</th>
                <th>Forma de contacto</th>
                <th>¿Cual es el motivo de la consulta?</th>
                <th>¿Describe cómo te siente emocionalmente en este momento?</th>
                <th>Mencione los campos importantes en los hábitos personales que has notado recientemente</th>
                <th>¿Quiere agregar algún comentario adicional?</th>
            </tr>
        </thead>
        <tr>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${sexo}</td>
            <td>${edad}</td>
            <td>${email}</td>
            <td>${codigoCelular}-${telefonoCelular}</td>
            <td>${codigoFijo}-${telefonoFijo}</td>
            <td>${pais}</td>
            <td>${ciudad}</td>
            <td>${formaContacto}</td>
            <td>${motivoConsulta}</td>
            <td>${descripcionEmocional}</td>
            <td>${habitosPersonales}</td>
            <td>${comentarioAdicional}</td>
        </tr>
    </table>
    </div>
    `;

  const transporter = nodemailer.createTransport({
    host: "SERVICE",
    port: PORT,
    auth: {
      user: "USER_MAIL", // generated ethereal user
      pass: "PASSWORD", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: "MAIL_FROM",
    to: "MAIL_TO",
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
