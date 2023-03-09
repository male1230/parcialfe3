import React from 'react'

const Card = ({nombre, raza}) => {
  return (
    <div>
      <h2>Datos de tu mascota</h2>
      <h3>Nombre mascota: {nombre}</h3>
      <h3>Raza mascota: {raza}</h3>

    </div>
  )
}

export default Card