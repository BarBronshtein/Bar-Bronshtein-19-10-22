import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { MdNightsStay } from 'react-icons/md';
const Header = () => {
	let active;
	const setLightTheme = () => document.body.classList.remove('dark');
	const setDarkTheme = () => document.body.classList.add('dark');
	return (
		<header className="app-header container">
			<section className="app-header wrapper flex space-between align-center">
				<h1 className="logo capitalaize">Abra weather app</h1>
				<div className="theme">
					<FiSettings onClick={setLightTheme} color="#fff" />
					<MdNightsStay color="#000" onClick={setDarkTheme} />
				</div>
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
