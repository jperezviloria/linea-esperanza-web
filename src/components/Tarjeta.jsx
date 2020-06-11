import React from "react";


import {TarjetaPresentacion, BanderaUbicacion} from "../css/style";

function Tarjeta(){
    return(
        <TarjetaPresentacion>
            <p className="nombre">Psic. Ma. Alejandra Pérez</p>
           <img  className="perfil" src="https://i.imgur.com/ic1pXvG.jpg" alt=""/> 
           <BanderaUbicacion>
            <p>Margarita, Venezuela</p>
            <img  className="bandera"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1200px-Flag_of_Venezuela.svg.png" alt=""/>
           </BanderaUbicacion>
           <p className="iglesia">Iglesia CENFOL Margarita</p>
        </TarjetaPresentacion>
    )
}


export default Tarjeta;