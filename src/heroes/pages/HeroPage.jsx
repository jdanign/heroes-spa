import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';


export const HeroPage = () => {
    // Usa el customHook 'useParams' para recibir el id desde el 'HeroCard'
    const {id} = useParams();

    // Usa el customHook 'useNavigate' para que el botón pueda ir a otras páginas
    const navigate = useNavigate();


    // Obtiene el hero según el 'id' recibido, si existe
    // Con el useMemo, la función solo se dispara según el segundo parámetro, en este caso cuando el 'id' cambia
    const hero = useMemo(()=>getHeroById(id), [id]);


    const onNavigateBack = ()=>{
        // Con -1 navega a la ruta anterior
        navigate(-1);
    }

    
    // Si no existe el 'hero', vuelve a la página principal
    return (!hero) 
        ? <Navigate to="/marvel" />
        : (
            <>
                <div className="row mt-5">
                    <div className="col-4">
                        <img 
                            src={`/assets/heroes/${id}.jpg`} 
                            alt={hero.superhero} 
                            className='img-thumbnail animate__animated animate__fadeInLeft'
                        />
                    </div>
                    <div className="col-8 animate__animated animate__fadeIn">
                        <h3>{hero.superhero}</h3>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'><b>Alter ego:</b> {hero.alter_ego}</li>
                            <li className='list-group-item'><b>Publisher:</b> {hero.publisher}</li>
                            <li className='list-group-item'><b>First appearance:</b> {hero.first_appearance}</li>
                        </ul>
                        <h5 className="mt-3">Characters</h5>
                        <p>{hero.characters}</p>
                        <button 
                            className="btn btn-outline-secondary"
                            onClick={onNavigateBack}
                        >
                            Back
                        </button>
                    </div>
                </div>
            </>
        )
}