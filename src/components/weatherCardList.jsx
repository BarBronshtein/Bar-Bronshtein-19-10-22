import React from 'react';
import WeatherCard from './WeatherCard';
const WeatherCardList = ({ forecasts }) => {
	if (!forecasts) return <div className="loading">loading...</div>;
	return (
		<section className="weather-card-list flex auto-center">
			{forecasts.map(forecast => (
				<WeatherCard key={forecast.date} forecast={forecast} />
			))}
		</section>
	);
};

export default WeatherCardList;
