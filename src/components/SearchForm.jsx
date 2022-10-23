import React, { useState } from 'react';
import { useFormRegister } from '../customHooks/useFormRegister.js';
import { BiSearch } from 'react-icons/bi';
import CityOptionsModal from './CityOptionsModal.jsx';
import { useDispatch } from 'react-redux';
import { resetCurCity, setCity } from '../store/actions/weatherActions';
const SearchForm = props => {
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);

	const [register] = useFormRegister({ txt: '' }, props.onChangeInput);

	const resetInputField = () =>
		register('txt').onChange({ target: { name: 'txt', value: '' } });

	const onOptionClick = city => {
		dispatch(resetCurCity());
		dispatch(setCity(city));
		resetInputField();
	};

	return (
		<form
			onSubmit={ev => ev.preventDefault()}
			className="search-form flex auto-center"
		>
			<section
				onFocus={() => setIsOpen(true)}
				onBlur={() => setTimeout(() => setIsOpen(false), 90)}
				className="input-group"
			>
				<input
					type="text"
					autoComplete="off"
					{...register('txt')}
					placeholder="Enter a city name"
				/>
				<BiSearch className="input-group icon" />
				<CityOptionsModal
					isOpen={isOpen}
					onOptionClick={onOptionClick}
					cityOptions={props.cityOptions}
				/>
			</section>
			{/* TODO: Create modal cmp with the autocomplete options */}
		</form>
	);
};

export default SearchForm;
