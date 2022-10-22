import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { MdNightsStay } from 'react-icons/md';
const Header = () => {
	const setLightTheme = () => document.body.classList.remove('dark');
	const setDarkTheme = () => document.body.classList.add('dark');

	const { pathname } = useLocation();

	return (
		<header className="app-header container">
			<section className="app-header wrapper flex space-between align-center">
				<h1 className="logo capitalaize">Abra weather app</h1>
				<div className="theme">
					<FiSettings onClick={setLightTheme} color="#fff" />
					<MdNightsStay color="#000" onClick={setDarkTheme} />
				</div>
				<nav className="main-nav">
					<NavLink to="/" className={() => (pathname === '/' ? 'active' : '')}>
						Home
					</NavLink>
					<NavLink
						to="/favorites"
						className={() => (pathname === '/favorites' ? 'active' : '')}
					>
						Favoirtes
					</NavLink>
				</nav>
			</section>
		</header>
	);
};

export default Header;
