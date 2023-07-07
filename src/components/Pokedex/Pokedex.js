import React, { createContext } from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../Header/Header';

export const ThemeContext = createContext("light");



const Pokedex = () => {
	const pokeapiURL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
	const [pokemon, setPokemon] = useState([]);

	// const [theme, setTheme] = useState(ThemeContext);
	const { addToCart } = useContext(CartContext);


	useEffect(() => {

		axios.get(pokeapiURL).then((response) => setPokemon(response.data))
	}, []
	);

	let firstTwentyPokemon = pokemon.results;
	



	return (
		<div className='border flex-col p-3 items-center'>
			{firstTwentyPokemon?.map((poke, i) => {
				let y = i + 1;
				return (
					<div className="pokemon d-flex border items-center justify-content-between p-3">
						<p>ID: {y}</p>
						<p>Name: {poke.name}</p>
						<img alt="imagenes" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${y}.png`}></img>
						<button className='addToContext bg-green-500  w-25 h-20 rounded-3xl p-2' onClick={() => addToCart({ name: poke.name, id: i, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${y}.png` })} >Add to cart</button>
					</div>
				)


			})}
			<div className='flex justify-center p-3 '>
				<Link to="/cart"><button className=' bg-green-500 w-100 rounded-3xl h-20'>Go to Cart</button></Link>
			</div>
		</div>
	)
}


export default Pokedex;
