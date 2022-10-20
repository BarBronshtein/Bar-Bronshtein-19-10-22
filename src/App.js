import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCurLocCity } from './store/actions/weatherActions';
import { loadCities } from './store/actions/weatherActions';
function App() {
	const dispatch = useDispatch();
	const curCity = useSelector(state => state.weatherModule.curCity);

	useEffect(() => {
		dispatch(loadCurLocCity());
		dispatch(loadCities());
	}, []);
	// TODO: Create a loading component
	if (!curCity) return <div className="loading">Loading...</div>;
	return (
		<div className="App">
			<header className="App-header">Weather app</header>
		</div>
	);
}

export default App;
