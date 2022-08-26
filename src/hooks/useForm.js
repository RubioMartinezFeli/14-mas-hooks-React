import { useState } from 'react'

export const useForm = ( objetoInicial = {} ) => {

    const [formulario, setFormulario] = useState(objetoInicial);

    const serializarFormulario = (formulario) => {

        const formData = new FormData(formulario);

        const objetoCompleto = {};

        // Formamos objeto delformulario
        for(let [name, value] of formData){
            objetoCompleto[name] = value;
        }
        return objetoCompleto
    }


    const enviado = e => {
        e.preventDefault();
       
        let curso = serializarFormulario(e.target)

        setFormulario(curso);
        console.log(curso)
    }

    const cambiado = ({target}) =>{// destructuramos e para tener target directamente
        const {name, value} = target;// destructuramos target para tener name y value directamente

        setFormulario({
            ...formulario,//expandimos el objeto (lo que ya teniamo)
            [name]: value//modificamos solo la prpiedad con name (qualquiera)
            // y le añadimos su value
        })
    }


    return {
        formulario,
        enviado,
        cambiado
    }
}