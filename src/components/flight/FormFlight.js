import React, { useState } from 'react'
import Swal from 'sweetalert2'

export const FormFlight = ({setDataVuelo}) => {
    
    const [datos, setDatos] = useState({
        origenVuelo:'',
        destinoVuelo:'',
        ida: new Date(),
        vuelta:'',
        pasajerosMayores:'',
        pasajerosMenores:''
    })

    const {origenVuelo,destinoVuelo,ida,vuelta,pasajerosMayores,pasajerosMenores} = datos



    const handleInputChangeVuelo = ({target}) => {
        setDatos({
            ...datos,
            [ target.name ]: target.value

        })
    }

    const handleSubmitFlight = (e) =>{
        e.preventDefault()
        if(formValidatorV()){
            setDataVuelo(datos)
        }else{
            Swal.fire('Error', 'todos los campos son obligatorios', 'error')
        }

    }


    const formValidatorV = () =>{
        if(origenVuelo === '' || destinoVuelo === '' || ida === '' || vuelta === ''){
            return false
        }else{
            return true
        }
    }
    



    return (
        <>
            
                <form className="formulario" onSubmit={handleSubmitFlight}>
                    <label>Origen</label>
                    <input 
                        type="text"
                        name="origenVuelo"
                        value={origenVuelo}
                        onChange={handleInputChangeVuelo}
                        placeholder="Country, City"
                        />
                    <label>Destino</label>
                    <input 
                        type="text"
                        name="destinoVuelo"
                        value={destinoVuelo}
                        onChange={handleInputChangeVuelo}
                        placeholder="Country, City"
                    />
                    <label>Fecha de ida</label>
                    <input 
                        type="date"
                        name="ida"
                        value={ida}
                        onChange={handleInputChangeVuelo}
                    />
                    <label>Fecha de vuelta</label>
                    <input 
                        type="date"
                        name="vuelta"
                        value={vuelta}
                        onChange={handleInputChangeVuelo}
                    />
                    <div className="habitaciones">
                        <label>Adultos</label>
                        <select name="pasajerosMayores" value={pasajerosMayores} onChange={handleInputChangeVuelo}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <label>Menores</label>
                        <select name="pasajerosMenores" value={pasajerosMenores} onChange={handleInputChangeVuelo}>
                            <option value="-">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <button 
                    className="btn" 
                    type="submit"
                    >Buscar vuelo
                    </button>           
                </form>
             
        </>
    )
}
