import React from 'react';
import FavoriteCard from '../components/FavoriteCard';

const Favorites = ({ cities }) => {
	console.log(cities);
	if (!cities || !cities.length)
		return <section className="favorites"> You have no favorite cities</section>;
	return (
		<section className="favorites">
			{cities.map(city => (
				<FavoriteCard key={city.id} city={city} />
			))}
		</section>
	);
};

export default Favorites;
