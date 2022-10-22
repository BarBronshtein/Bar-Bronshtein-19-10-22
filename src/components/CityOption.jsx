import React from 'react';
import { GiModernCity } from 'react-icons/gi';
const CityOption = ({ location, onOptionClick }) => {
	return (
		<div onClick={onOptionClick.bind(null, location)} className="city-option">
			<p className="title">
				{location.name}, {location.country}
			</p>
			<GiModernCity className="icon" />
		</div>
	);
};
export default CityOption;
