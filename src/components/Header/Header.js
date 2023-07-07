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
		<CartContext.Provider value={{ cartPokemon, setCartPokemon, addToCart, deletetoCart }}>

			<ThemeContext.Provider value={{ theme, setTheme }}>
				<div className='box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white border-5 border-rose-500'>
				{/* // {'App box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white border-5 border-rose-500' + theme} */}
				<div className="flex justify-center">

					<select className="text-black "  onChange={event => setTheme(event.target.value)}>
						<option className="text-black" value="light">Light</option>
						<option value="dark">Dark</option>
					</select>
				</div>
					{children}
				</div>
			</ThemeContext.Provider>
		</CartContext.Provider>
	)
}