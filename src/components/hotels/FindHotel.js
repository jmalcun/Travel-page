import React, { useState } from 'react'
import { Menu } from '../Menu'
import { FormHotel } from './FormHotel'
import { HotelDisponible } from './HotelDisponible'

export const FindHotel = () => {
    
    
    const [busqueda, setBusqueda] = useState({ })
    
    return (
        <>
            {
                    (Object.keys(busqueda).length !== 0)
                        ?<HotelDisponible busqueda={busqueda}/>
                        :<div className="container">
                            <div className="center-find">
                                <Menu/>
                                <div className="center-find-1">
                                    <div className="find-hotel"></div>
                                </div>     
                            </div> 
                            <div className="form-hotel-page">
                                <h1 className="titulo">Encontra tu hotel</h1>
                                <FormHotel setBusqueda={setBusqueda}/>
                            </div>  
                        </div>
            }   

        </>
    )
}
