import React, { Component } from 'react';
import axios from 'axios';
import PokemonList from './pokemonList';

export default class mainpage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemons: []
		};
	}

	componentDidMount() {
		axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964').then((res) => {
			this.setState({ pokemons: res.data.results });
		});
	}

	render() {
		return (
			<div>
				<PokemonList props={this.state} />
			</div>
		);
	}
}
