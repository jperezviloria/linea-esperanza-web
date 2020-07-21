import React from 'react';
import Mensaje from "./MensajeContacto";
import Aviso from "./Aviso";
import Barra from "./BarraOrganizaciones";
import Redes from './RedesSociales'

import {ContactoEstructura} from "../css/style";

function Contacto(){
    return(
        <div>
        <ContactoEstructura>
            <Mensaje/>
        </ContactoEstructura>
        <ContactoEstructura>
            <Redes/>
        </ContactoEstructura>
        <ContactoEstructura>
            <Aviso/>
        </ContactoEstructura>
        <ContactoEstructura>
            <Barra/>
        </ContactoEstructura>
       </div>
    )
}

export default Contacto;