import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/scss/global.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCurLocCity } from './store/actions/weatherActions';
import { loadCities } from './store/actions/weatherActions';
import Header from './components/Header';
import WeatherApp from './pages/WeatherApp';
import Favorites from './pages/Favorites';
import UserMsg from './components/UserMsg';
import NotFound from './pages/NotFound';
import Loader from './components/Loader';
function App() {
	const dispatch = useDispatch();
	const { curCity } = useSelector(state => state.weatherModule);
	const { cities } = useSelector(state => state.weatherModule);
	useEffect(() => {
		dispatch(loadCurLocCity());
		dispatch(loadCities());
	}, []);

	// TODO: Create a loading component
	if (!curCity)
		return (
			<div className="loading">
				<Loader />
				<UserMsg />
			</div>
		);
	return (
		<Router>
			<div className="main-app">
				<Header />
				<main className="container">
					<Routes>
						<Route exect path="/" element={<WeatherApp curCity={curCity} />} />
						<Route path="/favorites" element={<Favorites cities={cities} />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<UserMsg />
			</div>
		</Router>
	);
}

export default App;
