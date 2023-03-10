import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';


export const LoginPage = () => {
    const {login} = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogin = ()=>{
        // Llama a la función login con el 'useContext' creada en AuthProvider, que se obtiene del contexto creado en el AuthContext, usado en el AuthProvider, que es usado en HeroesApp.jsx
        login('Dani García');

        navigate('/', {
            replace: true
        });
    }


    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr/>
            <button 
                className="btn btn-primary"
                onClick={onLogin}
            >
                Login
            </button>
        </div>
    )
}