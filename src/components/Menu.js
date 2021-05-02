import React from 'react'
import casa from '../assets/iconos/casa.png'
import avion from '../assets/iconos/avion.png'
import llave from '../assets/iconos/llave.png'
import tours from '../assets/iconos/tours.png'
import { NavLink } from 'react-router-dom'

export const Menu = () => {



    return (
        <>
          <section className="menu">
                <NavLink 
                    activeClassName="active"
                    className="link"
                    exact
                    to="/hotel"
                >
                <div className="menu-items" >
                    <img src={casa} alt="home"/>
                    <p>HOTEL</p>
                </div>
                </NavLink>
                <NavLink 
                    activeClassName="active"
                    className="link"
                    exact
                    to="/flight"
                >
                <div className="menu-items" >
                    <img src={avion} alt="Flight"/>
                    <p>VUELO</p>
                </div>
                </NavLink>
                <NavLink 
                    activeClassName="active"
                    className="link"
                    exact
                    to="/car"
                >
                <div className="menu-items">
                    <img src={llave} alt="car"/>
                    <p>AUTO</p>
                </div>
                </NavLink>
                <NavLink 
                    activeClassName="active"
                    className="link"
                    exact
                    to="/tours"
                >
                <div className="menu-items" >
                    <img src={tours} alt="tours"/>
                    <p>EXCURSIONES</p>
                </div>
                </NavLink>
            </section>  
        </>
    )
}
