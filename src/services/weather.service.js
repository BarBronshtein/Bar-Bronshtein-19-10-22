import axios from 'axios';

export const weatherService = {
	cityAutoComplete,
};
const CACHE_KEY = 'cache';
const cache = JSON.parse(localStorage.getItem(CACHE_KEY || 'null')) || {};
const API_KEY = process.env.REACT_APP_ACUWEATHER_API_KEY;

async function cityAutoComplete(txt) {
	const baseUrl =
		'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
	const query = `?apikey=${API_KEY}&q=` + txt;
	try {
		if (cache[txt]) return cache[txt];
		const res = await axios.get(baseUrl + query);
		const locations = res.data.map(location => ({
			city: location.LocalizedName,
			country: location.Country.LocalizedName,
		}));
		cache[txt] = locations;
		localStorage.setItem(CACHE_KEY, cache);
	} catch (err) {
		console.log(err);
		throw new Error('Failed to get data please try again later');
	}
}

window.weatherService = weatherService;
