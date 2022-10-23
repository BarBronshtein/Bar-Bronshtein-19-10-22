import React from 'react';
import CityOption from './CityOption';
import Loader from './Loader';
const CityOptionsModal = ({ cityOptions, isOpen, onOptionClick }) => {
	if (!isOpen) return '';
	if (!cityOptions)
		return (
			<section className="city-options-modal modal">
				<Loader smallHeight={'0.75rem'} smallWidth={'0.75rem'} />
			</section>
		);
	return (
		<section className="city-options-modal modal">
			<div className="modal-wrapper">
				{cityOptions.map(location => (
					<CityOption
						key={location.id}
						onOptionClick={onOptionClick}
						location={location}
					/>
				))}
			</div>
		</section>
	);
};

export default CityOptionsModal;
