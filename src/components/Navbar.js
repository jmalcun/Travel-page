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
                            <h3>JM-Travel</h3>
                        </NavLink>    
                    </div>
                </div>
                <div className="busqueda">
                    <input 
                        type="search" 
                        placeholder="Search hotels"
                    />
                </div>
                <div className="company-details">
                    <p>hotels, flights, car rental and tours</p>
                </div>
            </div>  
        </>
    )
}
