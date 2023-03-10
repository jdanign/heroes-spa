import { useContext } from 'react'
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../auth';


/**
 * Componente que comprueba que el usuario esté logueado para mostrar o no las partes privadas de la app.
 * Si el usuario no está logueado lo redirige al login. 
 * @returns Componentes hijos si el usuario está logueado o redirige al login en caso contrario.
 */
export const PrivateRoute = ({children}) => {
    // Utiliza el contexto para comprobar que está autenticado
    const {logged} = useContext(AuthContext);

    // Si está autenticado muestra los componentes hijos o, de lo contrario, redirige al login
    return logged ? children : <Navigate to="/login" />;
}