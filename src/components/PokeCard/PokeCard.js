import React, { useContext } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ThemeContext } from '../Header/Header';

const PokeCard = () => {
	const [pokemon, setPokemon] = useState([]);
	const apiPokeURL = "https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0";



	useEffect(() => {
		axios.get(apiPokeURL).then((response) => {
			setPokemon(response.data);
		});
	}, []);
	console.log(pokemon);
	const ArrOfPokemon = pokemon.results;
	console.log(ArrOfPokemon);
	return (
		<table>PokeCard
			{ArrOfPokemon?.map((poke, i) => {
				let y = i + 1;
				return (

					<tr className='border w-100 d-flex align-items-center'>

						<tr>
							<td>{`${y}`}</td>
							<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${y}.png`}></img>
						</tr>
						<tr>
							<td>Name: </td>
							<td>{poke.name}</td>
							{console.log(poke.name)}
						</tr>
					</tr>
				)
			})}
		</table>
	)
}


export default PokeCard;
