import React from 'react'
import { Menu } from './Menu'

export const Contacto = () => {
    return (
        <>
          <div className="container">
                <div className="center-find">
                    <Menu  />
                    <div className="center-find-1">
                        <h1 className="nosotros">Contacto</h1>
                        <div className="redes">
                            <i class="fab fa-whatsapp color-whatsap"></i>
                            <p>011-11111111</p>
                        </div>
                        <div className="redes">
                            <i class="fas fa-envelope-open-text color-correo"></i>
                            <p>jm.travel@gmail.com</p>
                        </div>
                        <div className="redes">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <p>Facebook</p>
                        </div>
                        <div className="redes">
                            <a href="#"><i class="fab fa-instagram color-instagram"></i></a>
                            <p>Instagram</p>
                        </div>
                        <div className="redes">
                            <a href="#"><i class="fas fa-map-marker-alt"></i></a>
                            <p>Jerónimo Salguero 3172, C1425 CABA</p>
                        </div> 
                    </div>
                </div> 
            </div>     
        </>
    )
}
