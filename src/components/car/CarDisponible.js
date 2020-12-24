import React, { useState } from 'react'
import { Loading } from '../Loading';
import { Menu } from '../Menu';
import moment from 'moment'

export const CarDisponible = ({auto}) => {

    const {lugarRetiro,fechaDeRetiro,horaRetiro,lugarDevolucion,fechaDevolucion,horaDevolucion} = auto


    const [loadinggg, setLoadinggg] = useState(true)

    setTimeout(() => {
        setLoadinggg(false)    
    }, 2000);

    let fechaIda = moment(fechaDeRetiro).format('DD-MM-YYYY')
    let fechaVuelta = moment(fechaDevolucion).format('DD-MM-YYYY')


    return (
        <>
        {
                (loadinggg)
                    ? <Loading />
                    :<div className="container">
                        <div className="center-find">
                            <Menu/>
                            <div className="center-find-1">
                                <div className="form-data">
                                    <h4>Lugar de retiro:</h4>
                                    <p>{lugarRetiro}</p>
                                    <h4>Fecha y hora de retiro:</h4>
                                    <div className="pasajeros">
                                        <p>{fechaIda}</p><p>{horaRetiro}hs</p>
                                    </div>
                                    <h4>Lugar de devolucion</h4>
                                    <p>{lugarDevolucion}</p>
                                    <h4>Fecha y hora de devolucion:</h4>
                                    <div className="pasajeros">
                                        <p>{fechaVuelta}</p><p>{horaDevolucion}hs</p>
                                    </div>
                                </div> 
                            </div>     
                        </div> 
                        <div className="form-hotel-page">
                            <h1 className="titulo">Elegi tu auto</h1>
                            <div className="card-contain">
                                
                            </div>
                        
                        </div>  
                    </div>
            }
            
        </>
    )
}
