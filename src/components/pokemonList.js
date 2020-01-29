import React from 'react';

export default function pokemonList(props) {
	console.log(props.props.pokemons);

	const pokemonMap =
		props.props.pokemons &&
		props.props.pokemons.map((data) => {
			return (
				<div>
					<h1>{data.name}</h1>
				</div>
			);
		});

	return <div>{pokemonMap}</div>;
}
