import React, { createContext } from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../Header/Header';

export const ThemeContext = createContext("light");



const Pokedex = () => {
	const pokeapiURL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
	const [pokemon, setPokemon] = useState([]);

	const [theme, setTheme] = useState(ThemeContext);
	const {cartPokemon, setCartPokemon,addToCart} = useContext(CartContext);


	useEffect(() => {

		axios.get(pokeapiURL).then((response) => setPokemon(response.data))
	}, []
	);

	let firstTwentyPokemon = pokemon.results;




	return (
		<div className='border'>
			{firstTwentyPokemon?.map((poke, i) => {
				let y = i + 1;
				return (
					<div className="pokemon d-flex border justify-content-between">
						<p>ID: {y}</p>
						<p>Name: {poke.name}</p>
						<img alt="imagenes" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${y}.png`}></img>
						<button className='addToContext' onClick={() => addToCart({ name: poke.name, id: i, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${y}.png` })} >Add to cart</button>
					</div>
				)


			})}

			<Link to="/cart"><button>Go to Cart</button></Link>
		</div>
	)
}


export default Pokedex;
