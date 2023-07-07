import React, { useContext, useState } from 'react';
import { CartContext } from '../Header/Header';

const Cart = () => {
	const { cartPokemon, deletetoCart } = useContext(CartContext);
	if (cartPokemon.length === 0) {
		return (<div>
			<p>No hay ningún pokémon en el carrito</p>
		</div>)
	} else if (cartPokemon.length !== 0) {



		return (<div className='box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white border-5 border-rose-500'>
			<h1>POKECART</h1>
			{cartPokemon.map((pokemon, index) => {

				return (<div className='flex  justify-evenly items-center box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white border-5 border-rose-500' id={`${index}`}>
					<p>{pokemon.id + 1}</p>
					<img className='' src={pokemon.img}></img>
					<p>{pokemon.name}</p>
					<button className='bg-green-300 text-black' onClick={()=>deletetoCart(pokemon)}>Delete Pokemon</button>
				</div>)
			})}

		</div>)
	}





}



export default Cart;
