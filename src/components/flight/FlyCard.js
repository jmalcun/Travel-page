import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom';

export const FlyCard = ({id,aerolinea, origen, destino, tipoV, horaDeSalida, horaDeLlegada, origenVuelta, destinoVuelta, horaVuelta, horaLlegada, price, dataVuelo}) => {

    const {origenVuelo, destinoVuelo, ida, vuelta, tipo, pasajerosMayores, pasajerosMenores} = dataVuelo;


    let fechaIda = moment(ida).format('DD-MM-YYYY')
    let fechaVuelta = moment(vuelta).format('DD-MM-YYYY')

    let pricetotal= Number(price) * Number(pasajerosMayores);

    console.log(pricetotal)

    return (
        <>
            <div className="card-vuelos">
                <div className="card-vuelo">
                    <div className="ida">
                        <div className="detalles-vuelo">
                            <i class="fas fa-plane-departure"></i>IDA
                            <p>{fechaIda}</p>
                            <p>{origenVuelo} - {destinoVuelo}</p>
                        </div>
                        <div className="datos-vuelo">
                            <h4>{aerolinea}</h4>
                            <div className="ida-llegada">
                                <p>{horaDeSalida} <span>EZE</span></p> <p>- {tipo} -</p> <p> {horaDeLlegada} <span>MIA</span></p>
                            </div>
                            <i class="fas fa-suitcase-rolling"></i>
                        </div>
                    </div>
                    <div className="vuelta">
                        <div className="detalles-vuelo">
                            <i class="fas fa-plane-departure fa-flip-horizontal"></i>VUELTA
                            <p>{fechaVuelta}</p>
                            <p>{origenVuelta} - {destinoVuelta}</p>
                        </div>
                        <div className="datos-vuelo">
                            <h4>{aerolinea}</h4>
                            <div className="ida-llegada">
                                <p>{horaVuelta} <span>MIA</span></p> <p>- {tipo} -</p> <p> {horaLlegada} <span>EZE</span></p>
                            </div>
                            <i class="fas fa-suitcase-rolling"></i>     
                        </div>

                    </div>
                </div>
                <div className="precio-vuelo">
                        <p>por adulto <span>$ {price}</span></p>
                        <p>{pasajerosMayores} adultos <span>$ {pricetotal}</span></p>
                        <p>imp. y tasas <span >$ 60000</span></p>
                        <p>cargos <span >$ 4000</span></p>
                        <h4>Total <span >$ {pricetotal + 60000 + 4000}</span></h4>
                        <Link to={`./find-flight/${id}/${pasajerosMayores-pasajerosMenores}`}><button className="comprar-btn">COMPRAR</button></Link>    
                </div>
            </div>
            
        </>
    )
}
