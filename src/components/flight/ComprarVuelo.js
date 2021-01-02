import React, { useState } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import { Menu } from '../Menu';

export const ComprarVuelo = () => {

    const params = useParams();

    const {vueloId, pasajeros} = params

    const [ok, setOk] = useState(false);

    const [datosCompra, setDatosCompra] = useState({
        pasajero1:'',
        dni:'',
        pasajero2:'',
        dni2:'',
        pasajero3:'',
        dni3:'',
        pasajero4:'',
        emailP:'',
        telefonoP:'',
        fPago:'',
    })

    const {pasajero1,dni, pasajero2, dni2, pasajero3,pasajero4,emailP,telefonoP,fPago} = datosCompra;

    const [datosPago, setDatosPago] = useState({
        nombreT:'',
        tipoT:'Visa',
        tarjetaN:'',
        codigoS:'',
        cuotas:''
    })

    const {nombreT,tipoT,tarjetaN,codigoS,cuotas}=datosPago;

    const handleDatosChange = ({target}) => {
        setDatosCompra({
            ...datosCompra,
            [ target.name ]: target.value
        })
        setDatosPago({
            ...datosPago,
            [ target.name ]: target.value
        })
    };

    const handleBuyClick = (e) =>{
        e.preventDefault();
        if(validaciones()){
            if(fPago === "transferencia"){
                Swal.fire('Bien hecho!', `una vez realizada la transferencia envie el comprobante a jmtravel@gmail.com y le enviaremos su vaucher!`, 'success')
                setTimeout(() => { 
                    setOk(true)
                }, 2000);
            }else{
                Swal.fire('Bien hecho!', `le enviamos su vaucher a ${emailP}`, 'success')
                setTimeout(() => { 
                    setOk(true)
                }, 2000);
            }    
        }else {
            Swal.fire('Error', 'todos los campos son obligatorios', 'error')
        }
       
    }

    if(ok){
        return <Redirect to="/home"/>
    }

    const validaciones = () =>{
        if(pasajero1 === '' || emailP === '' || telefonoP === ''){
            return false
        }else return true
    }


    return (
        <>
          <div className="container">
                        <div className="center-find">
                            <Menu/>
                            <div className="center-find-1">
                                <h2 className="servicio-title" >Por favor complete los siguientes datos</h2>
                                <form className="form-reserva" onSubmit={handleBuyClick}>
                                    <label>Nombre y apellido del pasajero/a titular</label>
                                    <input
                                    type="text"
                                    name="pasajero1"
                                    value={pasajero1}
                                    onChange={handleDatosChange}
                                    />
                                    <label>DNI del titular</label>
                                    <input
                                    type="number"
                                    name="dni"
                                    value={dni}
                                    onChange={handleDatosChange}
                                    />
                                    {
                                        (pasajeros === '2')   
                                            && <div className="form-reserva">
                                                    <label>Nombre y apellido del pasajero/a acompañante</label>
                                                    <input
                                                    type="text"
                                                    name="pasajero2"
                                                    value={pasajero2}
                                                    onChange={handleDatosChange}
                                                    />
                                                    <label>DNI del acompañante</label>
                                                    <input
                                                    type="number"
                                                    name="dni2"
                                                    value={dni2}
                                                    onChange={handleDatosChange}
                                                    />
                                                </div>   
                                    }
                                    {
                                         (pasajeros === '3')   
                                         && <div>
                                                 <label>Nombre y apellido del pasajero/a</label>
                                                 <input
                                                 type="text"
                                                 name="pasajero3"
                                                 value={pasajero3}
                                                 onChange={handleDatosChange}
                                                 />
                                             </div>   
                                    }
                                    <label>Email del titular</label>
                                    <input
                                    type="email"
                                    name="emailP"
                                    value={emailP}
                                    onChange={handleDatosChange}
                                    />
                                    <label>Telefono del titular</label>
                                    <input
                                    type="number"
                                    name="telefonoP"
                                    value={telefonoP}
                                    onChange={handleDatosChange}
                                    />
                                    <label>Forma de pago</label>
                                    <select name="fPago" value={fPago} onChange={handleDatosChange}>
                                        <option value="">-</option>
                                        <option value="transferencia">transferencia</option>
                                        <option value="tarjeta de credito">tarjeta de credito</option>
                                    </select>
                                    {
                                            (fPago === "transferencia")
                                                &&<div className="padd-top-20">
                                                    <label>CBU</label>
                                                    <p>4345656789765432432123</p>
                                                    <label>Nombre</label>
                                                    <p>JM travel</p>
                                                </div>
                                    }    
                                    {
                                            (fPago === 'tarjeta de credito')
                                                && <div className="form-reserva">
                                                        <label>Nombre y apellido como figura en la tarjeta</label>
                                                        <input type="text" name="nombreT" value={nombreT} onChange={handleDatosChange}/>
                                                        <br/>
                                                        <select name="tipoT" value={tipoT} onChange={handleDatosChange} >
                                                            <option value="Visa">Visa</option>
                                                            <option value="Master Card">Master Card</option>
                                                        </select>
                                                        <label>Numero de tarjeta</label>
                                                        <input type="Number" placeholder="XXXX-XXXX-XXXX-XXXX" name="tarjetaN" value={tarjetaN} onChange={handleDatosChange}/>
                                                        <br/>
                                                        <label>Codigo de seguridad</label>
                                                        <input type="password" placeholder="XXX" name="codigoS" value={codigoS} onChange={handleDatosChange}/>
                                                        <br/>
                                                        <label>Cuotas</label>
                                                        <select name="cuotas" value={cuotas} onChange={handleDatosChange}>
                                                            <option value="3">3</option>
                                                            <option value="6">6</option>
                                                            <option value="12">12</option>
                                                        </select>

                                                    </div>
                                    } 
                                    <div className="btn-container">
                                        <button type="submit" className="btn">Reservar</button>
                                    </div>
                                </form> 
                            </div>     
                        </div> 
            </div>
        </>
    )
}
