import React from 'react';

const NotFound = () => {
	return (
		<main className="not-found">
			<header class="main-header">
				<h3 class="uppercase">404 not found</h3>
			</header>
			<section class="main-content ">
				<div class="img-container">
					<img src="../assets/imgs/Scarecrow.png" alt="" />
				</div>
				<div class="description">
					<h2>I have bad news for you</h2>
					<p>
						The page you are lookin for might be removed or is temporarily unavailable
					</p>
					<button class="btn action-btn uppercase">Back to Homepage</button>
				</div>
			</section>
			<footer class="main-footer">
				<p>created by BarBronshtein</p>
			</footer>
		</main>
	);
};

export default NotFound;
