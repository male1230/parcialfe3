import { useState } from "react"
import Card from "./Card"

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [raza, setRaza] = useState('')
    const [validacion, setValidacion] = useState(null)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nombre[0]);
        if ((nombre.length<4 || nombre[0] == " ") || raza.length<7) {
            console.log(validacion);
            setValidacion(false)
        } else {
            console.log(validacion);
            setValidacion(true)
        }
        
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
        validacion
        ?
        <Card nombre={nombre} raza={raza}/>
        :
        <h3>Por favor revisa que la informacion sea correcta</h3>
    } 

    </form>

    </div>
  )
}

export default Formulario