import React, { useState } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Loading } from '../Loading';

export const DatosReserva = () => {

    const params = useParams();

    const{fechaIngreso, fechaSalida} = params;

    const [datosres, setDatosres] = useState({
        nombreTitular:'',
        email:'',
        telefono:'',
        formaPago:'efectivo',
    });

    const [ok, setOk] = useState(false);

    const {nombreTitular, email, telefono, formaPago} = datosres;

    const handleDatosChange = ({target}) => {
        setDatosres({
            ...datosres,
            [ target.name ]: target.value
        })
    };

    const handleBuyClick = (e) =>{
        e.preventDefault();
        Swal.fire({
            title: 'Datos de la Reserva',
            text:`
            Titular: ${nombreTitular}                    -
            Habitacion: doble                            -
            Forma de pago: ${formaPago}                  -
            Fecha de ingreso: ${fechaIngreso}            -
            Fecha de Salida: ${fechaSalida}              -`,
            showDenyButton: true,
            confirmButtonText: `Confirmar`,
            denyButtonText: `Cancelar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Su Reserva fue confirmada', `Se envió a ${email} el Vaucher correspondiente`, 'success')
              setTimeout(() => { 
                  setOk(true)
              }, 2000);
            } else if (result.isDenied) {
              Swal.fire('Su reserva a sido cancelada', '', 'info')
            }
          })
    }

    if(ok){
        return <Redirect to="/home"/>
    }


    return (
        <>
            <h2 className="servicio-title" >Por favor complete los siguientes datos</h2>
            <form className="form-reserva" onSubmit={handleBuyClick}>
                <label>Nombre y apellido del titular</label>
                <input
                type="text"
                name="nombreTitular"
                value={nombreTitular}
                onChange={handleDatosChange}
                />
                <label>Email</label>
                <input
                type="email"
                name="email"
                value={email}
                onChange={handleDatosChange}
                />
                <label>Telefono</label>
                <input
                type="number"
                name="telefono"
                value={telefono}
                onChange={handleDatosChange}
                />
                <label>Forma de pago</label>
                <select id="aca" name="formaPago" value={formaPago} onChange={handleDatosChange}>
                    <option value="efectivo">efectivo</option>
                    <option value="tarjeta de credito">tarjeta de credito</option>
                </select>     
                <div className="btn-container">
                    <button type="submit" className="btn">Reservar</button>
                </div>
            </form> 
        </>
    )
}
