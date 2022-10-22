import React from 'react';
import { useSelector } from 'react-redux';

const FavoirteCard = ({ city }) => {
	const { isCeclsius } = useSelector(state => state.weatherModule);
	const showTemp = isCeclsius
		? city.curWeather.temperature.c + '℃'
		: city.curWeather.temperature.f + '℉';
	return (
		<article className="favorite-card flex flex-column">
			<h2 className="city-title">{city.name}</h2>
			<span>{showTemp}</span>
			<h3>{city.curWeather.text}</h3>
		</article>
	);
};

export default FavoirteCard;
