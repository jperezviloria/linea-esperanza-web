import React from "react";
import InvitarTarjeta from "./invitartarjeta";
import {InvitacionFondoIndex} from "../css/style";


 

function Invitacion(){

    return (
        <InvitacionFondoIndex>
        <InvitarTarjeta
        eslogan = "Psicólogos"
        imagen="https://i.imgur.com/G4Ru3im.png"
        boton = "VER PSICÓLOGOS"
        enlace = "/psicologos">
        </InvitarTarjeta>
        <InvitarTarjeta
        eslogan = "Contactos"
        imagen="https://i.imgur.com/Hg5tRij.png"
        boton = "CONTÁCTANOS"
        enlace = "/contacto" >   
        </InvitarTarjeta>
        </InvitacionFondoIndex>
        
        )

}

export default Invitacion;

