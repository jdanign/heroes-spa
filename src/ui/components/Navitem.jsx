import { NavLink } from 'react-router-dom';


export const Navitem = ({text, path}) => {
    return (
        <NavLink 
            className={({isActive})=> `nav-item nav-link ${isActive ? 'active' : ''}`} 
            to={`/${path}`}
        >
            {text}
        </NavLink>
    )
}
