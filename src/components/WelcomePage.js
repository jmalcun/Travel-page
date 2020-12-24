import React from 'react'
import { NavLink } from 'react-router-dom'


export const WelcomePage = () => {

    

    return (
        <>
            
            <div className="welcome">
                <h1>Hace realidad el viaje de tus sueños</h1>
                
                <div className="choices">
                    <NavLink 
                        activeClassName="active"
                        className="link choice hotel"
                        exact
                        to="/hotel"
                    >
                        <div>
                            <p>Hoteles</p>
                        </div>
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="link choice avion"
                        exact
                        to="/flight"
                    >
                        <div>
                            <p>Vuelos</p>
                        </div>
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="link choice auto"
                        exact
                        to="/car"
                    >
                        <div>
                            <p>Autos</p>
                        </div>
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="link choice tours"
                        exact
                        to="/car"
                    >
                        <div className="">
                            <p>Excursiones</p>
                        </div>  
                    </NavLink>  
                       
                </div>
            </div>  
        </>
    )
}
