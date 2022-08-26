import { useState } from 'react'

export const useMayus = (texto) => {

    /* Vamos a usar estados en el componente personalizado */

    const [miTexto, setMiTexto] = useState(texto);

    const mayusculas = () =>{
        setMiTexto(texto.toUpperCase())
    }

    const minusculas = () =>{
        setMiTexto(texto.toLowerCase());
    }

    const concatenar = (added) =>{
        setMiTexto(texto+added);
    }
    
    return {// retornamos un objeto de nuestro hook custom
        estado: miTexto,
        mayusculas,
        minusculas,
        concatenar
    };

}