const {Router} = require('express');
const router = Router();

const {getPacientes, createPacientes, getPaciente, updatePaciente, deletePaciente, sendMail } = require("../controllers/pacientes.controller");

router.route('/')
    .get(getPacientes)
    .post(createPacientes);

router.route('/:id')
    .get(getPaciente)
    .put(updatePaciente)
    .delete(deletePaciente);

router.route('/mail')
    .post(sendMail);

    
module.exports = router;
