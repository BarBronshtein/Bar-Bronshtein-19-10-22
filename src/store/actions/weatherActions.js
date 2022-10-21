import { cityService } from '../../services/city.service';
import { weatherService } from '../../services/weather.service';

export function getCityOptions(txt) {
	return async dispatch => {
		if (!txt) return;
		try {
			const cities = await weatherService.cityAutoComplete(txt);
			dispatch({ type: 'SET_CITY_OPTIONS', cities });
		} catch (err) {
			console.log(err);
			dispatch({
				type: 'SET_MSG',
				msg: { type: 'error', txt: 'Failed to get data' },
			});
		}
	};
}

export function resetCityOptions() {
	return dispatch => {
		dispatch({ type: 'SET_CITY_OPTIONS', cities: null });
	};
}

export function setCity(city) {
	return async (dispatch, getState) => {
		try {
			dispatch(resetCityOptions());
			city.curWeather = await weatherService.curWeather(city.id);
			city.dailyForecasts = await weatherService.fiveDayWeatherForecast(city.id);
			// Checks if location is already on favorites
			const { cities } = getState().weatherModule;
			if (cities && cities.length > 0) {
				const idx = cities.findIndex(favoriteCity => city.id === favoriteCity.id);
				if (!idx !== -1) city.isFavorite = true;
			}
			city.name = city.city;
			delete city.city;
			dispatch({ type: 'SET_CUR_CITY', city });
		} catch (err) {
			console.log(err);
			dispatch({
				type: 'SET_MSG',
				msg: { type: 'error', txt: 'Failed to get data' },
			});
		}
	};
}

export function loadCurLocCity() {
	return async dispatch => {
		const city = await weatherService.getCurLoc();
		dispatch(setCity(city));
	};
}

export function loadCities() {
	return async dispatch => {
		const cities = await cityService.query();
		dispatch({ type: 'SET_CITIES', cities });
	};
}

export function addCity() {
	return async (dispatch, getState) => {
		const city = getState().city;
		const newCity = await cityService.add({
			id: city.id,
			name: city.name,
			curWeather: city.curWeather,
		});
		dispatch({ type: 'REMOVE_CITY', newCity });
		dispatch({
			type: 'SET_MSG',
			msg: { type: 'success', txt: 'Added ' + city + ' to favorites' },
		});
	};
}

export function removeCity(cityId) {
	return async (dispatch, getState) => {
		try {
			const cityName = getState().city.name;
			const city = await cityService.remove(cityId);
			dispatch({ type: 'REMOVE_CITY', city });
			dispatch({
				type: 'SET_MSG',
				msg: { type: 'success', txt: 'Removed ' + cityName + ' from favorites' },
			});
		} catch (err) {
			console.log(err);
			dispatch({
				type: 'SET_MSG',
				msg: { type: 'error', txt: 'Failed to get data' },
			});
		}
	};
}
