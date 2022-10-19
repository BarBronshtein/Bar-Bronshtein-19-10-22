import axios from 'axios';
import { utilService } from './util.service';

export const weatherService = {
	cityAutoComplete,
	curWeather,
	fiveDayWeatherForecast,
	getCurLoc,
};
const CACHE_KEY = 'cache';
const cache = JSON.parse(localStorage.getItem(CACHE_KEY || 'null')) || {
	locations: {},
	curWeather: {},
	fiveDayWeatherForecast: {},
};
const API_KEY = process.env.REACT_APP_ACUWEATHER_API_KEY;

async function cityAutoComplete(txt) {
	const cacheKey = 'locations';
	const baseUrl =
		'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
	const query = `?apikey=${API_KEY}&q=` + txt;
	try {
		if (cache[cacheKey][txt]) return cache[cacheKey][txt];
		const { data } = await axios.get(baseUrl + query);
		const locations = data.map(location => ({
			city: location.LocalizedName,
			country: location.Country.LocalizedName,
			id: location.Key,
		}));
		cache[cacheKey][txt] = locations;
		localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
		return locations;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to get data please try again later');
	}
}
async function curWeather(cityId) {
	const cacheKey = 'curWeather';
	const baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
	const query = cityId + '?apikey=' + API_KEY;
	if (cache[cacheKey][cityId]) return cache[cacheKey][cityId];
	try {
		const { data } = await axios.get(baseUrl + query);
		const {
			WeatherText,
			WeatherIcon,
			Temperature: {
				Metric: { Value: celsiusValue },
				Imperial: { Value: farenheitValue },
			},
		} = data[0];
		const curCondition = {
			text: WeatherText,
			icon: WeatherIcon,
			temperature: {
				c: celsiusValue,
				f: farenheitValue,
			},
		};
		cache[cacheKey][cityId] = curCondition;
		localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
		return curCondition;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to get data please try again later');
	}
}
async function fiveDayWeatherForecast(cityId) {
	const cacheKey = 'fiveDayWeatherForecast';
	const baseUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
	const query = cityId + '?apikey=' + API_KEY;
	if (cache[cacheKey][cityId]) return cache[cacheKey][cityId];
	try {
		const { data } = await axios.get(baseUrl + query);
		const dailyForecasts = data.DailyForecasts.map(
			({ Day, Date: localDate, Night, Temperature }) => ({
				date: localDate.slice(0, 10),
				weekDay: utilService.getWeekDay(localDate),
				day: {
					text: Day.IconPhrase,
					icon: Day.Icon,
					precipitation: Day.HasPrecipitation
						? Day.Precipitationintensity + Day.PrecipitationType
						: '',
				},
				night: {
					text: Night.IconPhrase,
					icon: Night.Icon,
					precipitation: Night.HasPrecipitation
						? Night.Precipitationintensity + Night.PrecipitationType
						: '',
				},
				temperature: {
					c: {
						min: utilService.fToC(Temperature.Minimum.Value),
						max: utilService.fToC(Temperature.Maximum.Value),
					},
					f: {
						min: Temperature.Minimum.Value,
						max: Temperature.Maximum.Value,
					},
				},
			})
		);

		cache[cacheKey][cityId] = dailyForecasts;
		localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
		return dailyForecasts;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to get data please try again later');
	}
}

async function _getCityByLoc(pos) {
	const { latitude: lat, longitude: lng } = pos.coords;
	const baseUrl =
		'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search';
	const query = `?apikey=${API_KEY}&q=${lat}%2c${lng}`;
	const { data } = await axios.get(baseUrl + query);
	return {
		city: data.LocalizedName,
		country: data.Country.LocalizedName,
		id: data.Key,
	};
}

function getCurLoc() {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			pos => resolve(_getCityByLoc(pos)),
			() =>
				reject(_getCityByLoc({ coords: { latitude: 32.0853, longitude: 34.7818 } }))
		);
	}).catch(city => city);
}

window.weatherService = weatherService;
