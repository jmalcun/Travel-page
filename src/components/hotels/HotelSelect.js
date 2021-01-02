import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import {filtroHotelById} from '../../helpers/filtroHotelById'
import { Loading } from '../Loading';
import { Menu } from '../Menu';
import { DatosReserva } from './DatosReserva';

export const HotelSelect = () => {


    const params = useParams();
    const {hotelId} = params;

    const [cargando, setCargando] = useState(true)

    const hotel = filtroHotelById(hotelId);

    const {name, photo, description, servicios, city, country, habitacion, price, stars, adress} = hotel;

    setTimeout(() => {
        setCargando(false)
    }, 1300);

    if(cargando){
        return <Loading />
    }

    return (
        <>
            
            <div className="container">
                <div className="center-find-selectt">
                    <Menu/>
                    <div className="center-select">
                            <h1 className="hotel-name">{name}</h1>
                            <div className="img-container">
                                <div className="img-img">
                                    <img src={photo[1]} alt="img-1"/>
                                </div>
                                <div className="img-img">
                                    <img src={photo[2]} alt="img-2"/>
                                </div>
                                
                                <div className="img-img">
                                    <img src={photo[3]} alt="img-3"/>
                                </div>
                                
                            </div>
                            <div className="select-description">
                                <p>{description}</p>
                            </div>        
                    </div>    
                </div> 
                <h2 className="servicio-title">Servicios</h2>
                <div className="servicios-container">
                    <div className="servicios">
                        <div className="servicio">
                            <i className="fas fa-wifi"></i>
                            <p>{servicios[0]}</p>
                        </div>
                        <div className="servicio">
                            <i className="fas fa-swimmer"></i>
                            <p>{servicios[1]}</p>
                        </div>
                        <div className="servicio">
                            <i className="fas fa-dumbbell"></i>
                            <p>{servicios[2]}</p>
                        </div>
                        <div className="servicio">
                            <i className="fas fa-parking"></i>
                            <p>{servicios[3]}</p>
                        </div>
                        <div className="servicio">
                            <i className="fas fa-cocktail"></i>
                            <p>{servicios[4]}</p>
                        </div>     
                    </div>
                    <div className="servicios">
                        <div className="servicio">
                            <i className="fas fa-utensils"></i>
                            <p>{servicios[5]}</p>
                        </div>
                        <div className="servicio">
                            <i className="fas fa-hot-tub"></i>
                            <p>{servicios[6]}</p>
                        </div>
                        <div className="servicio">
                            <i className="fas fa-spa"></i>
                            <p>{servicios[7]}</p>
                        </div>
                        <div className="servicio">
                            <i className="fas fa-tv"></i>
                            <p>{servicios[8]}</p>
                        </div>
                        <div className="servicio">
                            <i className="fas fa-gamepad"></i>
                            <p>{servicios[9]}</p>
                        </div>     
                    </div>
                </div>
                <h3 className="servicio-title">Medios de pago</h3>
                <div className="pagos">
                    <p>Efectivo: <span>15% Off!!</span></p>
                    <div className="tarjetas">
                        <p>Tarjetas aceptadas:</p>
                        <i className="fab fa-cc-visa"></i>
                        <i class="fab fa-cc-mastercard"></i>
                        <i class="fab fa-cc-amex"></i>
                    </div>
                    
                </div> 
                <DatosReserva habitacion={habitacion} price={price}/>
                
            </div>  
        </>
    )
}
