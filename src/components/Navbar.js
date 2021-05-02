import React from 'react'
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
                    <input type="checkbox" id="cbox1" />
                    <label for="cbox1">
                        <i  class="fa fa-bars icono1"></i>
                        <i  class="fas fa-times icono2"></i>
                    </label>    
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
