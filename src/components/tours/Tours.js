import React from 'react'
import { Menu } from '../Menu'


export const Tours = () => {

    


    return (
        <>
           <div className="container">
                <div className="center-find">
                    <Menu  />
                    <div className="center-find-1">
                        <div className="find-tours">
                            
                        </div> 
                    </div>
                </div>
                <div className="form-hotel-page">
                        <h1 className="titulo">Excursiones</h1>
                        <input 
                            className="tour-input"
                            type="search"
                            placeholder="City"
                        />
                        
                </div> 
                     
            </div> 
                 
        </>
    )
}


