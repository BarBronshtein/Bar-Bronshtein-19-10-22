import React from 'react';
import { Link } from 'react-router-dom';
import scareCrowImg from '../assets/imgs/Scarecrow.png';
const NotFound = () => {
	return (
		<main className="not-found">
			<header className="main-header">
				<h3 className="uppercase">404 not found</h3>
			</header>
			<section className="main-content ">
				<div className="img-container">
					<img src={scareCrowImg} alt="" />
				</div>
				<div className="description">
					<h2>I have bad news for you</h2>
					<p>
						The page you are lookin for might be removed or is temporarily unavailable
					</p>
					<button className="btn action-btn uppercase">
						<Link to="/">Back to Homepage</Link>
					</button>
				</div>
			</section>
			<footer className="main-footer">
				<p>created by BarBronshtein</p>
			</footer>
		</main>
	);
};

export default NotFound;
