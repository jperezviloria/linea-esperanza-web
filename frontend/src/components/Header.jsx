import React from 'react';
import BotonHeader from "./BotonHeader";


import {HeaderBase} from "../css/style";

function Header(){
    return (
        <HeaderBase>
            <img src= "https://fotos.subefotos.com/a04e21cd0e1096bd1b6a63d970d097abo.png" alt=""/>
            <BotonHeader link = "/"  enlace = "Inicio"></BotonHeader>
            <BotonHeader link = "/psicologos"  enlace = "Psicólogos"></BotonHeader>
            <BotonHeader link = "/nosotros"  enlace = "Sobre nosotros"></BotonHeader>
            <BotonHeader link = "/contacto"  enlace = "Contá"></BotonHeader>
            
                
        </HeaderBase>

    )
}


export default Header;