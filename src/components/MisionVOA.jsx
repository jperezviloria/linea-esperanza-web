import React from 'react';

import {MVOABase, MVOARecuadro} from "../css/style";


function MVOA(){
    return (
        <div>
        <MVOABase>
            <MVOARecuadro><p className = "subtitulo">MISIÓN</p>
            <p className = "descripcion">Ofrecer soporte y acompañamiento emocional a aquellas personas que necesitan apoyo en el cuidado de su salud mental.</p></MVOARecuadro>
            <MVOARecuadro><p className = "subtitulo">VISIÓN</p>
            <p className = "descripcion">Ser el programa de referencia de la Iglesia Cristiana en Iberoamérica que brinda atención y acompañamiento emocional a aquellas personas que lo soliciten.</p></MVOARecuadro>
            <MVOARecuadro><p className = "subtitulo">OBJETIVO</p>
            <p className = "descripcion">- Brindar apoyo y acompañamiento emocional en el cuidado de la salud mental.</p>
            <p className = "descripcion">- Organizar a profesionales de la salud mental en Iberoamérica para la atención psicológica de manera voluntaria y gratuita a aquellas personas que lo necesiten.</p>
            <p className = "descripcion">- Capacitar a la iglesia cristiana en Iberoamérica en temas del cuidado de la salud mental.</p>
            <p className = "descripcion">- Sensibilizar a la iglesia cristiana en Iberoamérica sobre la importancia del cuidado de la salud mental.</p>
            </MVOARecuadro>
            <MVOARecuadro><p className = "subtitulo">ALCANCE</p>
            <p className = "descripcion">Todos aquellos que necesiten orientación y apoyo emocional por parte de los profesionales de la Salud Mental de la Iglesia Cristiana en Iberoamérica, podrán accesar a la Línea de la Esperanza</p></MVOARecuadro>
        </MVOABase>
        {/* <Boton className="externo" link = "/formulario"  enlace = "SOLICITA ATENCIÓN PSICOLÓGICA"></Boton> */}
        </div>
    )
}

export default MVOA;