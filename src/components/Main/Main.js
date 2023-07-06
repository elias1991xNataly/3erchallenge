import React, { useContext } from 'react';
import { ThemeContext } from '../Header/Header';
import PokeList from "../PokeList/PokeList"



const Main = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	return (
		<div className={'App ' + theme}>
			{/* <PokeList /> */}
		</div>
	)

}


export default Main;
