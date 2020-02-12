import React, { Component } from 'react';

export default class pokemonList extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	// pokemonList = () => {
	//     for (i=0;i<152;i++) {
	//         axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res)=>{
	//             console.log(res)
	//         })
	//     }
	// }

	render() {
		// console.log(this.props.props);
		const pokeTypeList =
			this.props.props.pokemonType &&
			this.props.props.pokemonType.map((data, index) => {
				// console.log(data);

				return <div key={index}>{data.type}</div>;
			});

		const pokeNameList =
			this.props.props.pokemons &&
			this.props.props.pokemons.map((data, index) => {
				return <div key={index}>{data.name}</div>;
			});

		return (
			<div>
				{pokeNameList}
				{pokeTypeList}
			</div>
		);
	}
}
