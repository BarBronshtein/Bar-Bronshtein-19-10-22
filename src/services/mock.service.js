export const mockService = {
	getMockCity,
};

function getMockCity() {
	return {
		name: 'Tel Aviv',
		id: 215854,
		country: 'Israel',
		curWeather: {
			text: 'Clear',
			icon: 33,
			temperature: {
				c: 27.1,
				f: 81,
			},
		},

		dailyForecasts: [
			{
				date: '2022-10-22',
				day: {
					text: 'Mostly sunny',
					icon: 2,
				},
				night: {
					text: 'Clear',
					icon: 33,
				},
				temperature: {
					c: {
						min: 16.666666666666668,
						max: 27.22222222222222,
					},
					f: {
						min: 62,
						max: 81,
					},
				},
			},
			{
				date: '2022-10-23',
				day: {
					text: 'Partly sunny',
					icon: 3,
				},
				night: {
					text: 'Partly cloudy w/ t-storms',
					icon: 41,
				},
				temperature: {
					c: {
						min: 17.77777777777778,
						max: 26.11111111111111,
					},
					f: {
						min: 64,
						max: 79,
					},
				},
			},
			{
				date: '2022-10-24',
				day: {
					text: 'Partly sunny',
					icon: 3,
				},
				night: {
					text: 'Mostly clear',
					icon: 34,
				},
				temperature: {
					c: {
						min: 17.22222222222222,
						max: 25,
					},
					f: {
						min: 63,
						max: 77,
					},
				},
			},
			{
				date: '2022-10-25',
				day: {
					text: 'Mostly cloudy',
					icon: 6,
				},
				night: {
					text: 'Mostly clear',
					icon: 34,
				},
				temperature: {
					c: {
						min: 18.88888888888889,
						max: 28.88888888888889,
					},
					f: {
						min: 66,
						max: 84,
					},
				},
			},
			{
				date: '2022-10-26',
				day: {
					text: 'Partly sunny',
					icon: 3,
				},
				night: {
					text: 'Mostly clear',
					icon: 34,
				},
				temperature: {
					c: {
						min: 17.77777777777778,
						max: 27.77777777777778,
					},
					f: {
						min: 64,
						max: 82,
					},
				},
			},
		],
	};
}
