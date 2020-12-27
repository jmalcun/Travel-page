import React, { useState } from 'react'
import { Loading } from '../Loading';
import { Menu } from '../Menu';
import moment from 'moment'

export const FlightDisponible = ({dataVuelo}) => {



    const [loadingg, setLoadingg] = useState(true)

    setTimeout(() => {
        setLoadingg(false)    
    }, 2000);


    const {origenVuelo, destinoVuelo, ida, vuelta, pasajerosMayores, pasajerosMenores} = dataVuelo

    let fechaIda = moment(ida).format('DD-MM-YYYY')
    let fechaVuelta = moment(vuelta).format('DD-MM-YYYY')

    return (
        <>
            {
                (loadingg)
                    ? <Loading />
                    :<div className="container">
                        <div className="center-find">
                            <Menu/>
                            <div className="center-find-1">
                                <div className="form-data">
                                    <div className="datos">
                                        <h4>Origen:</h4>
                                        <p>{origenVuelo}</p>
                                    </div>
                                    <div className="datos">
                                        <h4>Destino:</h4>
                                        <p>{destinoVuelo}</p>
                                    </div>
                                    <div className="datos">
                                        <h4>Fecha de salida:</h4>
                                        <p>{fechaIda}</p>
                                    </div>
                                    <div className="datos">
                                        <h4>Fecha de regreso:</h4>
                                        <p>{fechaVuelta}</p>
                                    </div>
                                    <div className="datos">
                                        <h4>Pasajeros:</h4>
                                        <p className="mr-10">{pasajerosMayores} Adultos</p><p className="mr-10">y</p><p>{pasajerosMenores} Menores</p>
                                    </div> 
                                </div> 
                            </div>     
                        </div> 
                        <div className="form-hotel-page">
                            <h1 className="titulo">Elegi tu vuelo</h1>
                            <div className="card-contain">
                                
                            </div>
                        
                        </div>  
                    </div>
            }
            
        </>
    )
}

