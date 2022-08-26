import React from 'react'
import { useMayus } from '../hooks/useMayus'


export const PruebasCustom = () => {
   
    const {estado, mayusculas, minusculas, concatenar} = useMayus('Feli Rubio WEB')
  
  return (
    <div>
        <h1>Probando componentes personalizados</h1>
        {estado}

        <button onClick={ mayusculas }>Poner en mayusculas</button>
        <button onClick={ minusculas }>Poner en minusculas</button>
        <button onClick={() => concatenar(" Texto") }>Concatenar</button>
    </div>
  )
}
