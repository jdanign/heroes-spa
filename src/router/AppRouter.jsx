import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { HeroesRoutes} from '../heroes';
import { PrivateRoute, PublicRoute } from './';


export const AppRouter = () => {
    return (
        <>
            <Routes>
                {/* Así es sin tener en cuenta las rutas públicas y privadas */}
                {/* <Route path="login" element={<LoginPage/>}/> */}
                {/* <Route path="/*" element={<HeroesRoutes/>}/> */}

                <Route path="login" element={
                    /* Utiliza el componente creado 'PrivateRoute' para envolver al componente que carga el resto de la aplicación 
                    permitiendo usar rutas privadas dentro*/
                    <PublicRoute>
                        <LoginPage/>
                    </PublicRoute>
                    
                } />

                {/* OTRA FORMA DE HACERLO PARA RUTAS AGRUPADAS DENTRO */}
                {/* <Route path="login/*" element={
                    //Utiliza el componente creado 'PrivateRoute' para envolver al componente que carga el resto de la aplicación permitiendo usar rutas privadas dentro
                    <PublicRoute>
                        <Routes>
                            <Route path="/*" element={<LoginPage/>}/> */}
                            {/* Aquí se podrían añadir tantos Routes como rutas se quieran añadir dentro de este grupo */}
                        {/* </Routes>
                    </PublicRoute>
                    
                } /> */}
                
                {/* Cualquier ruta que no sea la anterior, carga el componente*/}
                <Route path="/*" element={
                    /* Utiliza el componente creado 'PrivateRoute' para envolver al componente que carga el resto de la aplicación 
                    permitiendo usar rutas privadas dentro*/
                    <PrivateRoute>
                        <HeroesRoutes/>
                    </PrivateRoute>
                } />
            </Routes>
        </>
    )
}