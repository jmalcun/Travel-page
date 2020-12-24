import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    

    
    return (
        <>
          <div className="header">
                <div className="logo">
                    <div className="photo-perfil">
                        <NavLink 
                            activeClassName="active"
                            className="link"
                            exact
                            to="/home"
                        >
                            <h3>JM Travel</h3>
                        </NavLink>    
                    </div>
                </div>
                <div className="company-details">
                    <ul>
                        <li>
                            <NavLink
                                activeClassName="active"
                                className="link"
                                exact
                                to="/nosotros"
                            > <p>¿Quienes somos?</p> </NavLink>   
                        </li>
                        <li>
                            <NavLink
                                activeClassName="active"
                                className="link"
                                exact
                                to="/Servicios"
                            > <p>Servicios</p> </NavLink>   
                        </li>
                        <li>
                            <NavLink
                                activeClassName="active"
                                className="link"
                                exact
                                to="/contacto"
                            > <p>Contacto</p> </NavLink>   
                        </li>
                    </ul>
                </div>
            </div>  
        </>
    )
}
