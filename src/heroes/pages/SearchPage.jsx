import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHerosByName } from '../helpers/getHerosByName';
import { SearchResults } from './SearchResults';


export const Search = () => {
    const navigate = useNavigate();

    // Obtiene el 'query parameter' de la búsqueda desde la URL    
    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get('q') || '';

    // Obtiene los heroes por el nombre obtenido de la URL
    const heros = getHerosByName(queryParam);


    // CustomHook propio ('searchText' es el 'name' o el 'id' del input)
    const {searchText, onInputChange} = useForm({searchText: queryParam});

    // Al enviar el formulario
    const onSearchSubmit = event =>{
        event.preventDefault();

        // Añade a la URL el 'query parameter' según el texto del input de búsqueda
        navigate(searchText.trim().length >= 2
            ? `?q=${searchText.trim().toLowerCase()}`
            : '');
    }
    

    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input 
                            type="text" 
                            name="searchText" 
                            id="searchText" 
                            className="form-control" 
                            placeholder="Search a hero" 
                            autoComplete="off" 
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    <SearchResults queryParam={queryParam} heros={heros} />
                </div>
            </div>
        </>
    )
}