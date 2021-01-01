import React from 'react'
import { Link } from 'react-router-dom'


export const CardHotel = ({id,name, photo, description, city, country, habitacion, price, stars, adress,fechaEntrada, fechaSalida}) => {

    return (
        <>
            <div className="card-hotel">
                <div className="card-img">
                    <img src={photo[0]} />
                </div>
                <div className="card-description">
                    <h4>{name}</h4>
                    <p className="description-hotel">hotel de {stars} estrellas</p>
                    <p className="description-hotel">{adress}</p>
                </div>
                <div className="footer-card">
                    <Link to={`./find-hotel/${id}/${fechaEntrada}/${fechaSalida}`} className="link"><button> ver detalles</button> </Link>
                </div>
                
            </div>  
        </>
    )
}
