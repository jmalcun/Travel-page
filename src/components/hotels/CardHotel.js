import React from 'react'
import tango from '../../assets/imgs/tangoHotel.jpg'
import infinito from '../../assets/imgs/infinito.jpg'


export const CardHotel = () => {
    return (
        <>
            <div className="card-hotel">
                <div className="card-img">
                    <img src={tango} />
                </div>
                <div className="card-description">
                    <h4>Hotel NH Buenos Aires</h4>
                    <p className="description-hotel">hotel 3 estrellas</p>
                    <p className="description-hotel">Suipacha 545, Buenos Aires</p>
                </div>
                <button>show me details</button>
            </div>  

            <div className="card-hotel">
                <div className="card-img">
                    <img src={infinito} />
                </div>
                <div className="card-description">
                    <h4>Hotel Infinito</h4>
                    <p className="description-hotel">hotel 3 estrellas</p>
                    <p className="description-hotel">Arenales 3689, C1425 CABA</p>
                </div>
                <button>show me details</button>
            </div>  
        </>
    )
}
