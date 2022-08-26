import { useState, useEffect } from 'react';

export const useAjax = (url) => {

    const [estado, setEstado] = useState({
        datos: null,
        cargando: true
    });

    const getData = async() => {

        //Expandimos estado para mantener los valores anteriores
        setEstado({
           ...estado,
            cargando: true
        })

        //await espera el resultado del fetch a la url nos devuelve un objeto
        const peticion = await fetch(url);

        //sacamos datos de la peticion
        const {data} = await peticion.json();
        // desetructuamos el objeto cogiendo la propiedad data

        setEstado({
            datos: data,
            cargando: false
        });  
    }

    useEffect(()=>{
        getData();
    },[url])

    return{
        datos: estado.datos,
        cargando: estado.cargando
    }

}