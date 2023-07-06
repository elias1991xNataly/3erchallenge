import React, { useContext, useState } from 'react';
import { CartContext } from '../Header/Header';

const Cart = () => {
	const { cartPokemon, deletetoCart } = useContext(CartContext);
	if (cartPokemon.length === 0) {
		return (<div>
			<p>No hay ningún pokémon en el carrito</p>
		</div>)
	} else if (cartPokemon.length !== 0) {



		return (<div>
			<h1>POKECART</h1>
			{cartPokemon.map((pokemon, index) => {

				return (<div id={`${index}`}>
					<p>{pokemon.id + 1}</p>
					<img src={pokemon.img}></img>
					<p>{pokemon.name}</p>
					<button onClick={()=>deletetoCart(pokemon)}>Delete Pokemon</button>
				</div>)
			})}

		</div>)
	}





}



export default Cart;
