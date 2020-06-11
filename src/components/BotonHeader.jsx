import React from "react";
import {BaseBoton, EnlaceBaseBoton} from "../css/style";

function Boton(props){
    return(

        <EnlaceBaseBoton href={props.link} ><BaseBoton>{props.enlace}</BaseBoton></EnlaceBaseBoton>
        
    )
}


export default Boton;