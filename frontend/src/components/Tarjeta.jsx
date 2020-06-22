import React from "react";
import {TarjetaPresentacion, BanderaUbicacion} from "../css/style";

function Tarjeta(props){
    return(
        <TarjetaPresentacion>
            <p className="nombre">{props.nombreEquipo}</p>
           <img  className="perfil" src={props.perfilEquipo} alt=""/> 
           <BanderaUbicacion>
            <p>{props.ubicacionEquipo}</p>
            <img  className="bandera"  src={props.banderaEquipo} alt=""/>
           </BanderaUbicacion>
            <p className="rol">{props.rolEquipo}</p>
        </TarjetaPresentacion>
    )
}


export default Tarjeta;