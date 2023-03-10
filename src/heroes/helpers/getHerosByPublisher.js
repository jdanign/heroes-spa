import { heroes } from '../data/heroes';


/**
 * Obtiene la información de un 'heroe' a partir del 'publisher' indicado.
 * Si el publisher no existe, lanza un error.
 * @param {*} publisher Cadena con el nombre del 'publisher' del 'heroe'.
 * @returns Devuelve los 'heroes' que coincidan con el 'publisher' indicado.
 */
export const getHerosByPublisher = (publisher) => {
    // Obtiene los publishers que existen en los 'heroes'
    const validPublishers = [...new Set(heroes.map(hero => hero.publisher))];

    if (!validPublishers.includes(publisher))
        throw new Error(`${publisher} is not a valid publisher.`);

    return heroes.filter(heroe => heroe.publisher === publisher);
}
