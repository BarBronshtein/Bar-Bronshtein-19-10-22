import React from 'react';
import { useSelector } from 'react-redux';

const FavoirteCard = ({ city }) => {
	const { isCelcius } = useSelector(state => state.weatherModule);
	const showTemp = isCelcius
		? city.curWeather.temperature.c.toString().slice(0, 2) + '℃'
		: city.curWeather.temperature.f.toString().slice(0, 2) + '℉';
	return (
		<article className="favorite-card flex column">
			<h2 className="city-title">{city.name}</h2>
			<span>{showTemp}</span>
			<h3>{city.curWeather.text}</h3>
		</article>
	);
};

export default FavoirteCard;
