import { Link } from 'react-router-dom';


/* Componente que solo se va a usar aquí y por tanto no es necesario crearlo aparte y exportarlo para importarlo aquí */
const CharactersByHero = ({alter_ego, characters})=> 
		alter_ego != characters ? <p>{characters}</p> : <></>;


export const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters}) => {
	const heroImageUrl = `/heroes/${id}.jpg`;
	//const showCharactersByHero = alter_ego != characters;


	return (
		<div className="col animate__animated animate__fadeIn">
				<div className="card">
					<div className="row no-gutters">
						<div className="col-4">
							<img src={heroImageUrl} className="card-img" alt={superhero}/>
						</div>
						<div className="col-8">
							<div className="card-body">
								<h5 className="card-title">{superhero}</h5>
								<p className="card-text">{alter_ego}</p>
								{/* Otra forma de hacerlo */}
								{/* showCharactersByHero && (<p>{characters}</p>) */}
								<CharactersByHero alter_ego={alter_ego} characters={characters} />
								<p className="card-text">
									<small className="text-muted">{first_appearance}</small>
								</p>
								{/* Usa el customHook 'useParams' para establecer el valor de la variable ID con el ID del héroe */}
								<Link to={`/hero/${id}`}>
									Mas..
								</Link>
							</div>
						</div>
					</div>
				</div>
		</div>
	)
}