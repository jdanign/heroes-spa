import { heroes } from '../data/heroes';


/**
 * Obtiene la información de un 'heroe' a partir del nombre indicado.
 * Si el nombre no existe, devuelve un array vacío.
 * @param {*} name Cadena con el nombre del 'heroe'.
 * @returns Devuelve un array con los 'heroes' que coincidan con el nombre indicado o un array vacío
 */
export const getHerosByName = (name='') => {
    name = name.trim().toLowerCase();

    return name.length > 0
        ? heroes.filter(hero => hero.superhero.toLowerCase().includes(name))
        : [];
}
