import React, { Component } from 'react';
import axios from 'axios';
import PokemonList from './pokemonList';

export default class mainpage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemons: [],
			pokemonType: []
		};
	}

	componentDidMount() {
		axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964').then((res) => {
			this.setState({ pokemons: res.data.results });
		});
		for (let i = 1; i < 10; i++) {
			axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`).then((res) => {
				if (res.data.types.length > 1) {
					var type = [ res.data.types[0].type.name, res.data.types[1].type.name ];
					var joined = this.state.pokemonType.concat({ type });
					this.setState({ pokemonType: joined });
				} else {
					var type2 = res.data.types[0].type.name;
					var joined2 = this.state.pokemonType.concat({ type2 });
					this.setState({ pokemonType: joined2 });
				}
			});
		}
	}

	render() {
		return (
			<div>
				<PokemonList props={this.state} />
			</div>
		);
	}
}
