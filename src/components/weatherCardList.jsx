import React from 'react';
import { WeatherCard } from './weatherCard';
const weatherCardList = ({ forecasts, Card }) => {
	return (
		<section className="weather-card-list">
			{forecasts.map(forecast => (
				<WeatherCard key={forecast.city} cmp={<Card forecast={forecast} />} />
			))}
		</section>
	);
};

export default weatherCardList;
