import React from 'react';

import { RedesSociales } from '../css/style';

export function Redes() {
    return (
        <RedesSociales>

            <div className='usuarioRedes'>
            <p className='eslogan'> Síguenos en nuestras Redes Sociales</p>
                
                <div className='imagenEnlace'>
                    <div className='imagenEnlaceDetallado'>
                        <a href="https://www.facebook.com/lineaesperanzaa/" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/svg/1384/1384053.svg" alt="" /></a>
                        
                    </div>
                    <div className='imagenEnlaceDetallado'>
                    <a href='https://www.instagram.com/lineadelaesperanza/?hl=es-la' target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/svg/1384/1384063.svg" alt="" /></a>
                        
                    </div>
                </div>
                <p className='username'>@lineadelaesperanza</p>
            </div>

            {/* <div >
                <img className='imagenRedes' src="https://i2.wp.com/www3.gobiernodecanarias.org/medusa/edublog/iesguillerminabrito/wp-content/uploads/sites/268/2019/02/facebook-logo-f-sqaure1.png?fit=1000%2C750" alt="" />
                <img  className='imagenRedes' src="https://www.cear-euskadi.org/wp-content/uploads/2019/07/instagram.png" alt="" />
            </div>
            <div>
                <p className= 'letrasRedes' >Síguenos en nuestras Redes Sociales</p>
                <p className= 'letrasRedes' >@lineaesperanza</p>
            </div> */}
        </RedesSociales>
    )
}

export default Redes;