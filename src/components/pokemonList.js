import React, { Component } from 'react';

const pokeArraryTest = [];

export default class pokemonList extends Component {
	componentDidUpdate() {
		if (this.props.props.pokemonType.length > 9) {
			this.props.props.pokemonType.map((data) => {
				// console.log(data);
				pokeArraryTest.push(data);
				console.log(pokeArraryTest);
				// return <div key={index}>{data.type}</div>;
			});
			this.props.props.pokemons.map((data) => {
				pokeArraryTest.push(data);
			});
		}
		if (pokeArraryTest.length > 0) {
			console.log(pokeArraryTest.length);
		}
	}

	render() {
		if (pokeArraryTest.length > 18) {
			console.log('more');
			let pokeTable = () => {
				for (let i = 0; i < pokeArraryTest.length + 1; i++) {
					console.log('fjie');
					return (
						<div>
							{pokeArraryTest[i]}
							{pokeArraryTest[i + 10]}
						</div>
					);
				}
			};
		}
		return <div>fe</div>;
		// const pokeTypeList =
		// 	this.props.props.pokemonType &&
		// 	this.props.props.pokemonType.map((data, index) => {
		// 		// console.log(data);
		// 		pokeArraryTest.push(data);
		// 		return <div key={index}>{data.type}</div>;
		// 	});

		// const pokeNameList =
		// 	this.props.props.pokemons &&
		// 	this.props.props.pokemons.map((data, index) => {
		// 		pokeArraryTest.push(data);
		// 		return <div key={index}>{data.name}</div>;
		// 	});
	}
}
