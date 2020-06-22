import React from "react";
import {InvitacionTarjetaIndex} from "../css/style";
 

function Invitacion(props){

    return (

        <InvitacionTarjetaIndex>
            <p>{props.eslogan}</p>
            <img src={props.imagen} alt=""/>
           <a href = {props.enlace} >{props.boton}</a>
        </InvitacionTarjetaIndex>
        
        )

}

export default Invitacion;

