import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='bg-primary'>
			<ul>
				<button className='bg-danger text-muted'><Link to="/">POKEDEX</Link></button>
				<button className='bg-danger'><Link to="/cart">CART</Link></button>

			</ul>
		</div>
	)
}
export default Navbar;
