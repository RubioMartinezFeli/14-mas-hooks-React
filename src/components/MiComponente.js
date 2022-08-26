import React, { useId } from 'react'

/* El hook use ID sirve para crear un identificador unico de un elemento del
DOM pero que sirva tanto para el back-end como para el front-end, en lugar de
gernerar un identificador en el front que luego tenga que ser comprobado
en el back*/

export const MiComponente = () => {

    const id_input = useId();

  return (
    <div>
        <h1>Hooh useID</h1>
        <input id={id_input} name='nombre' placeholder='Nombre' />
    </div>
  )
}
