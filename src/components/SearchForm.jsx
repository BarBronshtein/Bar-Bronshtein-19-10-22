import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormRegister } from '../customHooks/useFormRegister.js';
import { BiSearch } from 'react-icons/bi';
import CityOptionsModal from './CityOptionsModal.jsx';
const SearchForm = props => {
	const [register] = useFormRegister({ txt: '' }, props.onChangeInput);
	const [isOpen, setIsOpen] = useState(false);
	const disptach = useDispatch();
	return (
		<form onSubmit={props.formSubmit} className="search-form flex auto-center">
			<section
				onFocus={() => setIsOpen(true)}
				onBlur={() => setIsOpen(false)}
				className="input-group"
			>
				<input type="text" {...register('txt')} placeholder="Enter a city name" />
				<BiSearch className="input-group icon" />
				<CityOptionsModal isOpen={isOpen} cityOptions={props.cityOptions} />
			</section>
			{/* TODO: Create modal cmp with the autocomplete options */}
		</form>
	);
};

export default SearchForm;
