import React from "react";
import {FormularioBase, FormularioTabla, FormularioAtributos, FormularioOpciones, Inputs, FormularioEnviar} from "../css/style";


function Formulario(){
    return (

        <FormularioBase >
            <h1>Formulario de solicitud de atención psicológica</h1>
            
            <FormularioTabla>

                <FormularioAtributos className = "columna-uno">
                <div>
                    <Inputs type="text" placeholder="Nombre" autoComplete="none" />
                </div>
                <div>
                    <Inputs type="text" autoComplete="none" placeholder="Apellido" />
                </div>
                <div>
                    <Inputs type="text" autoComplete="none" placeholder="Género" />
                </div>
                <div>
                    <Inputs type="text" autoComplete="none" placeholder="Edad" />
                </div>
              
                </FormularioAtributos>
                <FormularioAtributos className = "columna-dos">
                <div>
                    <Inputs type="text" autoComplete="none" placeholder="Email" />
                </div>
                <div>
                    <Inputs type="text" autoComplete="none" placeholder="Teléfono Celular" />
                </div>
                <div>
                    <Inputs type="text" autoComplete="none" placeholder="Teléfono Fijo" />
                </div>
                <div>
                    <Inputs type="text" autoComplete="none" placeholder="País y Ciudad" />
                </div>
                </FormularioAtributos>
                <div>
                    <h2>¿De qué forma quiere ser contactado?</h2>
                    <FormularioOpciones>
                        <option value = "0" >Preferencia</option>
                        <option value = "1" >Video conferencia</option>
                        <option value = "2" >Presencialmente</option>
                        <option value = "1" >Llamada telefonica</option>
                        <option value = "2" >Chat de Whatsapp</option>
                    </FormularioOpciones>
                </div>
                <div>
                    <h2>¿Motivo de la consulta?</h2>
                    <Inputs className='contar' type="text" autoComplete="none" placeholder="Motivo de consulta" />
                </div>
                <div>
                    <h2>¿Cómo te siente emocionalmente en este momento?</h2>
                    <Inputs className='contar' type="text" autoComplete="none" placeholder="Cuentanos" />
                </div>
                <div>
                    <h2>Mencione los cambios importantes que ha notado últimamente en sus hábitos personales</h2>
                    <Inputs className='contar' type="text" autoComplete="none" placeholder="Ejemplo: Alimentacion, Concentracion, Aseo personal, Vitalidad" />
                </div>
                <div>
                    <h2>¿Hay algo mas que desee contarnos?</h2>
                    <Inputs className='contar' type="text" autoComplete="none" placeholder="Cuentanos" />
                </div>
                <a href= "mailto:maria.alejandra.perez.viloria@gmail.com">
                <FormularioEnviar type="submit" >ENVIAR FORMULARIO</FormularioEnviar>
                </a>
            </FormularioTabla>
        </FormularioBase>


    )
}


export default Formulario;