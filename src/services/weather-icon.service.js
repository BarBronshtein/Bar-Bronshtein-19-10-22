export const weatherIconService = icon => {
	const icons = {};
	for (let i = 1; i <= 44; i++) {
		icons[i] = `https://developer.accuweather.com/sites/default/files/${
			i < 10 ? '0' + i : i
		}-s.png`;
	}
	return icons[icon];
};
