import React from 'react'
import { Menu } from '../Menu'
import { CardHotel } from './CardHotel'

export const HotelDisponible = ({busqueda}) => {

    const { destino,entrada,salida} = busqueda


    return (
        <>

            <div className="container">
                <div className="center-find">
                    <Menu/>
                    <div className="center-find-1">
                        <div className="form-data">
                            <h4>Destination:</h4>
                            <p>{destino}</p>
                            <h4>Entry date:</h4>
                            <p>{entrada}</p>
                            <h4>Departure date:</h4>
                            <p>{salida}</p>
                        </div> 
                    </div>     
                </div> 
                <div className="form-hotel-page">
                    <h1 className="titulo">Choose Hotel</h1>
                    <div className="card-contain">
                        <CardHotel />
                    </div>
                    
                </div>  
            </div>
        
            
        </>
    )
}

