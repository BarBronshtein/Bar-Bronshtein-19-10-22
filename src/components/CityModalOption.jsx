import React from 'react';
import { GiModernCity } from 'react-icons/gi';
const CityModalOption = ({ location }) => {
	return (
		<div className="option-group">
			<p className="title">
				{location.city}, {location.country}
			</p>
			<GiModernCity className="icon" />
		</div>
	);
};

export default CityModalOption;
