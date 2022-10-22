import React from 'react';
import { useSelector } from 'react-redux';
import { weatherIconService } from '../services/weather-icon.service';

const FavoirteCard = ({ city }) => {
	const { isCelcius } = useSelector(state => state.weatherModule);
	const showTemp = isCelcius
		? city.curWeather.temperature.c.toString().slice(0, 2) + '℃'
		: city.curWeather.temperature.f.toString().slice(0, 2) + '℉';
	return (
		<article className="favorite-card flex column">
			<h2 className="city-title">{city.name}</h2>
			<h3>{city.curWeather.text}</h3>
			<img src={weatherIconService(city.curWeather.icon)} alt="" />
			<span>{showTemp}</span>
		</article>
	);
};

export default FavoirteCard;
