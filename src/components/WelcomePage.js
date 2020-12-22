import React from 'react'
import { NavLink } from 'react-router-dom'


export const WelcomePage = () => {

    

    return (
        <>
            
            <div className="welcome">
                <h1>Bienvenido a <span>JM-Travel</span></h1>
                <div className="choices">
                    <NavLink 
                        activeClassName="active"
                        className="link choice hotel"
                        exact
                        to="/hotel"
                    >
                        <div>
                            <p>El hotel de tus sueños</p>
                        </div>
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="link choice avion"
                        exact
                        to="/flight"
                    >
                        <div>
                            <p>Tu vuelo</p>
                        </div>
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="link choice auto"
                        exact
                        to="/car"
                    >
                        <div>
                            <p>Tu auto</p>
                        </div>
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="link choice tours"
                        exact
                        to="/car"
                    >
                        <div className="">
                            <p>Tus tours</p>
                        </div>  
                    </NavLink>  
                       
                </div>
            </div>  
        </>
    )
}
