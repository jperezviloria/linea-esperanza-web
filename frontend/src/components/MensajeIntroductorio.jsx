import React from "react";

import {TextoIntroductorio, BotonFormulario} from "../css/style";

function Mensaje(){
    return (

        <TextoIntroductorio>
            <p>La Línea Esperanza es un programa de atención On Line que es llevado por los Psicólogos Cristianos de Iberoamérica donde se brinda apoyo en el reestablecimiento de la Salud Mental a aquellas personas que necesitan orientación y acompañamiento emocional.</p>
            <p>Esta iniciativa cuenta con el apoyo de la Fundación Oxígeno y diversas organizaciones sociales vinculadas al cuidado de la Salud Mental.</p>
            
            <BotonFormulario> <a href = "/formulario">SOLICITA ATENCIÓN PSICOLÓGICA Y CONFIDENCIAL</a></BotonFormulario>
        </TextoIntroductorio>
    )
}

export default Mensaje;