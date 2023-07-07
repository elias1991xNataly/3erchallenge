import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='bg-primary flex justify-center'>
			<div className='flex justify-between'>
				<button className='bg-green-500 text-white no-underline'><Link to="/">POKEDEX</Link></button>
				<button className='bg-green-500 '><Link to="/cart">CART</Link></button>

			</div>
		</div>
	)
}
export default Navbar;
