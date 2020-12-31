import moment from 'moment'
import React, { useState } from 'react'
import { useFetchHoteles } from '../../hooks/useFetchHoteles'
import { Loading } from '../Loading'
import { Menu } from '../Menu'
import { CardHotel } from './CardHotel'

export const HotelDisponible = ({busqueda}) => {

    const { destino, entrada, salida, adultos, niños } = busqueda

    const [loading, setLoading] = useState(true)

    let fechaEntrada = moment(entrada).format('DD-MM-YYYY')
    let fechaSalida = moment(salida).format('DD-MM-YYYY')

    setTimeout(() => {
        setLoading(false)    
    }, 2000);

    const hotels = useFetchHoteles(destino)

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
                                    <div className="datos">
                                        <h4>Destino:</h4>
                                        <p>{destino}</p>
                                    </div>
                                    <div className="datos">
                                        <h4>Fecha de entrada:</h4>
                                        <p>{fechaEntrada}</p>
                                    </div>
                                    <div className="datos">
                                        <h4>Fecha de salida:</h4>
                                        <p>{fechaSalida}</p>
                                    </div>
                                    <div className="datos">
                                        <h4>Pasajeros:</h4>
                                        <p className="mr-10">{adultos} Adultos</p><p className="mr-10">y</p><p>{niños} Menores</p>
                                    </div> 
                                </div> 
                            </div>     
                        </div> 
                        <div className="form-hotel-page">
                            <h1 className="titulo">Elegi tu hotel</h1>
                            <div className="card-contain">
                                {
                                    hotels.map(h =>(
                                        <CardHotel key={h.id} {...h} fechaEntrada={fechaEntrada} fechaSalida={fechaSalida}/>
                                    ))
                                }
                                
                            </div>
                        
                        </div>  
                    </div>
            }
            
        </>
    )
}

