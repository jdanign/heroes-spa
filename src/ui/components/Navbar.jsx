import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';
import { Navitem } from './Navitem';


export const Navbar = () => {
    // Obtiene el nombre del usuario y la función logout() del 'useContext' almacenado en el login
    const {user, logout} = useContext(AuthContext);

    // 'useNavigate' es un customHook de 'react-router-dom'
    const navigate = useNavigate();

    const onLogout = ()=>{
        // Función de logout del provider
        logout();

        /* El 'replace' reemplaza el historial interno de la aplicación para que al volver atrás no se cargue una página de la aplicación sino la página anterior a la aplicación que exista en el historial del navegador */
        navigate('/login', {
            replace: true
        });
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <Navitem text="Marvel" path="marvel"/>
                    <Navitem text="DC" path="dc"/>
                    <Navitem text="Search" path="search"/>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    {/* <Navitem text="Logout" path="login"/> */}
                    <span className="nav-item nav-link text-info">
                        {user?.name || ''}
                    </span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
