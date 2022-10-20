import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className="app-header">
			<section className="app-header wrapper flex space-between align-center">
				<h1 className="logo capitalaize">Abra weather app</h1>
				<nav className="header-nav">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/favorites">Favoirtes</NavLink>
				</nav>
			</section>
		</header>
	);
};

export default Header;
