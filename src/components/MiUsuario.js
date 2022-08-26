import React, { useEffect, useState } from 'react'
import { useAjax } from '../hooks/useAjax';

export const MiUsuario = () => {

    const [url, setUrl] = useState("https://reqres.in/api/users/1")
    const {datos, cargando} = useAjax(url)

    const getId = e  => {
        let id = parseInt(e.target.value);
        setUrl("https://reqres.in/api/users/" + id);
    }

  return (
    <div>
        <h1>Mi usuario: </h1>
            {/* Con el interrogante ? conseguimos que solo se muestre si existe
            asi no nos da el error de datos is null al intentar renderizar
            es como una condición */}
            <p>{cargando ? "Cargando..." : ""}</p>
            <p>Nombre del usuario: {datos?.first_name}</p>
            <p>Apellidos del usuario: {datos?.last_name}</p>

        <input type='number' name='id' onChange={ getId }/>
    </div>
  )
}
