import React, { useState } from 'react'
import { Menu } from '../Menu'
import { FlightDisponible } from './FlightDisponible'
import { FormFlight } from './FormFlight'


export const FindFlight = () => {
    

    const [dataVuelo, setDataVuelo] = useState({})

    console.log(dataVuelo)

    
    return (

        <>
            {
                (Object.keys(dataVuelo).length !== 0)
                        ? <FlightDisponible dataVuelo={dataVuelo} />
                        : <div className="container">
                                <div className="center-find">
                                    <Menu  />
                                    <div className="center-find-1">
                                        <div className="find-flight"></div>
                                    </div>  
                                </div>           
                                <div className="form-hotel-page">
                                    <h1 className="titulo">Encontra tu vuelo</h1>
                                    <FormFlight setDataVuelo={setDataVuelo} />
                                </div>       
                            </div>
            }


            
        </>
    )
}
