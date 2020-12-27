import React, { useState } from 'react'
import { Menu } from './Menu'
import { WelcomePage } from './WelcomePage'
import oferta1 from '../assets/imgs/oferta123.jpg'
import oferta2 from '../assets/imgs/oferta2.jpg'
import oferta3 from '../assets/imgs/oferta3.jpg'
import { Informacion } from './Informacion'

export const HomeScreen = () => {

    return (
        <>
            <div className="container">
                <div className="center-page">
                    <Menu  />
                    <div className="center">
                         <WelcomePage /> 
                    </div>     
                </div>
                <h2 className="subtitulo">Aprovecha las mejores ofertas</h2>
                <div className="ofertas">
                    <img src={oferta1} alt="oferta1"/>
                    <img src={oferta2} alt="oferta2"/>
                    <img src={oferta3} alt="oferta3"/>
                </div>
                <h2 className="subtitulo">Como comprar tu viaje</h2>
                <Informacion />
                <footer class="footer">     
                    <p>© 2019— JM travel </p>     
                </footer>    
            </div>
        </>
    )
}
