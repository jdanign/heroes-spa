import { HeroCard } from '../components';


export const SearchResults = ({queryParam, heros}) => {
    let showError = false;
    let showInfo = false;
    let showResults = false;

    if (queryParam.length){
        if (heros.length)
            showResults = true;
        else
            showError =  true;
    }
    else 
        showInfo = true;


    return (
        <>
            <div className={`alert alert-danger ${!showError && 'd-none'} animate__animated animate__fadeIn`}>
                No hero with <b>{queryParam}</b>
            </div>
            <div className={`alert alert-primary ${!showInfo && 'd-none'} animate__animated animate__fadeIn`}>
                Search a hero
            </div>
            {   !!showResults &&
                    heros.map(hero => <HeroCard key={hero.id} {...hero} />)
            }
        </>
    )
}