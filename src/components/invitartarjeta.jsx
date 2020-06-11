import React from "react";
import {InvitacionTarjetaIndex} from "../css/style";
 

function Invitacion(props){

    return (

        <InvitacionTarjetaIndex>
            <p>{props.eslogan}</p>
            <img src={props.imagen} alt=""/>
            <button type="submit">{props.boton}</button>
        </InvitacionTarjetaIndex>
        
        )

}

export default Invitacion;

