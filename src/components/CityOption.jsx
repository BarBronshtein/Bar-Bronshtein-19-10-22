import React from 'react';
import { GiModernCity } from 'react-icons/gi';
const CityOption = ({ location }) => {
	return (
		<div className="city-option">
			<p className="title">
				{location.city}, {location.country}
			</p>
			<GiModernCity className="icon" />
		</div>
	);
};

export default CityOption;
