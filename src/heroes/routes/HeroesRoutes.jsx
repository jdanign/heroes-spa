import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from '../../ui';
import { DcPage, HeroPage, MarvelPage, Search } from '../pages';


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className='container mt-2'>
                <Routes>
                    <Route path='marvel' element={<MarvelPage/>}/>
                    <Route path='dc' element={<DcPage/>}/>
                    <Route path='search' element={<Search/>}/>
                    {/* Permite usar el customHook 'useParams' para establecer el nombre de la variable que va a usar el hook */}
                    <Route path='hero/:id' element={<HeroPage/>}/>
                    <Route path='/' element={<Navigate to='marvel'/>}/>
                </Routes>
            </div>
        </>
    )
}
