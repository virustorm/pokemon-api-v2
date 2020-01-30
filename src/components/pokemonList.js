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
		console.log(this.props.props);

		return <div>fe</div>;
	}
}
