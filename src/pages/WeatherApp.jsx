import React from 'react';
import { utilService } from '../services/util.service';
import { useSelector, useDispatch } from 'react-redux';
import { getCityOptions } from '../store/actions/weatherActions';
import SearchForm from '../components/SearchForm';
const WeatherApp = props => {
	// const dis
	const dispatch = useDispatch();
	const options = useSelector(state => state.weatherModule.cityOptions);
	const getOptions = ev => dispatch(getCityOptions(ev?.txt));
	const onChangeInput = utilService.debounce(getOptions, 300);
	return (
		<section className="weather-app">
			<SearchForm onChangeInput={onChangeInput} cityOptions={options} />
		</section>
	);
};

export default WeatherApp;
