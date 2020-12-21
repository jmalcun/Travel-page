import React, { useState } from 'react'
import Swal from 'sweetalert2'


export const FormHotel = ({setBusqueda}) => {


    const [formValues, setFormValues] = useState({
        destino:'',
        entrada:'',
        salida:''
    })
    
    const {destino, entrada, salida} = formValues

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
        if(destino === '' || entrada === '' || salida === ''){
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
                    <button 
                    className="btn" 
                    type="submit"
                    
                    >Search Hotels
                    </button>           
                </form>
             
        </>
    )
}
