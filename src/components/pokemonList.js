import React, { Component } from 'react';
import axios from 'axios';

export default class pokemonList extends Component {
	constructor(props) {
		super(props);
	}

	// pokemonList = () => {
	//     for (i=0;i<152;i++) {
	//         axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res)=>{
	//             console.log(res)
	//         })
	//     }
	// }

	render() {
		// console.log(this.props.props);
		const pokeList =
			this.props.props.pokemonType &&
			this.props.props.pokemonType.map((data, index) => {
				// console.log(data);
				if (data.type2) {
					console.log('type2');
				}
				if (data.type) {
					console.log('type');
				}
				return <div key={index}>{data.type}</div>;
			});

		return <div>{pokeList}</div>;
	}
}
