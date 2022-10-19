import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormRegister } from '../customHooks/useFormRegister.js';

const SearchForm = props => {
	const [register] = useFormRegister({ txt: '' }, props.onChangeInput);
	const disptach = useDispatch();
	return (
		<form className="search-form">
			<section className="input-group">
				<input type="text" {...register('txt')} placeholder="Enter a city name" />
			</section>
			{/* TODO: Create modal cmp with the autocomplete options */}
		</form>
	);
};

export default SearchForm;
