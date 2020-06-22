import React from "react";
import Tarjeta from "./Tarjeta";
import BotonParaFormulario from "./BotonParaFormulario";
import DatosEquipo from "../DatosEquipoTarjeta";
import {PsicologosMostrarBase} from "../css/style";



function Psicologos(){
    return (

        <div>
          
        <PsicologosMostrarBase>
            {DatosEquipo.map(Tarjeta)}
        </PsicologosMostrarBase>
        <BotonParaFormulario enlace = "/formulario"  boton = "SOLICITA ATENCIÓN PSICOLÓGICA"></BotonParaFormulario>
        
        </div>
    )
}

export default Psicologos;