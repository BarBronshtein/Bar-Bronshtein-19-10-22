import React from 'react';
import { GiModernCity } from 'react-icons/gi';
const CityOption = ({ location, onOptionClick }) => {
	return (
		<div onClick={onOptionClick.bind(null, location)} className="city-option">
			<p className="title">
				{location.city}, {location.country}
			</p>
			<GiModernCity className="icon" />
		</div>
	);
};
export default CityOption;
