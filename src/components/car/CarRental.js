import React, { useState } from 'react'
import { Menu } from '../Menu'
import { FormCar } from './FormCar'


export const CarRental = () => {

    const [auto, setAuto] = useState({})

    return (
        <>
                        <div className="container">
                            <div className="center-find">
                                <Menu/>
                                <div className="center-find-1">
                                    <div className="find-car"></div>
                                </div>     
                            </div> 
                            <div className="form-hotel-page">
                                <h1 className="titulo">Encontra tu auto</h1>
                                <FormCar setAuto={setAuto} />
                            </div>  
                        </div>
        </>
    )
}

                        
