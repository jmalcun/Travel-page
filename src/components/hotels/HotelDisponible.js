import moment from 'moment'
import React, { useState } from 'react'
import { Loading } from '../Loading'
import { Menu } from '../Menu'
import { CardHotel } from './CardHotel'

export const HotelDisponible = ({busqueda}) => {

    const { destino,entrada,salida,adultos,niños} = busqueda

    const [loading, setLoading] = useState(true)

    let fechaEntrada = moment(entrada).format('DD-MM-YYYY')
    let fechaSalida = moment(salida).format('DD-MM-YYYY')

    setTimeout(() => {
        setLoading(false)    
    }, 2000);

    return (
        <>
            {
                (loading)
                    ? <Loading />
                    :<div className="container">
                        <div className="center-find">
                            <Menu/>
                            <div className="center-find-1">
                                <div className="form-data">
                                    <h4>Destino:</h4>
                                    <p>{destino}</p>
                                    <h4>Fecha de salida:</h4>
                                    <p>{fechaEntrada}</p>
                                    <h4>Fecha de regreso:</h4>
                                    <p>{fechaSalida}</p>
                                    <h4>Pasajeros:</h4>
                                    <div className="pasajeros">
                                        <p>{adultos} Adultos</p><p>{niños} Menores</p>
                                    </div> 
                                </div> 
                            </div>     
                        </div> 
                        <div className="form-hotel-page">
                            <h1 className="titulo">Elegi tu hotel</h1>
                            <div className="card-contain">
                                <CardHotel />
                            </div>
                        
                        </div>  
                    </div>
            }
            
        </>
    )
}

