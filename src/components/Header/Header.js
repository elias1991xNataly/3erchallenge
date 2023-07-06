import { createContext, useState } from "react";
import Main from "../Main/Main";

export const ThemeContext = createContext("light");
export const CartContext = createContext();
export default function Header({ children }) {
	const [cartPokemon, setCartPokemon] = useState([]);
	const [theme, setTheme] = useState(ThemeContext);


	const addToCart = (pokemon) => {
		setCartPokemon([...cartPokemon, pokemon])
		console.log(cartPokemon);
	}

	const deletetoCart = (pokemon) => {
		const newCart = cartPokemon.filter(pokemonDel => pokemonDel !== pokemon)
		setCartPokemon(newCart)
	}

	return (
		<CartContext.Provider value={{cartPokemon,setCartPokemon,addToCart,deletetoCart}}>

		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className={'App ' + theme}>
				<select onChange={event => setTheme(event.target.value)}>
					<option value="light">Light</option>
					<option value="dark">Dark</option>
				</select>
				{children}
			</div>
		</ThemeContext.Provider>
		</CartContext.Provider>
	)
}