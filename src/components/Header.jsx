import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className="app-header container">
			<section className="app-header wrapper flex space-between align-center">
				<h1 className="logo capitalaize">Abra weather app</h1>
				<nav className="main-nav">
					<NavLink to="/" className={navData => (navData.isActive ? 'active' : '')}>
						Home
					</NavLink>
					<NavLink
						to="/favorites"
						className={navData => (navData.isActive ? 'active' : '')}
					>
						Favoirtes
					</NavLink>
				</nav>
			</section>
		</header>
	);
};

export default Header;
