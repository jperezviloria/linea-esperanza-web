import React from "react";

import Invitacion from "./invitarIndex"; 
import MensajeIntroductorio from "./MensajeIntroductorio";
import BarraOrganizacion from "./BarraOrganizaciones";
import Aviso from "./Aviso";


function Inicio(){
    return (
        <div>
            <MensajeIntroductorio />
            <Aviso />
            <BarraOrganizacion />
            <Invitacion />
        </div>
    )
}

export default Inicio;