import React from 'react';
import CityOption from './';
const CityOptionsModal = ({ cityOptions, isOpen }) => {
	if (!cityOptions || !isOpen) return '';
	return (
		<section className="city-options-modal modal">
			<div className="modal-wrapper">
				{cityOptions.map(location => (
					<CityOption key={location.id} location={location} />
				))}
			</div>
		</section>
	);
};

export default CityOptionsModal;
