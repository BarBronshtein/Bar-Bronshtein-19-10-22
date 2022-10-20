import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormRegister } from '../customHooks/useFormRegister.js';
import { BiSearch } from 'react-icons/bi';
import CityOptionsModal from './CityOptionsModal.jsx';
const SearchForm = props => {
	const [register] = useFormRegister({ txt: '' }, props.onChangeInput);
	const disptach = useDispatch();
	return (
		<form className="search-form flex auto-center">
			<section className="input-group">
				<input type="text" {...register('txt')} placeholder="Enter a city name" />
				<BiSearch className="input-group icon" />
				<CityOptionsModal cityOptions={props.cityOptions} />
			</section>
			{/* TODO: Create modal cmp with the autocomplete options */}
		</form>
	);
};

export default SearchForm;
