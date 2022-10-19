import axios from 'axios';

export const weatherService = {
	cityAutoComplete,
	curWeather,
};
const CACHE_KEY = 'cache';
const cache = JSON.parse(localStorage.getItem(CACHE_KEY || 'null')) || {
	locations: {},
	curWeather: {},
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
async function curWeather(key) {
	const cacheKey = 'curWeather';
	const baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
	const query = key + '?apikey=' + API_KEY;
	if (cache[cacheKey][key]) return cache[cacheKey][key];
	try {
		const { data } = await axios.get(baseUrl + query);
		const curCondition = {
			text: data[0].WeatherText,
			icon: data[0].WeatherIcon,
			temperature: {
				c: data[0].Temperature.Metric.Value,
				f: data[0].Temperature.Imperial.Value,
			},
		};

		cache[cacheKey][key] = curCondition;
		localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
		return curCondition;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to get data please try again later');
	}
}
window.weatherService = weatherService;
