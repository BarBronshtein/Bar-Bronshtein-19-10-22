import React from 'react';
import { utilService } from '../services/util.service';
import { useSelector, useDispatch } from 'react-redux';
import {
	getCityOptions,
	addCity,
	removeCity,
	setCeclius,
	setFarenheit,
} from '../store/actions/weatherActions';
import SearchForm from '../components/SearchForm';
import WeatherCardList from '../components/WeatherCardList';
import { AiFillHeart } from 'react-icons/ai';
import { weatherIconService } from '../services/weather-icon.service';
const WeatherApp = ({ curCity }) => {
	const dispatch = useDispatch();
	const isCelcius = useSelector(state => state.weatherModule.isCelcius);
	const options = useSelector(state => state.weatherModule.cityOptions);
	const getOptions = ({ txt }) => dispatch(getCityOptions(txt));
	const onChangeInput = utilService.debounce(getOptions, 300);

	const onSetCelcius = () => dispatch(setCeclius());
	const onSetFarenheit = () => dispatch(setFarenheit());

	const onToggleCity = () =>
		curCity.isFavorite ? dispatch(removeCity(curCity.id)) : dispatch(addCity());

	const showTemperature = isCelcius ? (
		<span>{curCity.curWeather.temperature.c.toString().slice(0, 2)}&#8451;</span>
	) : (
		<span>{curCity.curWeather.temperature.f.toString().slice(0, 2)}&#8457;</span>
	);

	return (
		<section className="weather-app">
			<SearchForm onChangeInput={onChangeInput} cityOptions={options} />
			{curCity && (
				<div className="weather-app-wrapper">
					<div className="top flex space-between align-center">
						<div className="left flex align-center">
							<div className="img-container">
								<img src={weatherIconService(curCity.curWeather.icon)} alt="" />
							</div>
							<div className="description">
								<h2>{curCity.name}</h2>
								<p>
									<span onClick={onSetCelcius}>&#8451; | </span>
									<span onClick={onSetFarenheit}>&#8457;</span>
								</p>
								<p>{showTemperature}</p>
							</div>
						</div>
						<div className="right">
							<AiFillHeart className="icon" onClick={onToggleCity} />
						</div>
					</div>
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
