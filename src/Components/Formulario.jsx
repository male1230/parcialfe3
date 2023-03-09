import { useState } from "react"
import Card from "./Card"

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [raza, setRaza] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(!nombre);
        
    }

  return (
    <div>
        <form className='flex' onSubmit={handleSubmit}>
    <label> Nombre mascota
        <input
            type='text'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            
        />
    </label>
    
    <label> Raza mascota
    <input
        type='text'
        value={raza}
        onChange={(e) => setRaza(e.target.value)}
    />
    </label>
    

    <button type='submit'>Agregar a la orden</button>

    {
        nombre
        ?
        <Card/>
        :
        <h3>Error</h3>
    } 

    </form>

    </div>
  )
}

export default Formulario