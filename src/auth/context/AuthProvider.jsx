import { useReducer } from 'react'
import { AuthContext, authReducer } from './'
import { types } from '../types';


/* const initialState = {
    logged: false
} */

/**
 * Función de inicialización del reducer.
 * @returns Objeto con las propiedades del usuario
 */
const init = ()=>{
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user
    }
}


export const AuthProvider = ({children}) => {
    // El tercer parámetro es la función de inicialización
    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = (name='')=>{
        const user = {id: 'ABC', name};

        dispatch({type: types.login, payload: user});

        localStorage.setItem('user', JSON.stringify(user));
    }

    const logout = ()=>{
        dispatch({type: types.logout});
        localStorage.removeItem('user');
    }


    return (
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
