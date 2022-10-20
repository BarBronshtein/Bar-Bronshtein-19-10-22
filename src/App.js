import {
	HashRouter as Router,
	Navigate,
	Route,
	Routes,
} from 'react-router-dom';
import './assets/scss/global.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCurLocCity } from './store/actions/weatherActions';
import { loadCities } from './store/actions/weatherActions';
import Header from './components/Header';
import WeatherApp from './pages/WeatherApp';
import Favorites from './pages/Favorites';
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
		<Router>
			<div className="main-app">
				<Header />
				<main className="main-layout">
					<Routes>
						<Route path="/" element={<WeatherApp />} />
						<Route path="/favorites" element={<Favorites />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;
