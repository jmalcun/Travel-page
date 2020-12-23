import React, { useState } from 'react'
import Swal from 'sweetalert2'


export const FormHotel = ({setBusqueda}) => {


    const [formValues, setFormValues] = useState({
        destino:'',
        entrada:'',
        salida:'',
        adultos:'',
        niños:''
    })
    
    const {destino, entrada, salida, adultos, niños} = formValues

    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [ target.name ]: target.value

        })
    }
    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(formValidator()){
            setBusqueda(formValues)
        }else{
            Swal.fire('Error', 'todos los campos son obligatorios', 'error')
        }
        
    }

    const formValidator = () =>{
        if(destino === '' || entrada === '' || salida === '' || adultos === '' || niños === '' ){
            return false
        }else{
            return true
        }
    }

    return (
        <>
            
                <form className="formulario" onSubmit={handleSubmit}>
                    <label>Destination</label>
                    <input 
                        type="text"
                        name="destino"
                        value={destino}
                        onChange={handleInputChange}
                        placeholder="Country, City"
                        />
                    <label>Entry date</label>
                    <input 
                        type="date"
                        name="entrada"
                        value={entrada}
                        onChange={handleInputChange}
                    />
                    <label>Departure date</label>
                    <input 
                        type="date"
                        name="salida"
                        value={salida}
                        onChange={handleInputChange}
                    />
                    <div className="habitaciones">
                        <label>Adults</label>
                        <select name="adultos" value={adultos} onChange={handleInputChange}>
                            <option value="-">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <label>Childrens</label>
                        <select name="niños" value={niños} onChange={handleInputChange}>
                            <option value="-">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <button 
                    className="btn" 
                    type="submit"
                    >Search Hotels
                    </button>           
                </form>
             
        </>
    )
}
