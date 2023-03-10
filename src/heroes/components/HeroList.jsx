import { useMemo } from 'react';
import { HeroCard } from './';
import { getHerosByPublisher } from '../helpers';


export const HeroList = ({publisher}) => {
    // Obtiene los heros según el 'publisher' recibido, si existen
    // Con el useMemo, la función solo se dispara según el segundo parámetro, en este caso cuando el 'publisher' cambia
    const heroes = useMemo(()=>getHerosByPublisher(publisher), [publisher]);


    return (
        <div className='row rows-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            {heroes.map(hero => 
                <HeroCard key={hero.id} {...hero}/>
            )}
        </div>
    )
}