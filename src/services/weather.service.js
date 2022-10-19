import axios from 'axios';
import { utilService } from './util.service';

export const weatherService = {
	cityAutoComplete,
	curWeather,
	fiveDayWeatherForecast,
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
			key: location.Key,
		}));
		cache[cacheKey][txt] = locations;
		localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
		return locations;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to get data please try again later');
	}
}
async function curWeather(cityKey) {
	const cacheKey = 'curWeather';
	const baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
	const query = cityKey + '?apikey=' + API_KEY;
	if (cache[cacheKey][cityKey]) return cache[cacheKey][cityKey];
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
		cache[cacheKey][cityKey] = curCondition;
		localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
		return curCondition;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to get data please try again later');
	}
}
async function fiveDayWeatherForecast(cityKey) {
	const cacheKey = 'fiveDayWeatherForecast';
	const baseUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
	const query = cityKey + '?apikey=' + API_KEY;
	if (cache[cacheKey][cityKey]) return cache[cacheKey][cityKey];
	try {
		const { data } = await axios.get(baseUrl + query);
		const dailyFrecasts = data.DailyForecasts.map(
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

		cache[cacheKey][cityKey] = dailyFrecasts;
		localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
		return dailyFrecasts;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to get data please try again later');
	}
}

window.weatherService = weatherService;
