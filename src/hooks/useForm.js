import { useState } from 'react';


/**
 * CustomHook 'useForm'. 
 * Cada input del formulario debería llevar su id HTML que corresponderá con 
 * cada propiedad del objeto pasado por parámetro.
 * @param {*} initialForm Objeto con el estado inicial del formulario. 
 * Cada propiedad del objeto almacenará un elemento del formulario.
 * @returns - Propiedades del formulario con los inputs y sus valores.
 * - Función 'onInputChange': Actualiza el estado del formulario almacenando los nuevos valores recibidos.
 * - Función 'onResetForm': Restablece el formulario a su estado incicial.
 */
export const useForm = (initialForm={}) => {
    const [formState, setformState] = useState(initialForm);


    const onInputChange = ({target})=>{
        // Desesctructura el evento del elemento que cambia para obtener sus atributos HTML (name, id o value)
        const {name, id, value} = target;

        // Establece el nuevo estado utilizando el estado anterior y sobrescribe la propiedad del estado con el valor del elemento que cambia
        setformState({
            ...formState, 
            [id]: value
        });
    }


    const onResetForm = ()=>{
        setformState(initialForm);
    }


    // Exportando la desestructuración del 'formState' se puede acceder a las propiedades del 'formState' cuando es llamado
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}