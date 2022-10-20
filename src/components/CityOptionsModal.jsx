import React from 'react';
import CityModalOption from './CityModalOption';
const CityOptionsModal = ({ cityOptions, isOpen }) => {
	if (!cityOptions || !isOpen) return '';
	return (
		<section className="city-options-modal modal">
			<div className="modal-wrapper">
				{cityOptions.map(location => (
					<CityModalOption key={location.id} location={location} />
				))}
			</div>
		</section>
	);
};

export default CityOptionsModal;
