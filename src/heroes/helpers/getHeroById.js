import { heroes } from '../data/heroes';


/**
 * Obtiene la información de un 'heroe' a partir del 'id' indicado.
 * Si el ID no existe, lanza un error.
 * @param {*} id Cadena con el 'ID' del 'heroe'.
 * @returns Devuelve los 'heroes' que coincidan con el 'publisher' indicado.
 */
export const getHeroById = (id) => 
    heroes.find(hero => hero.id === id);