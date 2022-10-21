const INITIAL_STATE = {
	curCity: null,
	cities: null,
	cityOptions: null,
	isCelcius: true,
};

export function weatherReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'SET_CUR_CITY':
			return {
				...state,
				curCity: action.city,
			};
		case 'SET_CITIES':
			return {
				...state,
				cities: action.cities,
			};
		case 'SET_CITY_OPTIONS':
			return {
				...state,
				cityOptions: action.cities,
			};
		case 'ADD_CITY':
			return {
				...state,
				cities: [...state.cities, action.newCity],
			};
		case 'REMOVE_CITY':
			return {
				...state,
				cities: state.cities.filter(city => city.id !== action.cityId),
			};
		case 'SET_IS_CELCIUS':
			return {
				...state,
				isCelcius: action.isCelcius,
			};
		default:
			return state;
	}
}
