import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	let active;
	return (
		<header className="app-header container">
			<section className="app-header wrapper flex space-between align-center">
				<h1 className="logo capitalaize">Abra weather app</h1>
				<nav className="main-nav">
					<NavLink
						to="/"
						onClick={() => (active = true)}
						className={() => (active !== false ? 'active' : '')}
					>
						Home
					</NavLink>
					<NavLink
						to="/favorites"
						className={navData => {
							active = false;
							return navData.isActive ? 'active' : '';
						}}
					>
						Favoirtes
					</NavLink>
				</nav>
			</section>
		</header>
	);
};

export default Header;
