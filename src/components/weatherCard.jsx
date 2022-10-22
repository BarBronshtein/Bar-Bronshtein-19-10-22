import React from 'react';
import { useSelector } from 'react-redux';
import { utilService } from '../services/util.service';
import { weatherIconService } from '../services/weather-icon.service';
const WeatherCard = ({ forecast }) => {
	const isCelcius = useSelector(state => state.weatherModule.isCelcius);

	let temp = isCelcius ? (
		<div className="temperature">
			<span>
				Max {forecast.temperature.c.max.toString().slice(0, 2)}&#8451; |{' '}
			</span>
			<span>Min {forecast.temperature.c.min.toString().slice(0, 2)}&#8451;</span>
		</div>
	) : (
		<div className="temperature">
			<span>
				Max {forecast.temperature.f.max.toString().slice(0, 2)}&#8457; |{' '}
			</span>
			<span>Min {forecast.temperature.f.min.toString().slice(0, 2)}&#8457;</span>
		</div>
	);

	return (
		<article className="weather-card">
			<div className="weather-card-wrapper">
				<h3 className="day capitalaize">{utilService.getWeekDay(forecast.date)}</h3>
				<div className="left">
					<h4>Day</h4>
					<p>{forecast.day.text}</p>
					<div className="img-container">
						<img src={weatherIconService(forecast.day.icon)} alt="" />
					</div>
				</div>
				<div className="right">
					<h4>Night</h4>
					<p>{forecast.night.text}</p>
					<div className="img-container">
						<img src={weatherIconService(forecast.night.icon)} alt="" />
					</div>
				</div>
				<div className="clear"></div>
				{temp}
			</div>
		</article>
	);
};

export default WeatherCard;
