import React from 'react';
import { utilService } from '../services/util.service';
import { useSelector, useDispatch } from 'react-redux';
import { getCityOptions } from '../store/actions/weatherActions';
import SearchForm from '../components/SearchForm';
import WeatherCardList from '../components/WeatherCardList';
const WeatherApp = ({ curCity }) => {
	const dispatch = useDispatch();
	const options = useSelector(state => state.weatherModule.cityOptions);
	const getOptions = ({ txt }) => dispatch(getCityOptions(txt));
	const onChangeInput = utilService.debounce(getOptions, 300);
	const isCelcius = useSelector(state => state.weatherModule.isCelcius);
	const showTemperature = isCelcius ? (
		<span>{curCity.curWeather.temperature.c}&#8451;</span>
	) : (
		<span>{curCity.curWeather.temperature.f}&#8457;</span>
	);
	return (
		<section className="weather-app">
			<SearchForm onChangeInput={onChangeInput} cityOptions={options} />
			{curCity && (
				<div className="weather-app-wrapper">
					<div className="left">
						{curCity.curWeather.icon}
						<h2>{curCity.name}</h2>
						<p>
							<span>&#8451; | </span>
							<span>&#8457;</span>
						</p>
						<p>{showTemperature}</p>
					</div>
					<div className="right"></div>
					<h2 className="weather-description flex auto-center">
						{curCity.curWeather.text}
					</h2>
					<WeatherCardList forecasts={curCity.dailyForecasts} />
				</div>
			)}
		</section>
	);
};

export default WeatherApp;
