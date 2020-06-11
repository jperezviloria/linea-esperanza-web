import React from 'react'
import {ContactoMensajeBase, InfoContacto} from "../css/style";

function MensajeContacto(){
    return (
        
        <ContactoMensajeBase>
            <InfoContacto>
                <p className= "titulo">CORREO ELECTRÓNICO</p>
                <img src="https://i.imgur.com/XfwSM2e.png" alt=""/> 
                <div className = "mail">
                <p className="informacion">maria.alejandra.perez.viloria@gmail.com</p>
                <a href= "mailto:maria.alejandra.perez.viloria@gmail.com">
                <button type= "submit">ESCRÍBEME</button>
                </a>
                </div>
                <div className = "mail">
                <p className="informacion">oxigenovenezuela@gmail.com</p>
                <a href= "mailto:oxigenovenezuela@gmail.com">
                <button type= "submit">ESCRÍBEME</button>
                </a>
                </div>
            </InfoContacto>
            <InfoContacto>
                <p className="titulo">NÚMERO TELEFÓNICO</p>
                <img src="https://i.imgur.com/XBXbiS1.png" alt=""/> 
                <div className = "numero">
                <p className="informacion">+58 414-8911483 </p>
                <a href= "https://wa.me/584148911483?text=Vengo%20por%20parte%20de%20la%20Linea%20esperanza%20!">
                <button type= "submit">ESCRIBE POR WHATSAPP</button>
                </a>
                </div>
                <div className = "numero">
                <p className="informacion">+58 412-3545565 </p>
                <a href= "https://wa.me/584123545565?text=Vengo%20por%20parte%20de%20la%20Linea%20esperanza%20!">
                <button type= "submit">ESCRIBE POR WHATSAPP</button>
                </a>
                </div>
            
            </InfoContacto>
        </ContactoMensajeBase>
    )
}

export default MensajeContacto;