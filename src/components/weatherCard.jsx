import React from 'react';
import { useSelector } from 'react-redux';
import { utilService } from '../services/util.service';
const WeatherCard = ({ forecast }) => {
	const isCelcius = useSelector(state => state.weatherModule.isCelcius);

	let temp = isCelcius ? (
		<div className="temperature">
			<span>
				Min {forecast.temperature.c.min.toString().slice(0, 2)}&#8451; |{' '}
			</span>
			<span>Max {forecast.temperature.c.max.toString().slice(0, 2)}&#8451;</span>
		</div>
	) : (
		<div className="temperature">
			<span>
				Min {forecast.temperature.f.min.toString().slice(0, 2)}&#8457; |{' '}
			</span>
			<span>Max {forecast.temperature.f.max.toString().slice(0, 2)}&#8457;</span>
		</div>
	);

	return (
		<article className="weather-card">
			<h3 className="day capitalaize">{utilService.getWeekDay(forecast.date)}</h3>
			<h4>Day</h4>
			<p>{forecast.day.text}</p>
			<p>{forecast.day.icon}</p>
			<h4>Night</h4>
			<p>{forecast.night.text}</p>
			<p>{forecast.night.icon}</p>
			{temp}
		</article>
	);
};

export default WeatherCard;
