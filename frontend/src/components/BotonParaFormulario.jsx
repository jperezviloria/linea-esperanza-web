import React from "react"
import {BotonParaFormularioEstilo} from "../css/style";

function BotonParaFormulario(props){
    return (
        <BotonParaFormularioEstilo>
        <a href = {props.enlace} >{props.boton}</a>
        </BotonParaFormularioEstilo>
    )
}

export default BotonParaFormulario;