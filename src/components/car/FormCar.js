import React, { useState } from 'react'
import Swal from 'sweetalert2'

export const FormCar = ({setAuto}) => {
    
    const [carValues, setCarValues] = useState({
        lugarRetiro:'',
        fechaDeRetiro:'',
        horaRetiro:'',
        lugarDevolucion:'',
        fechaDevolucion:'',
        horaDevolucion:''
    })

    const {lugarRetiro,fechaDeRetiro,horaRetiro,lugarDevolucion,fechaDevolucion,horaDevolucion} = carValues


    const handleInputChangeCar = ({target}) =>{
        setCarValues({
            ...carValues,
            [ target.name ]: target.value
        })
    }

    const handleSubmitCar = (e) =>{
        e.preventDefault()
        if(formValidator()){
            setAuto(carValues)
        }else{
            Swal.fire('Error', 'todos los campos son obligatorios', 'error')
        }
    }

    const formValidator = () =>{
        if(lugarRetiro === '' || fechaDeRetiro === '' || horaRetiro === '' || lugarDevolucion === '' || fechaDevolucion === '' || horaDevolucion === ''){
            return false
        }else{
            return true
        }
    }
    
    return (
        <>
          <form className="formulario" onSubmit={handleSubmitCar}>
                    <label>Lugar de retiro</label>
                    <input 
                        type="text"
                        name="lugarRetiro"
                        value={lugarRetiro}
                        onChange={handleInputChangeCar}
                        placeholder="Country, City"
                        />
                    <label>Fecha de retiro</label>
                    <input 
                        type="date"
                        name="fechaDeRetiro"
                        value={fechaDeRetiro}
                        onChange={handleInputChangeCar}
                    />
                    <label>Hora de Retiro</label>
                    <select className="hora" name="horaRetiro" value={horaRetiro} onChange={handleInputChangeCar}>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                    </select>
                    <label>Lugar de devolucion</label>
                    <input 
                        type="text"
                        name="lugarDevolucion"
                        value={lugarDevolucion}
                        onChange={handleInputChangeCar}
                        placeholder="Country, City"
                        />
                    <label>Fecha de devolucion</label>
                    <input 
                        type="date"
                        name="fechaDevolucion"
                        value={fechaDevolucion}
                        onChange={handleInputChangeCar}
                    />
                    <label>Hora de devolucion</label>
                    <select className="hora" name="horaDevolucion" value={horaDevolucion} onChange={handleInputChangeCar}>
                    <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                    </select>
                    
                    <button 
                    className="btn" 
                    type="submit"
                    >Buscar
                    </button>           
                </form>          
        </>
    )
}
